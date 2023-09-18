// Your task is to implement a custom Promise implementation using ES6. The Promise object represents a value that may not be available yet but will be resolved at some point in the future.

// You will need to use polyfills to ensure that your implementation works in all modern browsers. Your implementation should include the following methods:

//     then(onFulfilled, onRejected) - Adds a callback to be executed when the Promise is resolved.
//     catch(onRejected) - Adds a callback to be executed when the Promise is rejected.
//     resolve(value) - Resolves the Promise with a given value.
//     reject(reason) - Rejects the Promise with a given reason.
class CustomPromise {
  constructor(executor) {
    this.onResolve = undefined;
    this.onReject = undefined;

    // Set the initial state to false
    this.fulfilled = false;
    this.rejected = false;
    this.called = false;
    this.value = undefined;

    executor(this.resolve.bind(this), this.reject.bind(this));
  }

  //Called if Promise is resolved to return the output
  then(callback) {
    this.onResolve = callback;

    if (this.fulfilled && !this.called) {
      console.log("Inside then");
      this.called = true;
      this.onResolve(this.value);
    }
    return this;
  }

  //Called if Promise is rejected to return the error
  catch(onRejected) {
    this.onReject = onRejected;

    if (this.rejected && !this.called) {
      this.called = true;
      this.onReject(this.value);
    }
    return this;
  }

  //Called if Promise is resolved
  resolve(value) {
    this.fulfilled = true;
    this.value = value;

    if (typeof this.onResolve === "function") {
      console.log("Inside resolve");
      this.onResolve(value);
      this.called = true;
    }
  }

  //Called if Promise is rejected
  reject(reason) {
    this.rejected = true;
    this.value = reason;

    if (typeof this.onReject === "function") {
      this.onReject(reason);
      this.called = true;
    }
  }
}
//IMPILMENTATION ENDS

//================== APPLICATION ========================
//   Test implementation by creating a Promise that resolves, and using the then method to handle the result:
const myPromise = new CustomPromise((resolve, reject) => {
  // Resolve the Promise after 1 second
  setTimeout(() => {
    resolve("Success!");
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result); // Output: Success!
  })
  .catch((error) => {
    console.error(error);
  });

//   Test implementation by creating a Promise that rejects, and using the catch method to handle the error:
const myPromise2 = new CustomPromise((resolve, reject) => {
  // Reject the Promise immediately
  reject("Error! Promise not fullfilled");
});

myPromise2.catch((error) => {
  console.log("Inside reject promise"); // Output: Inside reject promise
  console.error(`"Cought an error: "${error}`); // Output: Cought an error: Error! Promise not fullfilled
});

// You will need to fill in the constructor and the methods with the appropriate code to make this implementation work.
// Requirements

//     Your implementation should work in all modern browsers, including IE11 and above.
//     Your implementation should include error handling for any unexpected behavior.
//     Your implementation should not use any external libraries or frameworks.
//     Your implementation should use ES6 features, including classes and arrow functions.
//     Your implementation should be well-documented with clear explanations of how it works.

// Testing

// To test your implementation, you can create a new instance of your CustomPromise class and use it to resolve or reject a value, and then use the then and catch methods to handle the results.

// Here's an example of how to use your implementation:

// const myPromise = new CustomPromise((resolve, reject) => {
//   // Resolve the Promise after 1 second
//   setTimeout(() => {
//     resolve("Success!");
//   }, 1000);
// });

// myPromise
//   .then((result) => {
//     console.log(result); // Output: Success!
//   })
//   .catch((error) => {
//     console.error(error);
//   });

//   You can also test your implementation by creating a Promise that rejects, and using the catch method to handle the error:
// const myPromise = new CustomPromise((resolve, reject) => {
//   // Reject the Promise immediately
//   reject("Error!");
// });

// myPromise.catch((error) => {
//   console.error(error); // Output: Error!!
// });
