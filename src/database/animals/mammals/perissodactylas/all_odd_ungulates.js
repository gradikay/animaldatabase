/*
 * This file is exported to all_mammals.js
 */
import { equines as a } from "./equidae/all_equines";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all ungulates
const list = [];

// Adding all ungulates together
const all = list.concat(a);

// Storing counts species
const a1 = a[0].count_species;
//const b1 = b[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
//const bb1 = b[0].count_suborder;

// Counting all ungulates in collection
const countSpecies  = (a1);       // count all species of ungulates
const countSuborder = (aa1);      // count all suborder of ungulates
const count         = all.length; // count all order of ungulates

// Setting variables for ungulates
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Ungulates
const ungulates = [
    {
        "name": "odd-toad ungulates",
        "type": "order",
        "scientific_name": "perissodactylas",
        "food": "herbs",
        "facts": [],
        "count_species": countSpecies,
        "count_suborder": countSuborder,
        "count_order": count,
        "list": all,
    }
];

export { ungulates, a };