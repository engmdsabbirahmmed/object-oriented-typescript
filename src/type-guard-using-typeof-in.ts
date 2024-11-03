{
    //-----------------------------type guard - typeof----------------------------------
    type AlphaNumeric = string | number;

    const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
        if (typeof num1 === 'number' && typeof num2 === 'number') {
            return num1 + num2;
        }
        else {
            return num1.toString() + num2.toString();
        }
    }
    const result1 = add(2, 4);
    const result2 = add('2', 4);
    // console.log(result1)
    // console.log(result2)


    //------------------------------in - type guard-------------------------------
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'Admin';
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if ('role' in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else{
            console.log(`My name is ${user.name} and i am a normal user`);
        }
    }

    const normalUser :NormalUser={
        name:'Mr. Normal Hablu',
    }
    const adminUser :AdminUser={
        name: 'Mr. Admin gablu',
        role:'Admin',
    }
    getUser(normalUser);
    getUser(adminUser);
    //
}