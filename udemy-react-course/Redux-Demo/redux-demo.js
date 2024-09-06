const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type == "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type == "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};

// We dont execute the counterReducer, we just point at it
// It will be executed by redux
const store = redux.createStore(counterReducer);

console.log("Initial State");
console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

// We dont execute the counterSubscriber, we just point at it
// It will be executed by redux
store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
