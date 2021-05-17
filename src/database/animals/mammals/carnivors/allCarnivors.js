import { felines } from "./feloidea/a_felines";
import { canines } from "./canidea/a_canines";
// ---- Applilcation starts ---- \\

// Declaring an empty array for all carnivors
const listOfCarnivors = [];

// Adding all carnivors together
const allCarnivors = listOfCarnivors.concat(felines, canines);

// Counting all carnivors in collection
const allCarnivorsSpeciesCount = (felines[0].count_species + canines[0].count_species); // count all species of carnivors
const allCarnivorsSuborderCount = (felines[0].count_suborder + canines[0].count_suborder); // count all suborder of carnivors
const allCarnivorsOrderCount    = allCarnivors.length; // count all order of carnivors

// Setting variables for carnivors
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Carnivors
const carnivors = [
    {
        "name": "carnivors",
        "type": "order",
        "latin_name": "carnivorans",
        "other_name": "carnivorans",
        "food": "flesh",
        "facts": [
            "The order Carnivora is the fifth largest order of mammals",
            "It comprises at least 279 species."
        ],
        "count_species": allCarnivorsSpeciesCount,
        "count_suborder": allCarnivorsSuborderCount,
        "count_order": allCarnivorsOrderCount,
        "list": allCarnivors,
    }
];

export { carnivors };