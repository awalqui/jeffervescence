const app = {

  init(selectors) {
    this.max = 0,
    this.flicks = [],
    this.list = document.querySelector(selectors.listSelector)
    this.template = document.querySelector(selectors.templateSelector)
    document
      .querySelector(selectors.formSelector)
      .addEventListener('submit', this.addFlick.bind(this))


  },

  addFlick(ev) {
    ev.preventDefault()
    const f = ev.target
    const flick = {
      id: this.max + 1,
      name: f.flickName.value,
    }
    this.flicks.unshift(flick)

    const listItem = this.renderListItem(flick)
    this.list.insertBefore(listItem, this.list.firstChild)

    ++ this.max
    f.reset()
    //this.save()
  },

  removeFlick(ev) {
    const g = ev.target
    const li = g.closes('.flick').remove

    for (let i = 0; i < this.flicks.length; i++) {
        let inUse = this.flicks[i].id.toString()
        if (inUse === li.dataset.id) {
            this.flicks.splice(i, 1)
            break
        }
    }

    li.remove()
    this.save()
  },

  removeClass(element, cName) {
      element.cName = element.cName.replace(cName, '').trim()
  },

  save() {
      localStorage.setItem('flick-form', this.save)
  },
  
  renderListItem(flick) {
    const item = this.template.cloneNode(true)
    item.classList.remove('template')
    item.dataset.id = flick.id
    item
        .querySelector('.flick-name')
        .textContent = flick.name

    return item
  },
}

app.init({
  formSelector: '#flick-form',
  listSelector: '#flick-list',
  templateSelector: '.flick.template'
})