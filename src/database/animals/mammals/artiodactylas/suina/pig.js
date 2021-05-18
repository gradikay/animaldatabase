/*
 * This file is exported to all_swines.js
 */
import { pigsAL as a } from "./pigAL";
import { pigsMZ as b } from "./pigMZ";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all domestic pigs
const list = [];

// adding all pigs together list
const all = list.concat(a, b);

// Counting all pigs in collection
const count = all.length; // count all species of pigs

// Setting variables for pigs
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic pigs
const pigs = [
    {
        "name": "pigs",
        "scientific_name": "sus",
        "type": "species",
        "other_name": [],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { pigs };