import 'normalize.css'
import '../scss/style.scss'
import { swiperMode } from './swiperInit.js'
import { expandToggle } from './expand.js'

import {
  menuToggle,
  closeAll,
  modalCallOpen,
  modalFbOpen,
  modalClose
} from './side-menu.js'

import { activeAdd } from './nav.js'

///////////////////////EXPAND/////////////////////////
const expandEls = {
  'about__read-more': 'about__text',
  'brands__expand': 'brands__wrapper',
  'tech-type__expand': 'tech-type__wrapper'
}

for (let key in expandEls) {
  expandToggle(key, expandEls[key])
}
///////////////////////MENU/////////////////////////
const sideMenu = document.querySelector(`.side-menu-wrapper`)

const btnClose = sideMenu.querySelector(`.side-menu__button-close`)
const btnOpen = document.querySelector(`.header__menu-button`)
const areaBlur = document.querySelector(`.blur`)
const modal = document.querySelector(`.modal-wrapper`)

const modalBtnClose = modal.querySelector(`.modal__button-close`)

const callBtnTab = document.querySelectorAll(`.contacts-us__call`)
const messageBtnTab = document.querySelectorAll(`.contacts-us__chat`)

btnOpen.addEventListener('click', menuToggle)
btnClose.addEventListener('click', menuToggle)
areaBlur.addEventListener('click', closeAll)
callBtnTab.forEach((el) => el.addEventListener('click', modalCallOpen))
messageBtnTab.forEach((el) => el.addEventListener('click', modalFbOpen))
modalBtnClose.addEventListener('click', modalClose)
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeAll()
})
///////////////////////NAVIGATION/////////////////////////
const links = [
  'menu__link',
  'side-nav__link',
  'brands__element',
  'tech-type__element'
]

links.forEach((link) => activeAdd(link))

///////////////////////SWIPER/////////////////////////

let arr = ['load', 'resize']
arr.forEach((el) => window.addEventListener(el, () => swiperMode()))

swiperMode()
