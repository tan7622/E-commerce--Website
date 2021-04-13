
    const cart = document.getElementById('cart')
    const total = document.getElementById('totalPrice')
    const totalDec = document.getElementById('totalPriceDec')
    const deletes = document.querySelectorAll('.delete')

    let totalPrice = 0;

    shoppingList.forEach(obj => {

        let thumbnail = document.createElement('div')
        thumbnail.className = 'menu-item'
        thumbnail.id = obj.id

        let med = medicine.filter((obj) => {
            return obj.id === thumbnail.id
        })

        let item = document.createElement('div')
        item.className = 'row'
        item.id = obj.id

        let div1 = document.createElement('div')
        div1.className = 'thumbnail'

        let image = document.createElement('img')
        image.src = med[0].path
        image.style.maxWidth = '100%'

        let div2 = document.createElement('div')
        div2.className = 'detail'

        let div3 = document.createElement('div')
        div3.style.display = 'flex'

        let name = document.createElement('div')
        name.className = 'name'
        name.innerHTML = med[0].medicine
        name.style.width = '80%'

        let price = document.createElement('div')
        price.className = 'price-wrap'
        let dollar = document.createElement('div')
        dollar.className = 'dollar-sign'
        dollar.innerHTML = '$'
        let price1 = document.createElement('div')
        price1.className = 'price-1'
        price1.innerHTML = med[0].price.split('.')[0]
        let price2 = document.createElement('div')
        price2.className = 'price-2'
        price2.innerHTML = '.' + med[0].price.split('.')[1]

        price.append(dollar)
        price.append(price1)
        price.append(price2)

        div3.append(name)
        div3.append(price)
        div2.append(div3)

        let counter = document.createElement('div')
        counter.className = 'counter'

        let counter_wrap = document.createElement('div')
        counter_wrap.className = 'counter-wrap'

        let count = document.createElement('select')
        for (let i = 1; i < 16; i++) {
            let opt = document.createElement('option')
            opt.innerHTML = i;
            count.append(opt)
        }

        counter_wrap.append(count)
        counter.append(counter_wrap)
        div2.append(counter)


        let a = document.createElement('div')
        a.className = 'delete-hover'
        let del = document.createElement('div')
        del.className = 'delete'
        let delicon = document.createElement('img')
        delicon.src = "res/icon/delete.svg"
        delicon.className = "delete-icon"
        a.append(del)
        a.append(delicon)
        a.addEventListener('click', () => {
            deleteFunc(obj.id, del)
        })

        div1.append(thumbnail)
        thumbnail.append(image)
        item.append(div1)
        item.append(div2)
        item.append(a)

        cart.append(item)

        totalPrice = totalPrice + parseFloat(med[0].price);

    });

    calculate()

    function deleteFunc(id, button) {
        button.className = 'deleted';
        let item = document.getElementById(id)
        item.style.opacity = 0

        setTimeout(() => {
            button.className = 'delete';
            cart.removeChild(item)
            calculate()
        }, 1000);
    }

    function calculate() {
        let price1 = cart.querySelectorAll('.price-1')
        let price2 = cart.querySelectorAll('.price-2')
        let totalP = 0
        let i = 0

        price1.forEach(e => {
            let price = e.innerHTML + '.' + price2[i].innerHTML.substr(1)
            totalP = totalP + parseFloat(price)
            i++
        })

        if (totalP == 0)
            document.querySelector('#empty').style.display = 'grid'

        total.innerHTML = totalP.toString().split('.')[0]
        totalDec.innerHTML = '.' + totalP.toFixed(2).toString().split('.')[1]
    }