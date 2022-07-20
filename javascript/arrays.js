/************/
/* Creation */
/************/

let emptyArray = []                             // empty array
let emptyArray2 = new Array()                   // same
let emptyArray3 = Array.of()                    // same
emptyArray.length === 0                         // length 0

let longEmptyArray = new Array(2)               // empty array with length 2
let longEmptyArray2 =[,,]                       // same (with trailing comma)
longEmptyArray.length === 2                     // length 2

let singleElementArray = Array.of(2)            // same as [2]
singleElementArray.length === 1                 // length 1

let denseArray = new Array(2, 4, 6, 8)          // four element array
let denseArray2 = Array.of(2, 4, 6, 8)          // same
let denseArray3 = [2, 4, 6, 8]                  // same
let denseArray4 = [2, 4, 6, 8,]                 // same (optional trailing comma)
denseArray.length === 4

let sparseArray = [2,,6]                        // sparse array, missing element 1
sparseArray.length === 3                        // with length 3

let anArray = []
anArray[999] = "test"                           // sparse array with one element
anArray.length === 1000                         // and length 1000

let mixedArray = ["one", 2, ["three", "four"]]  // array elements can have any data type

/****************************/
/* Accessing Array Elements */
/****************************/

let myArray = [1, 2, 3]     // create an array
myArray[1] === 2            // read element 1
myArray[1] = "one"          // write element 1
myArray === ["one", 2, 3]

/********************************************/
/* Extending Arrays and the Spread Operator */
/********************************************/
        
let sourceArray = [1,2,3,4]
let newArray = Array.from(sourceArray)                          // duplicate the array
let newArray2 = [...sourceArray]                                // same with the spread (...) operator

let arrayLike = { 0: "zero", 1: "one", 2: "two", length: 3 }
let trueArray = Array.from(arrayLike)                           // works with any array-like object
let trueArray2 = [...arrayLike]                                 // same with the spread operator

let myString = "ABC"                                            // strings are array-like
let stringArray = [...myString]
stringArray === ["A", "B", "C"]

let a = [1, 2, 3]
let b = [0, ...a, 4]
b === [0, 1, 2, 3, 4]

/********************************/
/* Adding and Removing Elements */
/********************************/

// index notation
let a = ["zero"]
a[1] = "one"                // add a new element with index notation
a === ["zero", "one"]

delete a[1]                 // delete the added element (it's still there, but empty)
a.length === 2              // deletion does not change length
a === ["zero",]             // array is sparse now

// truncating arrays by setting length
let a = [1, 2, 3, 4, 5]
a.length = 3
a === [1, 2, 3]
a.length = 0
a === []

/************************/
/* Stacks with push/pop */
/************************/

a = ["zero"]
a.push("one", "two")        // push two elements onto the end of the array
a === ["zero", "one", "two"]

let t = a.pop()             // pop an element off the end of the array into variable t
t === "two"
a.length === 2              // pop does change length
a === ["zero", "one"]       // array is not sparse

/*****************************/
/* Queues with unshift/shift */
/*****************************/

let a = ["two", "three"]
a.unshift("zero", "one")                // add two elements to the start of the array
a === ["zero", "one", "two", "three"]

let z = a.shift()                       // remove one element from the start of the array into variable z
a === ["one", "two", "three"]
z === "zero"
a.length === 3
