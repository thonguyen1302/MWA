/**
 * Created by Sulav on 7/10/17.
 */

class Car {
    acceleration: number = 0;

    constructor(public name: string) {
    }

    honk(): void {
        console.log(`${this.name} is saying: Toooooooooot!`);
    }

    accelerate(speed: number): void {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);