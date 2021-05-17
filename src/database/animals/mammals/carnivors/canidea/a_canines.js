import { domesticDogs } from "./domesticDog";
import { foxes } from "./fox";

// Declaring an empty array for all carnivors
const listOfCanine = [];

// Adding all canine together
const allCanine = listOfCanine.concat(domesticDogs, foxes);

// Counting all canine in collection
const allCanineSpeciesCount = (domesticDogs[0].count_species + foxes[0].count_species); // count all species of canine
const allCanineSuborderCount = allCanine.length; // count all suborder of canine

// Setting variables for canine
// This variables includes all facts, description, and miscellaneous 
// attributes about / for canine
const canines = [
    {
        "name": "canine",
        "scientific_name": "canidea",
        "type": "suborder",
        "facts": [
            "This suborder contains dog-like carnivors",
        ],
        "count_species": allCanineSpeciesCount,
        "count_suborder": allCanineSuborderCount,
        "list": allCanine,
    }
];

export { canines };