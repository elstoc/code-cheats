/* Encoding */

length("£") === 1;              // Each character is a single immutable unsigned 16 bit value
length("🎧") === 2;             // Except those characters that don't fit into 16 bits

/* Iteration */

let x = "123🎧";                // Strings are immutable sequences of unsigned 16-bit values
[...x] = ['1','2','3','🎧']     // Iteration operates on individual *characters*
                                //  though most string manipulation functionality operates on the 16-bit representations

/* String Literals */

"String" === 'String' === `String`
"You can include 'single quotes'"
'You can include "double quotes"'
'You can include \'single\' and "double" quotes'

/* Multiple Lines */

'A string\nwith two lines'

"Another string\
with two lines"

`Yet another string
with two lines`

/* Escape Sequences */

'\n'        // New line
'\r'        // Carriage return
'\"'        // Double quote
"\'"        // Single quote
'\\'        // Backslash
'\xnn'      // Unicode character represented by the two hex digits nn
'\xnnnn'    // Unicode character represented by the four hex digits nnnn

/* String Manipulation */

"Hello " + "world" === "Hello World"    // Concatenation
"alpha" < "beta"                        // Comparison uses the 16-bit unicode character values
"this".length === 4                     // Count the characters (but beware of 32-bit unicode characters)

let hw = "Hello world"

hw.substring(1,4) === hw.slice(1,4) == "ell"    // second to fourth characters
hw.slice(-3) === "rld"                          // last three characters
hw.split(" ") === ["Hello", "world"];

hw.indexOf("l", 3) === 3                        // position of the "l" string on or after position 3
hw.indexOf("Goodbye") === -1                    // string not found
hw.lastIndexOf("l") === 9                       // last occurence of "l"

hw.startsWith("He") === true
hw.endsWith("universe") === false
hw.includes("ell") === true

hw.charAt(0) === hw[0] === "H"

"x".padStart(3) === "   x"
"x".padEnd(3) === "x  "
"x".padStart(2, "-") === "--x"

" x ".trimStart() === "x "
" x ".trimEnd() === " x"
" x ".trim() === "x"

/* Template Literals */

let user = "Bill"
`Hello ${user}` === "Hello Bill"

/* Pattern Matching with RegExp */

let str = "numbers: 1, 2, 12"
let regx = /\d+/g                               // match all ocurrances of 1 or more digits
regx.test(str) === true                         // does it match?
str.search(regx) === 9                          // position of first match
str.match(regx) === ["1", "2", "12"]            // array of matches
str.replace(regx, '*') === "numbers: *, *, *"
str.split(/\D+/) === ["", "1", "2", "12"]       // split at non-digit characters
