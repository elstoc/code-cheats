/************/
/* Creation */
/************/

[]                              // empty array with length 0
new Array()                     // same
Array.of()                      // same

new Array(2)                    // empty array with length 2
[,,]                            // same (with trailing comma)

Array.of(2)                     // single element array, [2]

new Array(2, 4, 6, 8)           // dense four element array
Array.of(2, 4, 6, 8)            // same
[2, 4, 6, 8]                    // same
[2, 4, 6, 8,]                   // same (optional trailing comma)

[2,,6]                          // sparse 3-element array, missing element 1

let anArray = []
anArray[999] = "test"           // sparse 1000-element array with a single element

anArray.length                  // => 1000

["one", 2, ["three", "four"]]   // array elements can have any data type

/****************************/
/* Accessing Array Elements */
/****************************/

let myArray = [1, 2, 3]         // create an array

myArray[1] === 2                // read element 1
myArray[1] = "one"              // write element 1; myArray = ["one", 2, 3]

/********************************************/
/* Extending Arrays and the Spread Operator */
/********************************************/
        
let arrayLike = { 0: "zero",
                  1: "one",
                  2: "two",
                  length: 3 }

Array.from(arrayLike)           // return a new duplicated array
                                // works with any array or array-like object (like strings)
[...arrayLike]                  // same with the spread operator

let a = [1, 2, 3]
let b = [4, 5, 6]

a.concat(b)                     // => [1, 2, 3, 4, 5, 6] (a new array)
[...a, ...b]                    // same with the spread operator

/********************************/
/* Adding and Removing Elements */
/********************************/

// index notation
let a = ["zero"]

a[1]  = "one"                   // a === ["zero", "one"]
delete a[1]                     // delete the added element (it's still there, but empty)
                                // a is now a sparse array with one element and length 2

let a = [1, 2, 3, 4, 5]

a.length = 3                    // truncate array: a === [1, 2, 3]
a.length = 0                    // truncate again: a === []

/****************************/
/* Multi-Dimensional Arrays */
/****************************/

let matrix = [[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]]

matrix[0][2] === 3
matrix[2][0] === 7

/************************/
/* Stacks with push/pop */
/************************/

let a = ["zero"]

a.push("one", "two")            // a == ["zero", "one", "two"]
let t = a.pop()                 // t == "two"; a == ["zero", "one"]
                                // a remains a dense array

/*****************************/
/* Queues with unshift/shift */
/*****************************/

let a = ["two", "three"]

a.unshift("zero", "one")        // a === ["zero", "one", "two", "three"]
let z = a.shift()               // z === "zero"; a === ["one", "two", "three"]
                                // a.length === 3

/********************/
/* Iterating Arrays */
/********************/

let letters = ["A", "B", "C", "A"]

let concat = ""
for(letter of letters) { concat += letter; }                        // iterate array elements (including empty elements)
                                                                    // concat === "ABCA"

for(i in letters) { concat += letters[i]}                           // iterate array indices (including empty elements)
                                                                    // concat === "ABCA"

letters.forEach((letter, index, array) => concat += letter )        // iterate elements[/indices]
                                                                    // excludes empty elements but cannot be termintated with break
                                                                    // concat === "ABCA"

/***********************/
/* Array Decomposition */
/***********************/

let [x, y, z] = [1, 2, 3]               // x == 1; y == 2; z == 3

/***********************/
/* Manipulating Arrays */
/***********************/

letters.map((letter) => letter.toLowerCase())                       // => ["a", "b", "c", "a"] (a new array)

letters.filter((letter) => letter === "A")                          // => ["A", "A"] (a new array)

/*************/
/* SubArrays */
/*************/

/* return contiguous parts of an array with slice(?start, ?end) */

let a = [1, 2, 3, 4, 5]

a.slice()           // => [1, 2, 3, 4, 5]   (no arguments just copies the whole array)
a.slice(0, 3)       // => [1, 2, 3]         (from element zero, up to but not including element 3)
a.slice(2)          // => [2, 3, 4, 5]      (no second arguemnt, read to the end of the array)
a.slice(-2)         // => [4, 5]            (negative numbers measure relative to the end of the array)
a.slice(0, -2)      // => [1, 2, 3]

/* insert or remove elements with splice(?start, ?deletecount, ?items...) */

a.splice()          // => []; a == [1, 2, 3, 4, 5]
a.splice()

splice
fill
copyWithin

/*********************/
/* Flattening Arrays */
/*********************/

flat
flatMap

/*************************/
/* Searching and Sorting */
/*************************/

find
findIndex

indexOf
lastIndexOf

sort
reverse

join
toString
toLocaleString

/******************************/
/* Reducing to a Single Value */
/******************************/

every
some
includes

reduce
reduceRight

