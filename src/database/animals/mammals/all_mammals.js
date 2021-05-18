/*
 * This file is exported to all_animals.js
 */
/*
 * This file is exported to all_animals.js
 */
import { carnivors as a } from "./carnivors/all_carnivors";
import { ungulates as b } from "./artiodactylas/all_even_ungulates";
import { ungulates as c } from "./perissodactylas/all_odd_ungulates";
import { lagomorphs as d } from "./lagomorphas/all_lagomorphs";
// -------------- Application Begins Bellow ------------ \\

// Declaring an empty array for all mammals
const list = [];

// Adding all mammals together
const all = list.concat(a, b, c, d);

// Storing counts species
const a1 = a[0].count_species;
const b1 = b[0].count_species;
const c1 = c[0].count_species;
const d1 = d[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
const bb1 = b[0].count_suborder;
const cc1 = c[0].count_suborder;
const dd1 = d[0].count_suborder;
// Storing counts order
const aaa1 = a[0].count_order;
const bbb1 = b[0].count_order;
const ccc1 = c[0].count_order;
const ddd1 = d[0].count_order;

// Counting all mammals in collection
const countSpecies  = (a1 + b1 + c1 + d1);     // count all species of mammals
const countSuborder = (aa1 + bb1 + cc1 + dd1);   // count all suborder of mammals
const countOrder    = (aaa1 + bbb1 + ccc1 + ddd1); // count all order of mammals
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