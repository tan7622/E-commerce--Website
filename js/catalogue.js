
  const nav = document.querySelector('.navbar')
  const closeBtn = document.querySelector('.cross')
  const prev = document.querySelector('#prev')
  const next = document.querySelector('#next')
  const menu = document.getElementById('menu')
  const product = document.querySelector('.vial-container')
  const max = medicine.length
  const tool = document.querySelector('.toolbox')
  const medName = document.getElementById('medicine')
  const p1 = document.querySelector('.price-1')
  const p2 = document.querySelector('.price-2')

  medicine.forEach(obj => {
    let item = document.createElement('div')
    item.className = 'menu-item'
    item.id = obj.id

    let image = document.createElement('img')
    image.src = obj.path
    image.style.height = '70%'

    let overlay = document.createElement('div')
    overlay.className = 'menu-overlay'
    let desc = document.createElement('p')
    desc.innerHTML = obj.medicine
    overlay.append(desc)

    item.append(image)
    item.append(overlay)

    menu.append(item)
  });

  const items = document.querySelectorAll('.menu-item')

  items.forEach(element => {
    element.addEventListener('click', function (e) {
      generateDetails(element.id)
      document.getElementById('vial-container-wrap').style.display = 'block'
      document.getElementById('menu').style.display = 'none'
      nav.style.display = 'none'
    })
  });

  closeBtn.addEventListener('click', () => {
    nav.style.display = 'block';
    document.getElementById('menu').style.display = 'flex'
    document.getElementById('vial-container-wrap').style.display = 'none'
  })

  prev.addEventListener('click', () => {
    document.getElementById('vial-container-wrap').style.display = 'none'
    setTimeout(() => {
      let id = parseInt(document.getElementById('id').innerHTML)
      id == 1 ? id = max : id--
      generateDetails(id.toString())
      document.getElementById('vial-container-wrap').style.display = 'flex'
      document.getElementById('menu').style.display = 'none'
    }, 100);
  })
  next.addEventListener('click', () => {
    document.getElementById('vial-container-wrap').style.display = 'none'
    setTimeout(() => {
      let id = parseInt(document.getElementById('id').innerHTML)
      id == max ? id = 1 : id++
      generateDetails(id.toString())
      document.getElementById('vial-container-wrap').style.display = 'flex'
      document.getElementById('menu').style.display = 'none'
    }, 100);
  })

  function generateDetails(id) {
    let list = product.querySelector('.content ul')
    list.innerHTML = ''

    let med = medicine.filter((obj) => {
      return obj.id === id
    })

    let ingredients = med[0].ingredient

    ingredients.forEach(element => {
      let ul = document.createElement('li')
      ul.innerHTML = element
      list.append(ul)
    });

    let img = product.querySelector('#vial')
    img.src = med[0].path
    img.addEventListener('mousemove', (e) => {
      tool.style.left = e.pageX + 15 + 'px';
      tool.style.top = e.pageY - 15 + 'px';
    })
    let ul = document.createElement('ul')
    med[0].symptom.forEach(element => {
      let li = document.createElement('li')
      li.innerHTML = element
      ul.append(li)
    })
    tool.innerHTML = ''
    tool.append(ul)

    let desc = product.querySelector('#description')
    desc.innerHTML = med[0].description

    let medid = product.querySelector('#id')
    medid.innerHTML = med[0].id

    medName.innerHTML = med[0].medicine
    p1.innerHTML = med[0].price.split('.')[0]
    p2.innerHTML = '.' + med[0].price.split('.')[1]

    document.documentElement.scrollTop = 0
  }