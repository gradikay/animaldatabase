/*
 * This file is exported to all_mammals.js
 */
import { felines as a } from "./feloidea/all_felines";
import { canines as b } from "./canidea/all_canines";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all carnivors
const list = [];

// Adding all carnivors together
const all = list.concat(a, b);

// Storing counts species
const a1  = a[0].count_species;
const b1  = b[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
const bb1 = b[0].count_suborder;

// Counting all carnivors in collection
const countSpecies  = (a1 + b1);   // count all species of carnivors
const countSuborder = (aa1 + bb1); // count all suborder of carnivors
const count         = all.length;  // count all order of carnivors

// Setting variables for carnivors
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Carnivors
const carnivors = [
    {
        "name": "carnivors",
        "type": "order",
        "scientific_name": "carnivorans",
        "other_name": "carnivorans",
        "food": "flesh",
        "facts": [
            "The order Carnivora is the fifth largest order of mammals",
            "It comprises at least 279 species."
        ],
        "count_species": countSpecies,
        "count_suborder": countSuborder,
        "count_order": count,
        "list": all,
    }
];

export { carnivors, a, b };