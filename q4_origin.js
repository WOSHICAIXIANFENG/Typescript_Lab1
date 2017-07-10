/**
 * Created by Samuel on 9/7/2017.
 */
var person = {_firstName: ""};

Object.defineProperty(person, "firstName", {
    get: function() {
        return this._firstName;
    },
    set: function (value) {
        this._firstName = value.toUpperCase();
    },
    enumerable: true,
    configurable: true
});

person.firstName = "Asaad";
console.log(person.firstName);