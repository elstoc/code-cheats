/************/
/* Creation */
/************/

let emptyObject = {} 
let anotherEmptyObject = new Object()       // same as {}
let arrayObject = new Array()               // same as []
let dateObject = new Date() 

let film = {
    title: "Close Encounters of the Third Kind",
    bbfc_rating: "PG",
    "lead actor": {
        firstname: "Richard",
        lastname: "Dreyfuss",
    },
} 

/******************************/
/* Prototypes and Inheritance */
/******************************/

let objA = {}                           // inherits from Object.prototype
objA.x = 1                              // objA now has a property x
let objB = Object.create(objA)          // objB inherits from objA and Object.prototype
objB.x === 1                            // x property is inherited from objA
objB.toString() = '[object Object]'     // toString() is inherited from Object.prototype

/************************/
/* Accessing Properties */
/************************/

let object = { x: 1, y: 2 } 
object.x === 1                  // read using dot notation
object["y"] === 2               // read using array notation

object.z = 3                    // write using dot notation
object["z"] = 3                 // write using array notation

delete object.x                 // delete using dot notation
delete object["x"]              // delete using array notation

/******************************/
/* Assignment Shorthand (ES6) */
/******************************/

let x = 1, y = 2
let point = { x, y }            // this is equivalent to point = { x:x, y:y }

/************************/
/* Object Decomposition */
/************************/

// extract object properties into variables
let object = { x: 1, y: 2, z: 3 } 
let { x, y } = object 

// enclose in brackets for pre-declared variables
let x, y 
( { x, y } = object ) 

/*************************************/
/* Accessing Non-Existent Properties */
/*************************************/

let obj = {} 
obj.something === undefined                         // non-existent properties are undefined
let l = obj.something.length                        // this returns an error

let l = obj && something && obj.something.length    // this works but is somewhat verbose
                                                    // will return undefined

let l = obj?.something?.length                      // ES2020 conditional property access 
                                                    // equivalent to the previous example

/****************************************/
/* Checking for Existence of Properties */
/****************************************/

let obj = { x: undefined }
obj.x === undefined                         // x has been explicitly set to undefined
obj.y === undefined                         // y does not exist
"x" in object === true                      // x exists
"y" in object === false                     // y does not exist

obj.hasOwnProperty("x") === true            // x exists
obj.hasOwnProperty("y") === false           // y doesn't exist
obj.hasOwnProperty("toString") === false    // toString is inherited

/******************************/
/* Looping through Properties */
/******************************/

// with a for/in loop
for(let prop in obj) {
    if(!obj.hasOwnProperty(prop)) continue;         //skip inherited properties
    if(typeof obj[prop] === "function") continue;   //skip methods
    // do something
}

/* Alternatively, a for/of loop can loop through an array of property names.
   You could use one of the following functions:
    - Object.keys() returns an array of enumerable own properties with non-symbol keys
    - Object.getOwnPropertyNames() also includes non-enumerable properties with string keys
    - Object.getOwnPropertySymbols() returns an array of own properties with symbol keys
    - Reflect.ownKeys() returns all properties, enumerable or not, symbol or not
*/

/*********************************************/
/* Extending Objects and the Spread Operator */
/*********************************************/

let objA = { x: "Ax", y: "Ay", z: "Az" }
let objB = { y: "By" }
let objC = { z: "Cz" }

Object.assign(objA, objB, objC, { zz: "zz" } )              // modifies objA = { x: "Ax", y: "By", z: "Cz", zz: "zz" }
                                                            // by copying parameters into the first object from subsequent objects

newObj = Object.assign({}, objA, objB, objC, { zz: "zz" })  // same thing but returns a new object

newObj = { ...objA, ...objB, ...objC, zz: "zz" }            // a new object again, but using the spread (...) operator
                                                            // also note the final parameter is not an object here

/********************/
/* Objects and JSON */
/********************/

let o = { x: 1, y: { z: [NaN, true, ""] } }

let s = JSON.stringify(o)                               // Convert object to JSON
s === '{"x":1,"y":{"z":[null,true,""]}}'                // note that JSON cannot represent NaN or Infinity
JSON.parse(s) === { x: 1, y: { z: [null, true, ""] } }  // Parse JSON to object

/**************************/
/* Default Object Methods */
/**************************/

let coordinate = { x: 3000, y: 4000 }

// objects have some default behaviour that may or may not be useful

coordinate.toString() === "[object Object]"                 // default toString method isn't very useful
Number(coordinate) === NaN                                  // coordinate cannot be cast as a number
JSON.stringify([coordinate]) === '[{"x":3000,"y":4000}]'    // perhaps we might prefer a different JSON representation

// default behaviour can be overridden with user-defined methods

let coordinate = {
    x: 3000,
    y: 4000,
    toString() { return `(${this.x}, ${this.y})` },                         // you can define your own toString method
    toLocaleString() {
        return `(${this.x.toLocaleString()}, ${this.y.toLocaleString()})`   // toLocaleString formats dates/numbers in a locale-specific way
    },                                                           
    valueOf() { return Math.hypot(this.x, this.y) },                        // valueOf is used to cast to primitive data types
    toJSON() { return this.toString() },                                    // toJSON method is used by JSON.stringify
}                                                                           // Note: you cannot use arrow functions (they can't see "this")

coordinate.toString() === '(3000, 4000)'
coordinate.toLocaleString() === '(3,000, 4,000)'
Number(coordinate) === 5000
JSON.stringify([coordinate]) === '["(3000, 4000)"]'

/***********************/
/* Getters and Setters */
/***********************/

let uniqueInteger = {
    _i: 0,                                  // underscore suggests internal variable (no enforcement)
    get next() { return this._i++ }         // function to return next value
    set next(i) {                           // function to increase the value (disallow decrease)
        if (i > this._i) this._i = i;
        else throw new Error("this integer has already been used");
    }
};

// getters and setters are invoked as if they are normal properties

uniqueInteger.next = 10         // set the value
uniqueInteger.next              // return next value === 11
uniqueInteger.next              // return next value === 12
