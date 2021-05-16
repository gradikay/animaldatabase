import { domesticCats } from "./domesticCat";

// Declaring an empty array for all carnivors
const listOfFelines = [];

// Adding all felines together
const allFelines = listOfFelines.concat(domesticCats);

// Setting variables for felines
// This variables includes all facts, description, and miscellaneous 
// attributes about / for felines
const felines = [
    {
        "suborder": "feliformia",
        "other_name": "felines",
        "facts": [
            "This suborder contains cat-like carnivors",
        ],
        "list": allFelines,
    }
];

export { felines };