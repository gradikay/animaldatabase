import { catsAB } from "./domesticCatAB";
import { catsCK } from "./domesticCatCK";
import { catsLR } from "./domesticCatLR";
import { catsSZ } from "./domesticCatSZ";

// Declaring an empty array for all domestic cats
const listOfCats = [];

// adding all cats together
const allCats = listOfCats.concat(catsAB, catsCK, catsLR, catsSZ);

// Setting variables for domestic cats
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic cats
const domesticCats = [
    {
        "species": "domestic cats",
        "other_name": ["felis catus"],
        "list": allCats,
    }
];

export { domesticCats };