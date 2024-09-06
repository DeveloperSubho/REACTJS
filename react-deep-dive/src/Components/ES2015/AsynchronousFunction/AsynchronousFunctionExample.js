/**
 * Asynchronous Functions with async / await
 *
 * Asynchronous functions added to the JavaScript specification in ES2016 with async
 * and await can be seen as the next step in the asynchronous evolution of the JavaScript ecosystem.
 * While still using promises under the hood,
 * async/await makes them invisible and allows us to write asynchronous code that resembles synchronous code.
 * No more callbacks,then(), or catch().
 *
 * Note: Synchronous code is executed in sequence, meaning each statement waits for the previous statement to finish before executing.
 * On the other hand, asynchronous code does not have to wait, meaning your program can continue to run.
 * 
 (async () => {
  try {
    const user = await getUser(id);
    const friends = await user.getFriends();
    const settings = await friends[0].getSettings();
    if (settings.notifications === true) {
      const status = await email.send('You are my first friend!');
      if (status === 200) {
        alert('User has been notified via email');
        }
      }
    } catch (err) {
      console.error('An error occured:', err.message);
      }
  })();
 */
