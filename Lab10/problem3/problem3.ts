/**
 * Created by Sulav on 7/10/17.
 */

class BaseObject {
    width: number = 0;
    length: number = 0;
}

class Rectangle extends BaseObject {
    constructor() {
        super();
        this.width = 5;
        this.length = 2;
    }

    calcSize(): number {
        return this.width * this.length;
    }
}

let rectangle: Rectangle = new Rectangle();
console.log(rectangle.calcSize());
