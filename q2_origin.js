/**
 * Created by Samuel on 9/7/2017.
 */
function Car(name) {
    this.name = name;
    this.acceleration = 0;
    this.honk = function() {
        console.log(` ${this.name} is saying: Tooooooooooot !`);
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);