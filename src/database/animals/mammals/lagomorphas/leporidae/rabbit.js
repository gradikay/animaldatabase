/*
 * This file is exported to all_equines.js
 */
import { rabbitsAZ as a } from "./rabbitAZ";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all domestic rabbits
const list = [];

// adding all rabbits together list
const all = list.concat(a);

// Counting all rabbits in collection
const count = all.length; // count all species of rabbits

// Setting variables for rabbits
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic rabbits
const rabbits = [
    {
        "name": "rabbits",
        "scientific_name": "equus africanus asinus",
        "type": "species",
        "other_name": [],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { rabbits };