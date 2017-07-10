/**
 * Created by Samuel on 9/7/2017.
 */
class Person {
    private _firstName:string =  "";
    get firstName() {
        return this._firstName;
    }
    set firstName(value:string) {
        this._firstName = value.toUpperCase();
    }
}

let person1 = new Person();
console.log(person1.firstName);
person1.firstName = "Asaad";
console.log(person1.firstName);