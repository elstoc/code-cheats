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

/********************************************/
/* Extending Objects and the Spread Operator*/
/********************************************/

let objA = { x: "Ax", y: "Ay", z: "Az" }
let objB = { y: "By" }
let objC = { z: "Cz" }
objA = Object.assign(objA, objB, objC)          // modifies and returns objA = { x: "Ax", y: "By", z: "Cz" }
                                                // by copying parameters into the first object from subsequent objects

objA = { ...objA, ...objB, ...objC }            // the same operation using the spread operator
