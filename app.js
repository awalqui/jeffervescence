const app = {

  init(selectors) {
    this.max = 0,
    this.name = [],
    this.list = document.querySelector(selectors.formSelector)
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
    this.name.push(flick)

    const listItem = this.renderListItem(flick)
    this.list.appendChild(listItem)

    ++ this.max
    f.reset()
    this.save()
  },

    renderListItem(flick) {
    const item = document.createElement('li')
    item.textContent = flick.name
    item.dataset.id = flick.id
    return item
  },

  removeFlick(ev) {
    const g = ev.target
    const li = g.closes('.flick').remove

    for (let i = 0; i < this.name.length; i++) {
        let inUse = this.name[i].id.toString()
        if (inUse === li.dataset.id) {
            this.name.splice(i, 1)
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

  prependChild(p, c) {
      parent.insertBefore(child, parent.firstChild)
  },

  createList(flick) {
      const template = document.querySelector('.flick.template')
      const li = template.cloneNode(true)
      this.removeClassName(li, 'template')
      li.querySelector('.flick.template').textContent = flick.name
      li.dataset.id = flick.id
      li.querySelector('button.remove')
      li.addEventListener('click', this.removeFlick.bind(this))
      return li
  },
}

app.init({
  formSelector: '#flick-form',
  listSelector: '#flick-list'
})