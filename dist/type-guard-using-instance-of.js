"use strict";
{
    //type-guard-using-instance-of
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log('I am making sound');
        }
    }
    class Tiger extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeHalum() {
            console.log('I am making halum halum sounds');
        }
    }
    class Cow extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeHamba() {
            console.log('I ama making hamba hamba sound');
        }
    }
    // checked the animal  what this is
    const isTiger = (animal) => {
        return animal instanceof Tiger;
    };
    const isCow = (animal) => {
        return animal instanceof Cow;
    };
    //If we want to handle it in a smart way then we can use functions
    const getAnimal = (animal) => {
        if (isTiger(animal)) {
            animal.makeHalum();
        }
        else if (isCow(animal)) {
            animal.makeHamba();
        }
        else {
            animal.makeSound();
        }
    };
    const tiger = new Tiger('Tiger mama', 'Tiger');
    const cow = new Cow('Cow mama', 'Cow');
    getAnimal(tiger);
    getAnimal(cow);
    //
}
