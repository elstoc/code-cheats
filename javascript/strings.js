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