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

/* ## SPREAD OPERATOR AND REST OPERATOR

CASO 1 - SPREAD

const numbers = [ 1,2,3];
const newNumbers = [ ...numbers, 4]; // Esse é o operador spread. Ele importa as informações de outro array

console.log(newNumbers);

CASO 2 - SPREAD
const person = {
    name:'Max'
};

const newPerson = {
    ...person, // spread operator
    age: 28,
};

console.log(newPerson);

CASO 3 - REST
const filter = (...args) => { // nesse caso o operador rest cria um array com as informações
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3));
 */