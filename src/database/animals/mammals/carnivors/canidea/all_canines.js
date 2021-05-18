import { domesticDogs as a} from "./domesticDog";
import { foxes as b } from "./fox";

// Declaring an empty array for all carnivors
const list = [];

// Adding all canine together
const all = list.concat(a, b);

// Storing species count
const a1 = a[0].count_species;
const b1 = b[0].count_species;

// Counting all canine in collection
const countSpecies = (a1, b1); // count all species of canine
const count = all.length; // count all suborder of canine

// Setting variables for canine
// This variables includes all facts, description, and miscellaneous 
// attributes about / for canine
const canines = [
    {
        "name": "canine",
        "scientific_name": "canidea",
        "type": "suborder",
        "facts": [
            "This suborder contains dog-like carnivors",
        ],
        "count_species": countSpecies,
        "count_suborder": count,
        "list": all,
    }
];

export { canines };