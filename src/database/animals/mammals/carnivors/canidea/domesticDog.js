import { dogsA as a } from "./domesticDogA";
import { dogsB as b} from "./domesticDogB";
import { dogsC as c} from "./domesticDogC";
import { dogsDF as d} from "./domesticDogDF";
import { dogsGJ as e} from "./domesticDogGJ";
import { dogsKN as f} from "./domesticDogKN";
import { dogsOR as g} from "./domesticDogOR";
import { dogsS as h} from "./domesticDogS";
import { dogsTZ as i } from "./domesticDogTZ";

// Declaring an empty array for all domestic dogs
const list = [];

// adding all dogs together list
const all = list.concat(a, b, c, d, e, f, g, h, i);

// Counting all domestic dogs in collection
const count = all.length; // count all species of dogs

// Setting variables for domestic dogs
// This variables includes all facts, description, and miscellaneous 
// attributes about / for domestic dogs
const domesticDogs = [
    {
        "name": "domestic dogs",
        "scientific_name": "felis catus",
        "type": "species",
        "other_name": ["felis catus"],
        "count_species": count,
        "list": all,
        "has_breeds": true,
        "is_extinct": false,
        "is_endagered": false,
    }
];

export { domesticDogs };