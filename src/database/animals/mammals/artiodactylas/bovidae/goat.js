import { goatAJ as a } from "./goatAJ";
import { goatKZ as b } from "./goatKZ";

// Declaring an empty array for all goats
const list = [];

// adding all goats together list
const all = list.concat(a, b);

// Counting all goats in collection
const count = all.length; // count all species of goats

// Setting variables for goats
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic goats
const goats = [
    {
        "name": "goats",
        "scientific_name": "capra aegagrus hircus",
        "type": "species",
        "other_name": [],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { goats };