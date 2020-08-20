let field = []
export const addPlant = (seed) => {
    if (seed.isArray) { 
        for (x of seed) {
            field.push(x) 
        }
    }
    else { field.push(seed) }
}
export const usePlants = () => {
    return field.slice()

}