// Binding and Call, Apply Methods
// Fixed a buggy code example that was not working due to incorrect use of 'this' keyword. The greet function was not able to access the properties of the fluffy object because it was bound to the butters object. By using the bind method, we can create a new function that is bound to the fluffy object, allowing us to access its properties correctly.

const butters = {
    firstName: "Butters",
    lastName: "Cluckly",
    greet: function(){
        return `Hello ${this.firstName} ${this.lastName}`
    }
}

const fluffy = {
    firstName: "Fluffy",
    lastName: "Meowson",
}

function greetFluffy(){
    // return butters.greet.call(fluffy); could also work
    const greet = butters.greet.bind(fluffy);
    return greet();
}
