/************/
/* Integers */
/************/

0           // => 0
3           // => 3
100000      // => 100000

0xff        // => 255 (hex)
0b10101     // => 21 (binary)
0o377       // => 255 (octal)

/******************/
/* Floating Point */
/******************/

3.14
.3333333
6.02e23
1.4738223E-32

/**************/
/* Separators */
/**************/

let billion = 1_000_000_000;    // underscore as thousands separator
let bytes = 0x89_AB_CD_EF;      // as bytes separator
let bits = 0b0001_1101_0111;    // as nibble separator
let fraction = 0.123_456_789;   // also works in decimal portion

/*************/
/* Arithetic */
/*************/
Math.pow(2,4)                   // => 16 (2 to the power 4 -- use fractions for roots)
Math.round(.6)                  // => 1.0 (round to the nearest integer)
Math.ceil(.6)                   // => 1.0 (round up to an integer)
Math.floor(.6)                  // => 0.0 (round down to an integer)
Math.trunc(.6)                  // => 0 (truncate to an integer -- ES6)
Math.abs(-5)                    // => 5.0
Math.max(x,y,z)                 // return largest argument
Math.min(x,y,z)                 // return smallest argument
Math.random()                   // pseudo-random number 0 <= x < 1.0
Math.PI
Math.E
Math.sqrt(9)                    // => 3
Math.sin(0)
Math.log(10)                    // natural logarithm of 10
Math.log10(100)                 // base 10 logarithm of 100 (ES6)

/******************/
/* Special Values */
/******************/

// Infinity
Infinity === Number.POSITIVE_INFINITY === 1/0 === Number.MAX_VALUE * 2     // overflow
-Infinity === Number.NEGATIVE_INFINITY === -1/0 === -Number.MAX_VALUE * 2
Infinity !== -Infinity
Number.isFinite(Infinity) === Number.isFinite(-Infinity) === false

// The following all return NaN
NaN
Number.NaN
0/0
Infinity/Infinity

// You cannot test for equality of NaN
NaN !== NaN
Number.isNaN(NaN) === true

// Zero can be negative
Number.MIN_VALUE/2 === 0
-Number.MIN_VALUE/2 === -1/Infinity === -0
0 === -0                         

/*************************/
/* ES6 Number Properties */
/*************************/
Number.parseInt() === parseInt()      // return the first integer found in a string
Number.parseFloat() === parseFloat()  // return the first float found in a string
Number.isInteger(x)                   // Is x an integer?
Number.isSafeInteger(x)               // Is x an integer -(2**53) < x < 2**53?
Number.MIN_SAFE_INTEGER               // => -(2**53 - 1)
Number.MAX_SAFE_INTEGER               // => 2**53 - 1
Number.EPSILON                        // => 2**-52: smallest difference between numbers
