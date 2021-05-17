import { animals } from "./allAnimals";
// -------------- Application Begins Bellow ------------ \\

// Important variables
const getAnimalList     = animals[0].list;           // Getting the list of all Animals
const getMammalList     = getAnimalList[0].list;     // Getting the list of all - Mammals
const getCarnivorsList  = getMammalList[0].list;     // Getting the list of all - - Carnivors
const getFelinesList    = getCarnivorsList[0].list;  // Getting the list of all - - - Felines
const getCaninesList    = getCarnivorsList[1].list;  // Getting the list of all - - - canines

// Function returning a list of animals where "has_breed"
// is equal to true
function checkBreed(breeds) {
    return breeds.has_breeds === true;
}

// Variable storing all felines where "has_breeds" is equal to "true"
const felineWithBreed = getFelinesList.filter(checkBreed); // Filter feline
const canineWithBreed = getCaninesList.filter(checkBreed); // Filter canine

// Declaring an empty array for all animals with breeds
const listOfAnimals = [];

// Adding all animals together
const breedList = listOfAnimals.concat(felineWithBreed, canineWithBreed);

// Export animals variable
export { breedList };