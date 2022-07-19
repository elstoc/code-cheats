/* Implicit Conversions */

/*************************************************
 Value        String          Number     Boolean
**************************************************
 undefined    "undefined"     NaN        false
 null         "null"          0          false
 true         "true"          1
 false        "false"         0
 ""                           0          false
 "1.2"                        1.2        true
 "one"                        NaN        true
 0            "0"                        false
 -0           "0"                        false
 1            "1"                        true
 Infinity     "Infinity"                 true
 -Infinity    "-Infinity"                true
 NaN          "NaN"                      false
 {}                                      true
 []           ""              0          true
 [9]          "9"             9          true
 ['a']                        NaN        true
**************************************************/

/* Explicit Conversions */

Number(3) === 3
Boolean([]) === true
String(false) === false.toString() === "false"

123456.789.toFixed(2) === "123456.79"
123456.789.toExponential(3) === "1.235e+5"
123456.789.toPrecision(7) === "123456.8"

let piText = "pi is about 3.14"
parseInt(piText) === 3
parseFloat(piText) === 3.14
parseInt(.2) === NaN                // ints can't start with "."
parseFloat("$23.45") === NaN        // floats can't start with "$"
