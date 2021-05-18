/*
 * This file is exported to all_equines.js
 */
import { poniesAF as a } from "./ponyAF";
import { poniesGZ as b } from "./ponyGZ";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all domestic ponies
const list = [];

// adding all ponies together list
const all = list.concat(a, b);

// Counting all ponies in collection
const count = all.length; // count all species of ponies

// Setting variables for ponies
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic ponies
const ponies = [
    {
        "name": "ponies",
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

export { ponies };