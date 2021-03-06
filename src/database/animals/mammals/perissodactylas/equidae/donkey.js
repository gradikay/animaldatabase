/*
 * This file is exported to all_equines.js
 */
import { donkeysAZ as a } from "./donkeyAZ";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all domestic donkeys
const list = [];

// adding all donkeys together list
const all = list.concat(a);

// Counting all donkeys in collection
const count = all.length; // count all species of donkeys

// Setting variables for donkeys
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic donkeys
const donkeys = [
    {
        "name": "donkeys",
        "scientific_name": "equus africanus asinus",
        "type": "species",
        "other_name": [],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { donkeys };