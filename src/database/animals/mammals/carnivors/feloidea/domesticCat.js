import { catsAB } from "./domesticCatAB";
import { catsCK } from "./domesticCatCK";
import { catsLR } from "./domesticCatLR";
import { catsSZ } from "./domesticCatSZ";

// Declaring an empty array for all domestic cats
const listOfCats = [];

// adding all cats together
const allCats = listOfCats.concat(catsAB, catsCK, catsLR, catsSZ);

// Counting all domestic cats in collection
const allCatsSpeciesCount = allCats.length; // count all species of cats

// Setting variables for domestic cats
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic cats
const domesticCats = [
    {
        "name": "domestic cats",
        "scientific_name": "Felis catus",
        "type": "species",
        "other_name": ["felis catus"],
        "count_species": allCatsSpeciesCount,
        "list": allCats,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { domesticCats };