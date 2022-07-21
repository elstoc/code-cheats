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

/* insert or remove elements with splice(?start, ?deletecount, ?items...) 
 *  splice adds or deletes elements from the existing array
 *  and returns any deleted elements */

a.splice()                  // => []; a == [1, 2, 3, 4, 5]
a.splice(2, 0, "a", "b")    // => []; a == [1, 2, "a", "b", 3, 4, 5]
                            // start from element 2, delete zero elements, add two new elements
a.splice(2, 2, ["c", "d"])  // => ["a", "b"]; a == [1, 2, ["c", "d"], 3, 4, 5]
                            // start from element 2, delete two elements, add one array element

/* fill an array (or part of it) with the same value using fill(value, ?start, ?end)
 *  modifies the array and returns it */

let a = new Array(5)        // start with 5 empty elements
a.fill(0)                   // => [0, 0, 0, 0, 0]; a == [0, 0, 0, 0, 0]
a.fill(9, 2)                // => [0, 0, 9, 9, 9]
a.fill(8, 3, 5)             // => [0, 0, 9, 8, 8]

/*************************/
/* Searching and Sorting */
/*************************/

/* simple searching for matching values */

let a = [0, 1, 2, "3", 2, 1, 0]

a.indexOf(2)            // => 2  (only shows the index of the first match)
a.indexOf(3)            // => -1 (indexOf uses === for comparison)
a.indexOf(2, 3)         // => 4  (start from index 3)

a.lastIndexOf(1)        // => 5  (start from the end)

a.includes("3")         // => true (includes "3")
                        // when using includes(), NaN matches NaN, but still uses ===

/* matching with functions */
let a = [1, 2, 3, 4, 5]

a.every((x) => x < 6)           // => true (every value is < 6)
                                // iterates until some value returns false or end of array is reached

a.some((x) => x === 1)          // => true (some values are === 1)
                                // iterates until some value returns true or end of array is reached

a.findIndex((x) => x === 3)     // => 2  (a[2] === 3)
a.findIndex((x) => x > 5)       // => -1 (no match found)
a.find((x) => x % 2 == 0)       // => 2  (only finds the first matching value, then stops iterating)

/* change order with sort() and reverse() */

let a = [55, 333, 11111, 2222]

a.sort()                        // a == [11111, 2222, 333, 55] (sorted alphabetically by default)
a.sort((x, y) => x - y)         // a == [55, 333, 2222, 1111]
                                // return > 0 if x should appear before y
                                // return < 0 if y should appear before x

a.reverse()                     // a == [2222, 11111, 333, 55]

/************************/
/* Combine array values */
/************************/

let a = [1, 2, 3, 4, 5]

a.reduce((x,y) => x+y, 0)       // => 15  (start at zero and then add up the elements in order)
a.reduce((x,y) => x*y, 1)       // => 120 (start at 1 and then multiply the elements)

/* reduceRight(function, start) does the same but in reverse order */

/*********************/
/* Convert to string */
/*********************/

let a = [1, 2, 3, 4, 5, 6000]

a.join()                        // => "1,2,3,4,5,6000"
a.join("_")                     // => "1_2_3_4_5_6000"

a.toString()                    // => "1,2,3,4,5,6000"
a.toLocaleString()              // => "1,2,3,4,5,6,000"
