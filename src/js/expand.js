const expandToggle = (toggle, block) => {
  
  let expand = document.querySelector(`.${toggle}`);
  if (expand !== null) {
    let el = document.querySelector(`.${block}`);
    let expandText = expand.innerHTML;
    expand.addEventListener("click", evt => {
      evt.preventDefault();
      if (!el.classList.contains(`${block}--open`)) {
        
        el.classList.add(`${block}--open`)
        expand.classList.add(`expand--close`)
        expand.innerHTML = `Скрыть`
      } else {
        el.classList.remove(`${block}--open`)
        expand.classList.remove(`expand--close`)
        expand.innerHTML = expandText
      }
    })
  }
}

const expandEls = {
  "about__read-more": "about__text",
  "brands__expand": "brands__wrapper",
  "tech-type__expand": "tech-type__wrapper",
}


for (key in expandEls) {
  expandToggle(key, expandEls[key])
}

