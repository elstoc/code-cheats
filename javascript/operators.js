/*****************************/
/* Assignment and Arithmetic */
/*****************************/

let a = 1           // assignment

a++                 // returns 1, a == 2 (post-increment)
++a                 // returns 2, a == 2 (pre-increment)
a--                 // returns 1, a == 0 (post-decrement)
--a                 // returns 0, a == 0 (pre-decrement)

a += 1              // increment and assign, equivalent to a = a + 1
                    // similarly with -=, *=, /=, %= etc.

2**3                // => 8 (exponentiate)

/*****************/
/* Boolean logic */
/*****************/

!false                      // => true (not)
false && true               // => false (and)
false || true               // => true (or)

1 == "1"                    // => true (non-strict equality - implicit type conversion)
1 != "2"                    // => true (non-strict inequality)
1 === 1                     // => true (strict equality - no type conversion)
1 !== "1"                   // => true (strict inequality)

2 > 1                       // => true (greater than)
1 < 2                       // => true (less than)
1 >= 1                      // => true (greater or equal)
1 <= 1                      // => true (less or equal)

/********************************/
/* String and Numeric Behaviour */
/********************************/

1 + 2 === 3                         // addition
"1" + "2" === "1" + 2 === "12"      // concatenation with implicit cast
11 < 2 === "11" < 2 === false       // numeric comparison with implicit cast
"11" < "2" === true                 // string comparison
"one" < 2 === false                 // "one" is implicitly cast to NaN

/************************/
/* Special values/types */
/************************/

Nan !== NaN                 // no two NaN values are ever equal
isNaN(NaN) === true         // use isNaN instead

0 === -0                    // negative zero is equal to positive zero

{x:1} !== {x:1}             // these are different objects
[1,2] !== [1,2]             // these are different arrays
