import { foxesAZ } from "./foxAZ";

// Declaring an empty array for all domestic foxes
const listOfFoxes = [];

// adding all foxes together
const allFoxes = listOfFoxes.concat(foxesAZ);

// Counting all domestic foxes in collection
const allFoxesSpeciesCount = allFoxes.length; // count all species of foxes

// Setting variables for domestic foxes
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic foxes
const foxes = [
    {
        "name": "foxes",
        "scientific_name": "vulpes vulpes",
        "type": "species",
        "other_name": ["felis catus"],
        "count_species": allFoxesSpeciesCount,
        "list": allFoxes,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { foxes };