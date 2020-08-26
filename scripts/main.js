import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
import { Catalog } from './catalog.js';
// const { createPlan } = require("./plan");

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
// console.log(yearlyPlan)

plantSeeds(yearlyPlan)

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const seed = { }
// addPlant(seed)

const usedPlants = usePlants()
const harvested = harvestPlants(usedPlants)
console.log("Here is our field",usedPlants)
console.log("This is our harvested", harvested)
Catalog(harvested)