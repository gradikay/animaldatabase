/*
 * This file is exported to all_lagomorphs.js
 */
import { rabbits as a } from "./rabbit";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all carnivors
const list = [];

// Adding all leporid together
const all = list.concat(a);

// Storing species count
const a1 = a[0].count_species;

// Counting all leporid in collection
const countSpecies = (a1); // count all species of leporid
const count = all.length; // count all suborder of leporid

// Setting variables for leporid
// This variables includes all facts, description, and miscellaneous 
// attributes about / for leporid
const leporids = [
    {
        "name": "leporid",
        "scientific_name": "leporidae",
        "type": "suborder",
        "facts": [
            "This suborder contains rabbit-like animals",
        ],
        "count_species": countSpecies,
        "count_suborder": count,
        "list": all,
    }
];

export { leporids };