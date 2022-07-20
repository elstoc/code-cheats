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

// with arrays
//   (similarly with strings and ES6 Sets)
let data = [1, 2, 3, 4, 5], sum = 0;
for(let element of data) {
    sum += element;
}
sum === 15

// with objects (loop through properties/keys)
let o = { x: 1, y: 2, z: 3 }, keys = "";
for(let k of Object.keys(o)) {
    keys += k;
}
keys === "xyz"

// with objects (loop through values)
let o = { x: 1, y: 2, z: 3 }, sum = 0;
for(let v of Object.values(o)) {
    sum += v;
}
sum === 6

// with objects (loop through key/value pairs)
let o = { x: 1, y: 2, z: 3 }, pairs = "";
for(let [k, v] of Object.entries(o)) {
    pairs += k + v;
}
pairs === "x1y2z3"

// with ES6 Maps
let m = new Map([[1, "one"]]);
for(let [key, value] of m) {
    key === 1
    value === "one"
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
    if(something_happened)
        break;
}

// use continue to terminate a single iteration early
for(let count = 0; count < 10; count++) {
    // do something
    if(something_happened)
        continue;
    // do something else
}
