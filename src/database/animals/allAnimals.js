import { mammals } from "./mammals/allMammals";
// -------------- Application Begins Bellow ------------ \\

// Declaring an empty array for all animals
const listOfAnimals = [];

// Adding all animals together
const allAnimals = listOfAnimals.concat(mammals);

// Counting all animals in collection
const allAnimalsSpeciesCount  = mammals[0].count_species; // count all species of mammals
const allAnimalsSuborderCount = mammals[0].count_suborder; // count all suborder of mammals
const allAnimalsOrderCount    = mammals[0].count_order; // count all order of mammals
const allAnimalsClassCount    = mammals[0].count_class; // count all order of mammals
const allAnimalsKingdomCount  = allAnimals.length; // count all order of mammals

// Setting variables for animals
// This variables includes all facts, description, and miscellaneous 
// attributes about / for Animals
const animals = [
    {
        "name": "animals",
        "type": "kingdom",
        "latin_name": "animalia",
        "other_name": ["metozoa"],
        "facts": [
            "multicellular eukaryotic organisms",
            "consume organic material",
            "breathe oxigen",
            "able to move",
            "can reproduce sexually",
        ],
        "count_species": allAnimalsSpeciesCount,
        "count_suborder": allAnimalsSuborderCount,
        "count_order": allAnimalsOrderCount,
        "count_class": allAnimalsClassCount,
        "count_kingdom": allAnimalsKingdomCount,
        "list": allAnimals,
    }
];

// Export animals variable
export { animals };