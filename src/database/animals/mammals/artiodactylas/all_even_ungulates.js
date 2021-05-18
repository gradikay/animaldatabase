/*
 * This file is exported to all_mammals.js
 */
import { bovines as a } from "./bovidae/all_bovines";
import { swines as b } from "./suina/all_swines";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all ungulates
const list = [];

// Adding all ungulates together
const all = list.concat(a, b);

// Storing counts species
const a1 = a[0].count_species;
const b1 = b[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
const bb1 = b[0].count_suborder;

// Counting all ungulates in collection
const countSpecies  = (a1 + b1);       // count all species of ungulates
const countSuborder = (aa1 + bb1);      // count all suborder of ungulates
const count         = all.length; // count all order of ungulates

// Setting variables for ungulates
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Ungulates
const ungulates = [
    {
        "name": "even-toad ungulates",
        "type": "order",
        "scientific_name": "artiodactylas",
        "food": "herbs",
        "facts": [],
        "count_species": countSpecies,
        "count_suborder": countSuborder,
        "count_order": count,
        "list": all,
    }
];

export { ungulates, a , b };