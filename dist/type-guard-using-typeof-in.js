"use strict";
{
    const add = (num1, num2) => {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        }
        else {
            return num1.toString() + num2.toString();
        }
    };
    const result1 = add(2, 4);
    const result2 = add('2', 4);
    const getUser = (user) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name} and i am a normal user`);
        }
    };
    const normalUser = {
        name: 'Mr. Normal Hablu',
    };
    const adminUser = {
        name: 'Mr. Admin gablu',
        role: 'Admin',
    };
    getUser(normalUser);
    getUser(adminUser);
    //
}
