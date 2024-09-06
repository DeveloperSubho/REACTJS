3 ways to test mapStateToProps and mapDispatchToProps
You already know that you shouldn't actually test the result of calling connect (the connected component) - as Redux already makes sure the behaviour of connect is correct.

Instead, you test your wrapped component separately, by exporting it as a named export.

But what about mapStateToProps and mapDispatchToProps? This is custom code that could have bugs.

The Redux docs don’t really mention an official way to test them.
But you want them tested, to make sure the wiring is right, you action is called as expected and to have better coverage :)

So what options do you have? Let's go over 3 of the most used solutions in the community:

To demonstrate, I created a simple Dice component that we can roll to dispatch actions.

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Component 1 - "Base component"
// Exporting it is a good practice for testing its own logic
export const Dice = ({ lastRolledNumber, onRollDice }) => (
    <div>        
        <p>The last rolled number was {lastRolledNumber}.</p>
        <button onClick={onRollDice}>Roll dice</button>
    </div>
);

Dice.propTypes = {
    lastRolledNumber: PropTypes.number.isRequired,
    onRollDice: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    lastRolledNumber: state.lastRolledNumber
});

const mapDispatchToProps = (dispatch) => ({
    onRollDice: () => dispatch({ type: 'ROLL_DICE' })
});

// Component 2 - Container component
// Export it as a default export
export default connect(mapStateToProps, mapDispatchToProps)(Dice);
Option 1. Just export mapStateToProps and mapDispatchToProps and test them directly
At first, I was really not in favour of this method, because you need to convert to public parts of your code that you wouldn’t normally make public.
However, I see how this is a pragmatic solution, and the chances of someone mistaking these methods as public somewhere in the code is small.

Steps:

make the methods public so you can import them in your test
write simple plain JS tests for your logic
Here is how the test would look:

import React from 'react';
// We made the mapStateToProps and mapDispatchToProps methods public, 
// so they can now be imported in the test
import { mapStateToProps, mapDispatchToProps } from './Dice';

describe('Dice', () => {
    it('should show previously rolled value', () => {
        const initialState = {
            lastRolledNumber: 1
        };

        // Just call the method directly passing in sample data
        // to make sure it does what it's supposed to
        expect(mapStateToProps(initialState).lastRolledNumber).toEqual(1);
    });

    it('should roll the dice again when button is clicked', () => {
        const dispatch = jest.fn();

        // For the `mapDispatchToProps`, call it directly but pass in
        // a mock function and check the arguments passed in are as expected
        mapDispatchToProps(dispatch).onRollDice();
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'ROLL_DICE'});
    });
});
Pros
quick
pragmatic
Cons
you’re exposing private code of the app as public just for testing, which is a bit of a code smell
Option 2: Shallow render the Container and test that actions are dispatched
Using Enzyme, we can shallow render the Container component, allowing us to spy on the dispatch to see that it was called.
This is a nicer approach than the previous one, since we are only using the external API of the component.
Its downside however is that it requires a bit more ceremony to setup, as we need to use a mock store.

Steps

add redux-mock-store as a dev dependency
create mock store
write tests for Container component, passing in the mock store
import React from 'react';
import { shallow } from 'enzyme';
import '../test-config'; // Setup Enzyme & Adapter

import DiceContainer from './Dice';

// Create the mock store
import configureMockStore from 'redux-mock-store';
const mockStore = configureMockStore();

describe('Dice', () => {
    let wrapper, store;

    beforeEach(() => {
        const initialState = {
            lastRolledNumber: 1
        };
        store = mockStore(initialState);
        // Shallow render the container passing in the mock store
        wrapper = shallow(
            <DiceContainer store={store} />
        );
    });

    it('should show previously rolled value', () => {
        // test that the state values were correctly passed as props
        expect(wrapper.props().lastRolledNumber).toBe(1);
    });

    it('should roll the dice again when button is clicked', () => {
        // test that the component events dispatch the expected actions 
        wrapper.simulate('rollDice');

        const actions = store.getActions();
        expect(actions).toEqual([ { type: 'ROLL_DICE' } ]);
    });
});
Pros
clean solution, testing through the public API
Cons
a bit more work in setting up the mock store
Option 3: Use action creators and selectors
This is a way to just skip using mapStateToProps and mapDispatchToProps entirely. And if you don’t use them, you don’t need to test them, right? :D

When using connect, it is also possible to pass in an object of action creators instead of mapDispatchToProps.
Also, for mapping the state, it's actually recommended to have selector functions, instead of reading from state directly.
The advantage of this is that you can just separately test your action creators and selectors and skip testing the Container entirely.

Steps:

extract each mapDispatchToProps property as a separate action creator function in another file
extract each mapStateToProps property as a separate selector function in another file
write tests for the selectors and action creators
// selectors.js
export const getLastRolledNumber = (state) => (state.lastRolledNumber);

// actionCreators.js
export const rollDice = () => {
    return { type: 'ROLL_DICE' };
};
// Component - Dice.js
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// the logic reading from the state 
// and dispatching actions now lives in separate files
import { rollDice } from './actionCreators';
import { getLastRolledNumber } from './selectors';

export const Dice = ({ lastRolledNumber, onRollDice }) => (
    <div>        
        <p>The last rolled number was {lastRolledNumber}.</p>
        <button onClick={onRollDice}>Roll dice</button>
    </div>
);

Dice.propTypes = {
    lastRolledNumber: PropTypes.number.isRequired,
    onRollDice: PropTypes.func.isRequired
}

// New syntax for connect, linking it to our selectors & action creators
export default connect((state) => ({
    lastRolledNumber: getLastRolledNumber(state)
}), { 
    onRollDice: rollDice 
})(Dice);
Your tests would then be really small:

// selectors.test.js
import { getLastRolledNumber } from './selectors';

describe('Dice selectors', () => {
    it('should select last rolled number from state', () => {
        const state = { lastRolledNumber: 7 };
        expect(getLastRolledNumber(state)).toBe(7);
    });

});

// actions.test.js
import { rollDice } from './actionCreators';

describe('Dice actions', () => {
    it('should dispatch ROLL_DICE action', () => {
        expect(rollDice()).toEqual({ type: 'ROLL_DICE'});
    })
});
Why does this work?
When you pass an object as the 2nd parameter to connect, react-redux calls bindActionCreators behind the scenes for you.

// So calling connect like this ...
connect(null, { onClick: doSomeAction });

// is the same as ...
connect(null, (dispatch) => {
    return bindActionCreators({
        onClick: doSomeAction
    }, dispatch);
});
What will end up being passed as the onClick prop is a function that calls dispatch for you, and expects the action creator to return an object to dispatch. Any data passed in from the component will be passed right into the action creator:

function () {
  return dispatch(doSomeAction.apply(undefined, arguments));
}
Pros:
succint
Cons:
small risk of forgetting to pass a certain prop / mispelling it (could be prevented by using Flow)
Conclusions
Turns out there are many possiblilities to test mapDispatchToProps and mapStateToProps.