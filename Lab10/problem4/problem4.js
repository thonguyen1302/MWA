/**
 * Created by Sulav on 7/10/17.
 */
var Person = (function () {
    function Person() {
        this._firstname = "";
    }
    Object.defineProperty(Person.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value.toUpperCase();
        },
        enumerable: true,
        configurable: true
    });
    return Person;
}());
var person = new Person();
person.firstname = "Asaad";
console.log(person.firstname);
