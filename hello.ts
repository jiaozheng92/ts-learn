const hello = (name:string) => {
    return `hello${name}`
}
hello('hello')

let isDone:boolean = false
let numberOrString:number|string = 123

interface Person {
    readonly id:number;
    name:string;
    age?:number;
}
let cay:Person = {
    id:124,
    name:'cay'
}

function add(x:number,y:number,z:number = 10):number {
    return x+y+z
}
class Animal {
    name:string;
    static cata:string[] = ['cat','dog']
    static isAnimal(item:any){
        return item instanceof Animal
    }
    constructor(name:string) {
        this.name = name
    }
    run(){
        return `${this.name} is running`
    }
}

let lily = new Animal('lily')
console.log(Animal.isAnimal(lily));
// console.log(lily.run());
