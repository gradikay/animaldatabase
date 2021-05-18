/*
 * This file is exported to all_ungulates.js
 */
import { cattles as a } from "./cattle";
import { goats as b } from "./goat";
import { sheeps as c } from "./sheep";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all carnivors
const list = [];

// Adding all bovine together
const all = list.concat(a, b, c);

// Storing species count
const a1 = a[0].count_species;
const b1 = b[0].count_species;
const c1 = c[0].count_species;

// Counting all bovine in collection
const countSpecies = (a1 + b1 + c1); // count all species of bovine
const count = all.length; // count all suborder of bovine

// Setting variables for bovine
// This variables includes all facts, description, and miscellaneous 
// attributes about / for bovine
const bovines = [
    {
        "name": "bovine",
        "scientific_name": "bovidae",
        "type": "suborder",
        "facts": [
            "This suborder contains cattle-like herbivors",
        ],
        "count_species": countSpecies,
        "count_suborder": count,
        "list": all,
    }
];

export { bovines };