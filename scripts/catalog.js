export const Catalog = (food) => {
  let contentElement = document.querySelector(".container")
    for (const x of food) {
        contentElement.innerHTML += `<section class="plant">${x.type}</section>`
    }
}