/*
 * This file is exported to all_bovines.js
 */
import { sheepsAB as a } from "./sheepAB";
import { sheepsCD as b } from "./sheepCD";
import { sheepsEK as c } from "./sheepEK";
import { sheepsLR as d } from "./sheepLR";
import { sheepsSZ as e } from "./sheepSZ";
// ---------------- Applilcation starts ------------------ \\

// Declaring an empty array for all domestic sheeps
const list = [];

// adding all sheeps together list
const all = list.concat(a, b, c, d, e);

// Counting all sheeps in collection
const count = all.length; // count all species of sheeps

// Setting variables for sheeps
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic sheeps
const sheeps = [
    {
        "name": "sheeps",
        "scientific_name": "sus",
        "type": "species",
        "other_name": [],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { sheeps };