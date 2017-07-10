/**
 * Created by Samuel on 9/7/2017.
 */
class Car {
    name: string;
    acceleration: number;

    constructor(name:string) {
        this.name = name;
    }

    honk() {
        console.log(` ${this.name} is saying: Tooooooooooot !`);
    }

    accelerate(speed: number) {
        this.acceleration = this.acceleration + speed;
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
