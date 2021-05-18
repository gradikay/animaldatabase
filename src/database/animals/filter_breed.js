/*
 * This file is return all animals with breeds
 * if has_breeds === true
 */
import { a as _a, b as _b } from "./mammals/carnivors/all_carnivors";
import { a as _c, b as _d} from "./mammals/artiodactylas/all_even_ungulates";
import { a as _e } from "./mammals/perissodactylas/all_odd_ungulates";
import { a as _f } from "./mammals/lagomorphas/all_lagomorphs";
// -------------- Application Begins Bellow ------------ \\

// Function returning a list of animals where "has_breed"
// is equal to true
function checkBreed(breeds) {
    return breeds.has_breeds === true;
}

// Filter list and return animals where "has_breeds" is equal to "true"
const _aa = _a[0].list.filter(checkBreed); // Filter carnivors
const _bb = _b[0].list.filter(checkBreed); // Filter carnivors
const _cc = _c[0].list.filter(checkBreed); // Filter even toad ungulates
const _dd = _d[0].list.filter(checkBreed); // Filter even toad ungulates
const _ee = _e[0].list.filter(checkBreed); // Filter odd toad ungulates
const _ff = _f[0].list.filter(checkBreed); // Filter lagomorphs

// Declaring an empty array to combine / join all animals with breed
const list = [];

// Adding all animals with breeds together
const breedList = list.concat(_aa, _bb, _cc, _dd, _ee, _ff);

// Export breedList variable
export { breedList };