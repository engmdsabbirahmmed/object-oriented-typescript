"use strict";
{
    class CarInterface {
        startEngine() {
            console.log('I am starting the engine');
        }
        stopEngine() {
            console.log('I am starting the engine');
        }
        move() {
            console.log('I am starting the engine');
        }
    }
    const car1 = new CarInterface();
    // car1.startEngine()
    //--------------------------------abstract----------------------------------
    class CarAbstract {
        test() {
            console.log('I am just testing');
        }
    }
    class Car2 extends CarAbstract {
        startEngine() {
            console.log('I am starting the engine');
        }
        stopEngine() {
            console.log('I am starting the engine');
        }
        move() {
            console.log('I am starting the engine');
        }
    }
    const car2 = new Car2();
    car2.test();
}
