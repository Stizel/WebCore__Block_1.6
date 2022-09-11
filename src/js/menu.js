const activeAdd = (target) => {
  const items = document.querySelectorAll(`.${target}`)
  items.forEach(item => {
    item.addEventListener("click", () => {
      items.forEach(item => item.classList.contains(`${target}--active`)
        ? item.classList.remove(`${target}--active`)
        : item);
      item.classList.add(`${target}--active`);
    })
  })
}

const links = ["menu__link",
  "side-nav__link",
  "brands__element",
  "tech-type__element",
]

links.forEach(link => activeAdd(link))





