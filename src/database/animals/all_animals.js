import { mammals as a } from "./mammals/all_mammals";
// -------------- Application Begins Bellow ------------ \\

// Declaring an empty array for all animals
const list = [];

// Adding all animals together
const all = list.concat(a);

// Storing counts species
const a1 = a[0].count_species;
// Storing counts suborder
const aa1 = a[0].count_suborder;
// Storing counts order
const aaa1 = a[0].count_order;
// Storing counts class
const ax1 = a[0].count_class;

// Counting all animals in collection
const countSpecies  = (a1);          // count all species of animals
const countSuborder = (aa1);         // count all suborder of animals
const countOrder    = (aaa1);        // count all order of animals
const countClass    = (ax1);         // count all class of animals

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
        "count_species": countSpecies,
        "count_suborder": countSuborder,
        "count_order": countOrder,
        "count_class": countClass,
        "list": all,
    }
];

// Export animals variable
export { animals };