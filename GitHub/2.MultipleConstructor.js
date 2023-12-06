// Multiple constructors are not possible in ES-6
// But we can use "arguments" array to check the values

class Rectangle {
    constructor(height, width) {
        if (arguments.length) {
            if (height) this.height = height;
            if (width) this.width = width;
        }
    }

    area() {
        return this.calcArea();
    }

    calcArea() {
        return this.height * this.width;
    }
}

let rect = new Rectangle(5, 6);
console.log(rect.area());