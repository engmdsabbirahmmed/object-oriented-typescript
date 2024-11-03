"use strict";
{
    //class-and-object
    // class Animal {
    //     name: string;
    //     species: string;
    //     sound: string;
    //     price: number;
    //     constructor(name: string, species: string, sound: string, price: number) {
    //         this.name = name;
    //         this.species = species;
    //         this.sound = sound;
    //         this.price = price;
    //     }
    //     makeSound() {
    //         console.log(`This ${this.name} says ${this.sound}`)
    //     }
    // }
    //using parameter:=>
    class Animal {
        constructor(name, species, sound, price) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            this.price = price;
        }
        makeSound() {
            console.log(`This ${this.name} says ${this.sound}`);
        }
        findPrice() {
            console.log(`This ${this.name}'s price is ${this.price}`);
        }
    }
    const dog = new Animal('Bangladeshi Dog', 'dog', 'ghew ghew', 0);
    const cat = new Animal('Indian Pussy Cat', 'cat', 'meow meow', 700);
    const tiger = new Animal('Tiger mama', 'Bengal tiger', 'halum halum', 'infinity');
    cat.makeSound();
    dog.makeSound();
    tiger.makeSound();
    tiger.findPrice();
    //
}
