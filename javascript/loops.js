/***************/
/* while loops */
/***************/

while(expression) {
    // do something
}

do {
    // something
} while(expression)


/************/
/* for loop */
/************/

for(initialise ; test ; increment) {
    // do something
}

for(let count = 0; count < 10; count++) {
    // do something
}

/*********************/
/* for/of loop (ES6) */
/*********************/

/* with arrays, strings and ES6 sets */
let data = [1, 2, 3, 4, 5], sum = 0;

for(let element of data) {
    sum += element;
}

sum === 15

/* you can also use functions to generate arrays from objects 
 * and loop through those arrays
 * but see the for/in loop below */
let myObj = { x: 1, y: 2, z: 3 };

Object.keys(myObj)          // => ["x", "y", "z"]
Object.values(myObj)        // => [1, 2, 3]
Object.entries(myObj)       // => [["x", 1], ["y", 2], ["z", 3]]

/* and also with ES6 maps */
for(let [key, value] of myMap) {
    // do something
}

/***************/
/* for/in loop */
/***************/

// loop through object properties/keys
let o = { x: 1, y: 2, z: 3 }, keys="";

for(let k in o) {
    keys += k;
}

keys === "xyz"

// loop through array indices (less useful)
let data = [1, 2, 3, 4, 5], sum = 0;

for(let key in data) {
    sum += data[key];
}

sum === 15

/**********************/
/* Exiting from loops */
/**********************/

// use break to exit the loop immediately
for(let count = 0; count < 10; count++) {
    // do something
    if(something_happened) break;
}

// use continue to terminate a single iteration early
for(let count = 0; count < 10; count++) {
    // do something
    if(something_happened) continue;
    // do something else
}
