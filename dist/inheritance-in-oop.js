"use strict";
{
    //
    // class Student {
    //     name: string;
    //     education: string;
    //     age: number;
    //     address: string;
    //     constructor(name: string, classNo: string, age: number, address: string) {
    //         this.name = name;
    //         this.classNo = classNo;
    //         this.age = age;
    //         this.address = address;
    //     }
    //     haveMoney(amountOfMoney: number) {
    //         console.log(`${this.name} have only ${amountOfMoney} taka`)
    //     }
    // }
    // const student1 = new Student('Md. Sabbir', 'Bsc in CSE', 23, 'dhaka');
    // student1.haveMoney(43);
    // class Teacher {
    //     name: string;
    //     classNo: string;
    //     age: number;
    //     address: string;
    //     designation: string
    //     constructor(name: string, classNo: string, age: number, address: string, designation: string) {
    //         this.name = name;
    //         this.classNo = classNo;
    //         this.age = age;
    //         this.address = address;
    //         this.designation = designation;
    //     }
    //     haveMoney(amountOfMoney: number) {
    //         console.log(`${this.name} have only ${amountOfMoney} taka`)
    //     }
    //     hisDesignation() {
    //         console.log(`${this.name}'s designation is ${this.designation}`)
    //     }
    // }
    // const teacher = new Teacher('Md. John', 'Bsc in CSE', 23, 'dhaka', 'Associate Professor');
    // teacher.haveMoney(102345);
    // teacher.hisDesignation();
    //------------------------using inheritance----------------------------------
    class Person {
        constructor(name, age, education, address) {
            this.name = name;
            this.age = age;
            this.education = education;
            this.address = address;
        }
        haveMoney(amountOfMoney) {
            console.log(`${this.name} has ${amountOfMoney} taka`);
        }
    }
    class Student extends Person {
        constructor(name, age, education, address) {
            super(name, age, education, address);
        }
        isCompleteStudy() {
            console.log(`${this.name} is not completing his study`);
        }
    }
    const student = new Student('sabbir', 23, 'bsc in cse', 'dhaka');
    // student.haveMoney(344);
    // student.isCompleteStudy();
    class Teacher extends Person {
        constructor(name, age, education, address, designation) {
            super(name, age, education, address);
            this.designation = designation;
        }
        hasDesignation() {
            console.log(`${this.name} has ${this.designation}.`);
        }
    }
    const teacher1 = new Teacher('Md. Monir', 45, 'msc', 'cumilla', 'assistant teacher');
    // teacher1.hasDesignation()
    // teacher1.haveMoney(4343434)
}
