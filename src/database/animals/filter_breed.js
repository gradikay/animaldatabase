import { animals } from "./all_animals";
// -------------- Application Begins Bellow ------------ \\

// Important variables
const animal     = animals[0].list;    // Getting the list of all Animals
const mammals    = animal[0].list;     // Getting the list of all - Mammals
const carnivors  = mammals[0].list;    // Getting the list of all - - Carnivors
const felines    = carnivors[0].list;  // Getting the list of all - - - Felines
const canines    = carnivors[1].list;  // Getting the list of all - - - canines
const ungulates  = mammals[1].list;    // Getting the list of all - - Ungulates
const bovines    = ungulates[0].list;  // Getting the list of all - - - bovines
const swines     = ungulates[1].list;  // Getting the list of all - - - swines

// Function returning a list of animals where "has_breed"
// is equal to true
function checkBreed(breeds) {
    return breeds.has_breeds === true;
}

// Variable storing all felines where "has_breeds" is equal to "true"
const felines_breed = felines.filter(checkBreed); // Filter feline
const canines_breed = canines.filter(checkBreed); // Filter canine
const bovines_breed = bovines.filter(checkBreed); // Filter bovine
const swines_breed  = swines.filter(checkBreed);  // Filter swine

// Declaring an empty array for all animals with breeds
const list = [];

// Adding all animals together
const breedList = list.concat(felines_breed, canines_breed, bovines_breed, swines_breed);

// Export animals variable
export { breedList };