const getPromise = async (exec) => {
  return new Promise((resolve, reject) => {
    if (exec) {
      setTimeout(() => {
        resolve({
          name: 'Alan Turing',
          age: 25,
        });
      }, 2000);
    } else {
      // You can pass any value to reject function, whether it be
      // a string, number, boolean, object or even an array.
      reject('Nayy!');
    }
  });
};

window.onload = async function() {
  const message1 = await getPromise(true);
  console.log(message1);
  console.log(typeof message1);
  console.log("message1 has been processed...");

  try {
    const message2 = await getPromise(false);

    console.log(message2);
    console.log("message2 has been processed...");
  } catch (error) {
    console.log("error in message2");
    console.log(error);
    console.log(typeof error);
  }

  console.log("BIBBIDY BOBBIDY BOO!");

  getPromise(false)
    .then((message) => {
      console.log(message);
      console.log("message has been processed...");

      return 45;
    })
    .then((message) => {
      console.log(`The chained message is ${message}`);
    })
    .then(() => {
      console.log("This is the last then");
    })
    .then(() => {
      console.log("This is the last then, finally...");
    })
    .catch((error) => {
      console.log("error in message");
      console.log(error);
      console.log(typeof error);
    });
};
