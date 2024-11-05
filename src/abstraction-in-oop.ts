{
    //abstraction => 1. interface, 2. abstract

    //interface:
    interface Vehicle {
        startEngine(): void;
        stopEngine(): void;
        move(): void;
    }

    class CarInterface implements Vehicle {
        startEngine(): void {
            console.log('I am starting the engine');
        }
        stopEngine(): void {
            console.log('I am starting the engine');
        }
        move(): void {
            console.log('I am starting the engine');
        }
    }

    const car1 = new CarInterface()
    // car1.startEngine()

    //--------------------------------abstract----------------------------------
    abstract class CarAbstract {
        abstract startEngine(): void;
        abstract stopEngine(): void;
        abstract move(): void;
        test() {
            console.log('I am just testing')
        }
    }

    class Car2 extends CarAbstract {
        startEngine(): void {
            console.log('I am starting the engine');
        }
        stopEngine(): void {
            console.log('I am starting the engine');
        }
        move(): void {
            console.log('I am starting the engine');
        }
    }

    const car2 = new Car2();
    car2.test()
}