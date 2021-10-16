const username: string = 'Hola Angular';
const var2: string | number = 1;

const suma = (a: number, b: number) => {
  return a + b;
};

suma(2, 3);

// class Person {
//   age: number;
//   lastName: string;

//   constructor(age: number, lastName: string) {
//     this.age = age;
//     this.lastName = lastName;
//   }
// }


//Aquí me ahorro la declaración y la asignación
class Person{
    constructor(public age: number, public lastName: string){
        
    }
}

const julian = new Person(33, 'Henao');
julian.age;
