enum CompassDirection {
    North,
    East,
    South,
    West,
}

//console.log(CompassDirection.North)

enum Statuscodes{
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
}

const startingDirection = CompassDirection.East;
const currentStatus = Statuscodes.OK;

const okNumber = Statuscodes.OK;
const okNumberIndex = Statuscodes["OK"];
const stringBadRequest = Statuscodes[400];

enum GamePadInput{
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

let message1: string = "Hello";
let message2: string;
let message3 = "Hello";
let message4;

message4 = "test";
message4 = 5;

// console.log(typeof(message1))
// console.log(typeof(message2))
// console.log(typeof(message3))
// console.log(typeof(message4))

class Greeter{
    greeting: string;

    constructor(message: string = "Default value"){
        this.greeting = message;
    }

    greet() {
        console.log(this.greeting)
    }
}

let greet = new Greeter("test");
// greet.greet();
console.log(greet.greeting)


// Conditional type would look something like this
// A extemds B ? C : D

type Cat = {meows: true};
type Dog = {barks: true};
type Cheetah = {meows: true, fast: true};
type Wolf = {barks: true, howls: true};

type ExtractDoggish<A> = A extends {barks: true} ? A : never;

type doesBarkCat = ExtractDoggish<Cat>;
type doesBarkWolf = ExtractDoggish<Wolf>;

type Animals = Cat | Dog | Cheetah | Wolf;
type Dogish = ExtractDoggish<Animals>;

// = ExtractDoggish<Cat> | ExtractDoggish<Dog> | ExtractDoggish<Cheetah> | ExtractDoggish<Wolf>
//
// = never | Dog | never | Wolf
//
// = Dog | Wolf


interface Dimension {
    width: string;
    height: string;
}

let _imagedim: Dimension = {
    width: "200px",
    height: "300px"
}

console.log(_imagedim.height)


interface IBook{
    id: string;
    pages: number;
}

interface INewspaper {
    companyID: string;
}

type IPublication = IBook | INewspaper;

let ob: IPublication = {
    id: "123",
    pages: 123,
    companyID: "123a"
};


function sum(...numbers: number[]): number{
    let total: number = 0;

    for(var i = 0; i < numbers.length; i++){
        total += numbers[i];
    }

    return total;
}

console.log(sum(2,2,6,10,5))




