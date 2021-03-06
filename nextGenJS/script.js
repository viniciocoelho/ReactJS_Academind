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
const filter = (...args) => {
  // nesse caso o operador rest cria um array com as informações
  return args.filter((el) => el === 1);
};
console.log(filter(1, 1, 2, 3, 1));


## DESTRUCTURING - EXTRACT ARRAY ELEMENTS OR OBJECTS PROPERTIES AND STORE THEM IN VARIABLES

[a, b] = ['hello', 'max']
console.log(a)
console.log(b)

var name = {name:'max', age: 28}
console.log(name.name)
console.log(name.age) 

const numbers = [ 1, 2, 3];
[num1, num2] = numbers;
console.log(num1, num2);



## ARROW FUNCTION

const numbers = [ 1, 2, 3];
const doubleArray = numbers.map((num) => {
    return num * 2;
});

console.log(numbers);
console.log(doubleArray);
*/
