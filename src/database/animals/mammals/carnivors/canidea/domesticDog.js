import { dogsA } from "./domesticDogA";
import { dogsB } from "./domesticDogB";
import { dogsC } from "./domesticDogC";
import { dogsDF } from "./domesticDogDF";
import { dogsGJ } from "./domesticDogGJ";
import { dogsKN } from "./domesticDogKN";
import { dogsOR } from "./domesticDogOR";
import { dogsS } from "./domesticDogS";
import { dogsTZ } from "./domesticDogTZ";

// Declaring an empty array for all domestic dogs
const listOfDogs = [];

// adding all dogs together
const allDogs = listOfDogs.concat(dogsA, dogsB, dogsC, dogsDF, dogsGJ, dogsKN, dogsOR, dogsS, dogsTZ);

// Counting all domestic dogs in collection
const allDogsSpeciesCount = allDogs.length; // count all species of dogs

// Setting variables for domestic dogs
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic dogs
const domesticDogs = [
    {
        "name": "domestic dogs",
        "scientific_name": "felis catus",
        "type": "species",
        "other_name": ["felis catus"],
        "count_species": allDogsSpeciesCount,
        "list": allDogs,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { domesticDogs };