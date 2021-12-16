// optional catch binding omits the catch binding in the try...catch statement.
try {
    // check if a feature is implemented
} catch (error) {
    // fall back to a less desirable feature
}

//Wihout optional catch binding
try {
    throw new Error("Some random error");
} catch (error) {
    console.log(error)
}

//With optional catch binding
try {
    throw new Error("Hey");
} catch {
    console.log("No parameter for catch");
}