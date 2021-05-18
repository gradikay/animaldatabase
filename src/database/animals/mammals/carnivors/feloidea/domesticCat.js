import { catsAB as a } from "./domesticCatAB";
import { catsCK as b } from "./domesticCatCK";
import { catsLR as c } from "./domesticCatLR";
import { catsSZ as d } from "./domesticCatSZ";

// Declaring an empty array for all domestic cats
const list = [];

// adding all cats together list
const all = list.concat(a, b, c, d);

// Counting all domestic cats in collection
const count = all.length; // count all species of cats

// Setting variables for domestic cats
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic cats
const domesticCats = [
    {
        "name": "domestic cats",
        "scientific_name": "Felis catus",
        "type": "species",
        "other_name": ["felis catus"],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { domesticCats };