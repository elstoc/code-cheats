/************/
/* Creation */
/************/

let emptyObject = {};
let anotherEmptyObject = new Object();      // same as {}
let arrayObject = new Array();              // same as []
let dateObject = new Date();

let film = {
    title: "Close Encounters of the Third Kind",
    bbfc_rating: "PG",
    "lead actor": {
        firstname: "Richard",
        lastname: "Dreyfuss",
    },
};

/************************/
/* Accessing Properties */
/************************/

let object = { x: 1, y: 2 };
object.x === 1                  // read using dot notation
object["x"] === 2               // read using associative-array notation

object.z = 3                    // write using dot notation
object["z"] = 3                 // write using associative-array notation

/************************/
/* Object decomposition */
/************************/

// extract object properties into variables
let object = { x: 1, y: 2, z: 3 };
let { x, y } = object;

// enclose in brackets for pre-declared variables
let x, y;
( { x, y } = object );

