import { domesticCats } from "./domesticCat";

// Declaring an empty array for all carnivors
const listOfFelines = [];

// Adding all felines together
const allFelines = listOfFelines.concat(domesticCats);

// Counting all felines in collection
const allFelinesSpeciesCount  = domesticCats[0].count_species; // count all species of felines
const allFelinesSuborderCount = allFelines.length; // count all suborder of felines

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
        "count_species": allFelinesSpeciesCount,
        "count_suborder": allFelinesSuborderCount,
        "list": allFelines,
    }
];

export { felines };