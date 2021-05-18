/*
 * This file is exported to all_animals.js
 */
import { carnivors as a } from "./carnivors/all_carnivors";
import { ungulates as b } from "./artiodactylas/all_ungulates";
// -------------- Application Begins Bellow ------------ \\

// Declaring an empty array for all mammals
const list = [];

// Adding all mammals together
const all = list.concat(a, b);

// Storing counts species
const a1 = a[0].count_species;
const b1 = b[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
const bb1 = b[0].count_suborder;
// Storing counts order
const aaa1 = a[0].count_order;
const bbb1 = b[0].count_order;

// Counting all mammals in collection
const countSpecies  = (a1 + b1);     // count all species of mammals
const countSuborder = (aa1 + bb1);   // count all suborder of mammals
const countOrder    = (aaa1 + bbb1); // count all order of mammals
const count         = all.length;    // count all class of mammals

// Setting variables for carnivors
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Carnivors
const mammals = [
    {
        "name": "mammals",
        "type": "class",
        "latin_name": "mammalia",
        "facts": [],
        "count_species": countSpecies,
        "count_suborder": countSuborder,
        "count_order": countOrder,
        "count_class": count,
        "list": all,
    }
];

export { mammals };