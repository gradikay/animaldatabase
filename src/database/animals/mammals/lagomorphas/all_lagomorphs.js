/*
 * This file is exported to all_mammals.js
 */
import { leporids as a } from "./leporidae/all_leporids";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all lagomorphs
const list = [];

// Adding all lagomorphs together
const all = list.concat(a);

// Storing counts species
const a1 = a[0].count_species;
//const b1 = b[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
//const bb1 = b[0].count_suborder;

// Counting all lagomorphs in collection
const countSpecies  = (a1);       // count all species of lagomorphs
const countSuborder = (aa1);      // count all suborder of lagomorphs
const count         = all.length; // count all order of lagomorphs

// Setting variables for lagomorphs
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Ungulates
const lagomorphs = [
    {
        "name": "lagomorph",
        "type": "order",
        "other_name": [],
        "scientific_name": "lagomorphas",
        "food": [],
        "facts": [],
        "count_species": countSpecies,
        "count_suborder": countSuborder,
        "count_order": count,
        "list": all,
    }
];

export { lagomorphs, a };