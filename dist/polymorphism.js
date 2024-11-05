"use strict";
{
    class Shape {
        getArea() {
            return 0;
        }
    }
    class Square extends Shape {
        constructor(side) {
            super();
            this.side = side;
        }
        getArea() {
            return this.side * this.side;
        }
    }
    class Triangle extends Shape {
        constructor(height, base) {
            super();
            this.height = height;
            this.base = base;
        }
        getArea() {
            return 0.5 * this.height * this.base;
        }
    }
    const getShapeArea = (param) => {
        console.log(param.getArea());
    };
    const shape = new Shape();
    const squareArea = new Square(5);
    const triangleArea = new Triangle(3, 6);
    getShapeArea(shape);
    getShapeArea(squareArea);
    getShapeArea(triangleArea);
}
