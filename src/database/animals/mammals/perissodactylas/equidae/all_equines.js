/*
 * This file is exported to all_odd_ungulates.js
 */
import { donkeys as a } from "./donkey";
import { ponies as b } from "./pony";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all carnivors
const list = [];

// Adding all equine together
const all = list.concat(a, b);

// Storing species count
const a1 = a[0].count_species;
const b1 = b[0].count_species;

// Counting all equine in collection
const countSpecies = (a1 + b1); // count all species of equine
const count = all.length; // count all suborder of equine

// Setting variables for equine
// This variables includes all facts, description, and miscellaneous 
// attributes about / for equine
const equines = [
    {
        "name": "equine",
        "scientific_name": "equidae",
        "type": "suborder",
        "facts": [
            "This suborder contains horse-like animals",
        ],
        "count_species": countSpecies,
        "count_suborder": count,
        "list": all,
    }
];

export { equines };