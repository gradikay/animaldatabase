/*
 * This file is exported to all_ungulates.js
 */
import { pigs as a } from "./pig";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all carnivors
const list = [];

// Adding all bovine together
const all = list.concat(a);

// Storing species count
const a1 = a[0].count_species;
//const b1 = b[0].count_species;

// Counting all bovine in collection
const countSpecies = (a1); // count all species of bovine
const count = all.length; // count all suborder of bovine

// Setting variables for bovine
// This variables includes all facts, description, and miscellaneous 
// attributes about / for bovine
const swines = [
    {
        "name": "swines",
        "scientific_name": "suidae",
        "type": "suborder",
        "facts": [
            "This suborder contains pig-like animals",
        ],
        "count_species": countSpecies,
        "count_suborder": count,
        "list": all,
    }
];

export { swines };