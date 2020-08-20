import { createPlan } from './plan.js';
import { createAsparagus } from './seeds/asparagus.js';
import { addPlant, usePlants } from './field.js';
// const { createPlan } = require("./plan");

console.log("Welcome to the main module")

const yearlyPlan = createPlan()
console.log(yearlyPlan)

const asparagusSeed = createAsparagus()
console.log(asparagusSeed)
const seed = { }
addPlant(seed)
let usedPlants = usePlants()
console.log(usedPlants)