export const expandToggle = (toggle, block) => {
  let expand = document.querySelector(`.${toggle}`)
  let el = document.querySelector(`.${block}`)
  let expandText = expand.innerHTML

  expand.addEventListener('click', (evt) => {
    evt.preventDefault()
    el.classList.toggle(`${block}--open`)
    expand.classList.toggle(`expand--close`)
    expand.innerHTML = expand.innerHTML === 'Скрыть' ? expandText : 'Скрыть'
  })
}
