/**
 * To reiterate the difference between promises and callbacks, let’s have a look at the following example:
 */

/**
const errorHandler = (err) => {
  console.error("An error occured:", err.message);
};

getUser(
  id,
  (user) => {
    user.getFriends((friends) => {
      friends[0].getSettings((settings) => {
        if (settings.notifications === true) {
          email.send(
            "You are my first friend!",
            (status) => {
              if (status === 200) {
                alert("User has been notified via email!");
              }
            },
            errorHandler
          );
        }
      }, errorHandler);
    }, errorHandler);
  },
  errorHandler
);
*/

/**
Let’s breakdown the above code snippet to get a clearer picture:

1. The asynchronous getUser() function is called to obtain user information with their id.
2. Using its getFriends() method, we can obtain a list of all of their friends.
3. To collect the first friend’s (friends[0]) user settings, the getSettings() method is called.
4. If this friend has allowed email notifications, an email is sent to them.
5. We react asynchronously to the response of the mail server.

Despite this example being relatively simple, the code is nested six layers deep — 
and we are not even taking care of explicit error handling or edge cases.
Working with callbacks can quickly become cumbersome and confusing, 
especially once callback functions trigger further callback functions, such as in our example. 
It is no surprise that this is often called “callback hell” or the “pyramid of doom”.
*/

/**
Transforming a callback into a promise
Let’s rewrite the above example again and assume that our fictional API methods will each return a promise:
*/

/**
const errorHandler = (err) => {
  console.error('An error occured:', err.message);
};

getUser(id)
.then((user) => user.getFriends())
.then((friends) => friends[0].getSettings())
.then((settings) => {
  if (settings.notifications === true) {
    return email.send('You are my first friend!');
  }
})
.then((status) => {
  if (status === 200) {
    alert('User has been notified via email');
  }
})
.catch(errorHandler);
*/
/**
Geolocation API
r asking the user for permission to use their current location.

The getCurrentPosition() method expects two callbacks as arguments:

success callback: An object is passed to this callback with the user’s location if they have previously agreed.
error callback: An error object is passed to this callback. This can occur because the user has not given permission to use their current location or the location is inaccessible for another reason.
Following is the code snippet for the callback: 
*/
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(
      `User position is at ＄{position.coords.latitude}, ＄{
        position.coords.longitude
      }`
    );
  },
  () => {
    console.log("Unable to locate user");
  }
);
/**
The callback can be transformed into a promise:
*/
const getCurrentPositionPromise1 = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};
/**
We got it! Now we can access the user’s location without using callback syntax:
getCurrentPositionPromise2()
.then((position) => {
  console.log(
    `User position is at ＄{position.coords.latitude}, ＄{
      position.coords.longitude
    }`
  );
})
.catch(() => {
  console.log('Unable to locate user');
});
*/
