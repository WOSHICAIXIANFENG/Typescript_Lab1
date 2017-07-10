/**
 * Created by Samuel on 9/7/2017.
 */
class BaseObject {
    constructor(public width:number, public length: number) {
    }
}

class Rectangle extends BaseObject {
    public calcSize() {
        return this.width * this.length;
    }
}

let rectangle = new Rectangle(5,2);

console.log(rectangle.calcSize());