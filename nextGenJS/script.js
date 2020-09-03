/* function myFunc () {

}

const myFunc = () => {

};

function printMyName (name) {
    console.log(name);
};

printMyName('max');

const printMyName = name => {
    console.log('max');
};
printMyName();

const printMyName = (name, age) => {
    console.log(name, age);
};
printMyName('max', 28);

const multiply = (number) => {
    return number * 2;
};

console.log(multiply(2));

//é igual a anterior
const multiply = number => number *2;
console.log(multiply(2)); */

/* ## Classes em JS

class Human { 
    gender = 'male' 
    
    printGender= () => {
        console.log(this.gender);
    }
}

class Person extends Human{
    constructor() {
        super();
        this.name = 'Max';
        this.gender= 'male';
    }

    printMyName() {
        console.log(this.name);
    }
};

const person = new Person();
person.printMyName();
person.printGender(); */