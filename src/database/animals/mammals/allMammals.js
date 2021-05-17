import { carnivors } from "./carnivors/allCarnivors";
// -------------- Application Begins Bellow ------------ \\

// Declaring an empty array for all mammals
const listOfMammals = [];

// Adding all mammals together
const allMammals = listOfMammals.concat(carnivors);

// Counting all mammals in collection
const allMammalsSpeciesCount  = carnivors[0].count_species; // count all species of mammals
const allMammalsSuborderCount = carnivors[0].count_suborder; // count all suborder of mammals
const allMammalsOrderCount    = carnivors[0].count_order; // count all order of mammals
const allMammalsClassCount    = allMammals.length; // count all order of mammals

// Setting variables for carnivors
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Carnivors
const mammals = [
    {
        "name": "mammals",
        "type": "class",
        "latin_name": "mammalia",
        "facts": [],
        "count_species": allMammalsSpeciesCount,
        "count_suborder": allMammalsSuborderCount,
        "count_order": allMammalsOrderCount,
        "count_class": allMammalsClassCount,
        "list": allMammals,
    }
];

// Export mammals variable
export { mammals };