{
    class Shape {
        getArea(): number {
            return 0
        }
    }

    class Square extends Shape {
        side: number;
        constructor(side: number) {
            super();
            this.side = side;
        }
        getArea(): number {
            return this.side * this.side;
        }

    }

    class Triangle extends Shape {
        height: number;
        base: number;
        constructor(height: number, base: number) {
            super();
            this.height = height;
            this.base = base;
        }

        getArea(): number {
            return 0.5 * this.height * this.base
        }
    }

    const getShapeArea = (param: Shape) => {
        console.log(param.getArea())
    };

    const shape = new Shape();
    const squareArea = new Square(5);
    const triangleArea = new Triangle(3, 6);

    getShapeArea(shape)
    getShapeArea(squareArea);
    getShapeArea(triangleArea);
}