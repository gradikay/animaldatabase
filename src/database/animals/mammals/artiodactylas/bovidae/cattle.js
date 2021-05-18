/*
 * This file is exported to all_bovines.js
 */
import { cattlesA as a } from "./cattleA";
import { cattlesB as b } from "./cattleB";
import { cattlesCD as c } from "./cattleCD";
import { cattlesEH as d } from "./cattleEH";
import { cattlesIZ as e } from "./cattleIZ";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all domestic cattles
const list = [];

// adding all cattles together list
const all = list.concat(a, b, c, d, e);

// Counting all cattles in collection
const count = all.length; // count all species of cattles

// Setting variables for cattles
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic cattles
const cattles = [
  {
    "name": "cattles",
    "scientific_name": "bos taurus",
    "type": "species",
    "other_name": [],
    "count_species": count,
    "list": all,
    "has_breeds": true,
    "is_extinct": false,
    "is_endagered": false,
  }
];

export { cattles };