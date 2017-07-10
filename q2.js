/**
 * Created by Samuel on 9/7/2017.
 */
var Car = (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log(" " + this.name + " is saying: Tooooooooooot !");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration = this.acceleration + speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
