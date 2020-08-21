import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { addPlant, usePlants } from './field.js';
import { plantSeeds } from './tractor.js';
import { harvestPlants } from './harvester.js';
// const { createPlan } = require("./plan");

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
// console.log(yearlyPlan)

const plantedSeeds = plantSeeds(yearlyPlan)

// const asparagusSeed = createAsparagus()
// console.log(asparagusSeed)
// const seed = { }
// addPlant(seed)

let usedPlants = usePlants()
let harvested = harvestPlants(usedPlants)
console.log(usedPlants)
console.log(harvested)