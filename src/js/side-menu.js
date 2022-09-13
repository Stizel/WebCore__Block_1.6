const sideMenu = document.querySelector(`.side-menu-wrapper`)
const menuBlur = sideMenu.querySelector(`.side-menu-overlay`)

const areaBlur = document.querySelector(`.blur`)
let body = document.querySelector('.body')

const modal = document.querySelector(`.modal-wrapper`)
const modalBlur = modal.querySelector(`.modal-overlay`)

const modalCall = modal.querySelector(`.modal-call`)
const modalFeedback = modal.querySelector(`.modal-feedback`)

/////////////////sideMenu toggle/////////////////////

export const menuToggle = (evt) => {
  evt.preventDefault()
  sideMenu.classList.toggle(`side-menu-wrapper--hidden`)
  menuBlur.classList.toggle(`side-menu-overlay--hidden`)
  areaBlur.classList.toggle(`blur--true`)
  body.classList.toggle('body-overflow')
}

/////////////////click on Blur close/////////////////////

export const closeAll = () => {
  sideMenu.classList.add(`side-menu-wrapper--hidden`)
  menuBlur.classList.add(`side-menu-overlay--hidden`)
  areaBlur.classList.remove(`blur--true`)
  modalBlur.classList.add(`modal-overlay--hidden`)
  modal.classList.add(`modal-wrapper--hidden`)
  sideMenu.classList.remove(`side-menu-wrapper--blur`)
  body.classList.remove('body-overflow')
}

/////////////////modal open/////////////////////

const modalOpen = () => {
  modal.classList.remove(`modal-wrapper--none`)
  modal.classList.remove(`modal-wrapper--hidden`)
  sideMenu.classList.add(`side-menu-wrapper--blur`)
  areaBlur.classList.add(`blur--true`)
  modalBlur.classList.remove(`modal-overlay--hidden`)
  body.classList.add('body-overflow')
}

export const modalClose = (evt) => {
  evt.preventDefault()
  sideMenu.classList.add(`side-menu-wrapper--hidden`)
  menuBlur.classList.add(`side-menu-overlay--hidden`)
  modal.classList.add(`modal-wrapper--hidden`)
  sideMenu.classList.remove(`side-menu-wrapper--blur`)
  modalBlur.classList.add(`modal-overlay--hidden`)
  areaBlur.classList.remove(`blur--true`)
  body.classList.remove('body-overflow')
}

/////////////////callModal open/////////////////////

export const modalCallOpen = (evt) => {
  evt.preventDefault()
  modalOpen()
  modalFeedback.classList.add(`modal-feedback--hidden`)
  modalCall.classList.remove(`modal-call--hidden`)
  let modalInput = modal.querySelector('#call')
  setTimeout(() => modalInput.focus(), 1000)
}

///////////////feedbackModal open/////////////////////

export const modalFbOpen = (evt) => {
  evt.preventDefault()
  modalOpen()
  modalCall.classList.add(`modal-call--hidden`)
  modalFeedback.classList.remove(`modal-feedback--hidden`)
  let modalInput = modal.querySelector('#name')
  setTimeout(() => modalInput.focus(), 1000)
}
