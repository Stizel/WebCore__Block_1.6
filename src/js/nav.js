export const activeAdd = (target) => {
  const items = document.querySelectorAll(`.${target}`)
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((item) =>
        item.classList.contains(`${target}--active`)
          ? item.classList.remove(`${target}--active`)
          : item
      )
      item.classList.add(`${target}--active`)
    })
  })
}
