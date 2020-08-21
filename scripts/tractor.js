import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (seed) => {
    let plan = []
    for (const y of seed) {
        // console.log("row " + y)
        for (const x of y) {
            if (x === "Asparagus") { addPlant(createAsparagus()) }
            if (x === "Corn") { addPlant(createCorn()) }
            if (x === "Potato") { addPlant(createPotato()) }
            if (x === "Soybean") { addPlant(createSoybean()) }
            if (x === "Sunflower") { addPlant(createSunflower()) }
            if (x === "Wheat") { addPlant(createWheat()) }
        }
    }
}