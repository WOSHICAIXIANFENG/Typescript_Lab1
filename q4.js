/**
 * Created by Samuel on 9/7/2017.
 */
var Person = (function () {
    function Person() {
        this._firstName = "";
    }
    Object.defineProperty(Person.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person1 = new Person();
console.log(person1.firstName);
person1.firstName = "Asaad";
console.log(person1.firstName);
