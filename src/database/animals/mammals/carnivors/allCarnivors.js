import { felines } from "./feloidea/a_felines";
// ---- Applilcation starts ---- \\

// Declaring an empty array for all carnivors
const listOfCarnivors = [];

// Adding all carnivors together
const allCarnivors = listOfCarnivors.concat(felines);

// Setting variables for carnivors
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Carnivors
const carnivors = [
    {
        "order": "carnivors",
        "other_name": "carnivorans",
        "type": "placental mmammals",
        "food": "flesh",
        "facts": [
            "The order Carnivora is the fifth largest order of mammals",
            "It comprises at least 279 species."
        ],
        "list": allCarnivors,
    }
];

export { carnivors };