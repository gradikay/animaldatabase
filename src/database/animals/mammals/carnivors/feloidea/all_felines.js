import { domesticCats as a } from "./domesticCat";

// Declaring an empty array for all carnivors
const list = [];

// Adding all felines together
const all = list.concat(a);

// Storing species count
const a1 = a[0].count_species;

// Counting all felines in collection
const countSpecies  = a1; // count all species of felines
const count = all.length; // count all suborder of felines

// Setting variables for felines
// This variables includes all facts, description, and miscellaneous 
// attributes about / for felines
const felines = [
    {
        "name": "felines",
        "scientific_name": "feloidea",
        "other_name": ["feliformia"],
        "type": "suborder",
        "facts": [
            "This suborder contains cat-like carnivors",
        ],
        "count_species": countSpecies,
        "count_suborder": count,
        "list": all,
    }
];

export { felines };