import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"

export const plantSeeds = (seed) => {
    for (const row of seed) {
        // console.log("row " + y)
        for (const plant of row) {
            if (plant === "Asparagus") { addPlant(createAsparagus()) }
            if (plant === "Corn") { addPlant(createCorn()) }
            if (plant === "Potato") { addPlant(createPotato()) }
            if (plant === "Soybean") { addPlant(createSoybean()) }
            if (plant === "Sunflower") { addPlant(createSunflower()) }
            if (plant === "Wheat") { addPlant(createWheat()) }
        }
    }
}