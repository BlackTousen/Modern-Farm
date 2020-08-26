import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"


export const harvestPlants = (plants) => {
    let harvest = []
    for (const x of plants) {
        var i = 0
        while (i < x.output) {
            if (x.type === "Corn") {
                let corn = createCorn()
                harvest.push(corn[0])
            i++
            }
            if (x.type === "Asparagus") { harvest.push(createAsparagus()) }
            if (x.type === "Potato") { harvest.push(createPotato()) }
            if (x.type === "Soybean") { harvest.push(createSoybean()) }
            if (x.type === "Sunflower") { harvest.push(createSunflower()) }
            if (x.type === "Wheat") { harvest.push(createWheat()) }
            i++
        }
    }
    return harvest
}
