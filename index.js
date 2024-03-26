// index.js

// Function that receives a callback function and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("This is an anonymous function");
    };
}

// Named function used in returnsANamedFunction
function namedFunction() {
    console.log("This is a named function");
}

module.exports = {
    receivesAFunction,
    returnsANamedFunction,
    returnsAnAnonymousFunction
};
