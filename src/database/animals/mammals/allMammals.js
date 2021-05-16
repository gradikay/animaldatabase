import { carnivors } from "./carnivors/allCarnivors"; // importing allCarnivors.js

// setting an empty variables for all felines
const allMammals = [];

// adding all cats together
const mammals = allMammals.concat(carnivors);

// Export mammals variable
export { mammals };