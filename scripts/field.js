let field = []
export const addPlant = (seed) => {
    if (Array.isArray(seed)) { 
        for (const x of seed) {
            field.push(x) 
        }
    }
    else { field.push(seed) }
}
export const usePlants = () => {
    return field

}