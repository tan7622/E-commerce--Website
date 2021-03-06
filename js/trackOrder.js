
    const container = document.querySelector('#container');
    const container2 = document.querySelector('#container2');
    const overlay = document.querySelector('.overlay');
    const closeBtn = document.querySelector('.cross');

    closeBtn.addEventListener('click', () => {
        overlay.style.opacity = 0
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 500);
        document.body.style.overflow = 'auto'
        container2.innerHTML = ''
    })

    let orderFromCustomer = orderList.filter((c)=>{
        return c.customer === 'Francesca'
    })

    orderFromCustomer.forEach(obj => {
        let orderDiv = document.createElement('div')
        orderDiv.className = 'order'
        orderDiv.id = obj.id

        let orderNo = document.createElement('div')
        orderNo.classList = 'clickable'
        orderNo.innerHTML = 'Order ' + obj.id

        let orderItems = document.createElement('div')
        orderItems.className = "items"

        let receivedDiv = document.createElement('div')
        receivedDiv.className = 'row'
        let received = document.createElement('div')
        received.innerHTML = 'Received on: ' + obj.status.received.date

        receivedDiv.append(received)
        orderItems.append(receivedDiv)

        orderDiv.append(orderNo)
        orderDiv.append(orderItems)

        container.append(orderDiv)

        let totalP = 0;
        obj.items.forEach(i => {
            let med = medicine.filter((m) => {
                return m.id === i.id
            })

            let item = document.createElement('div')
            item.className = 'row'

            let div1 = document.createElement('div')
            div1.className = 'thumbnail'

            let thumbnail = document.createElement('div')
            thumbnail.className = 'menu-item'

            let image = document.createElement('img')
            image.src = med[0].path
            image.style.maxWidth = '100%'

            let div2 = document.createElement('div')
            div2.className = 'detail'

            let quantity = document.createElement('div')
            quantity.className = 'quantity'
            quantity.innerHTML = 'Quantity: ' + i.quantity

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
            div2.append(quantity)

            div1.append(thumbnail)
            thumbnail.append(image)
            item.append(div1)
            item.append(div2)

            orderItems.append(item)

        })

        totalP = caclculate(orderDiv)

        let summaryDiv = document.createElement('div')
        summaryDiv.className = "end"

        let totalText = document.createElement('div')
        totalText.className = 'total-text'
        totalText.innerHTML = 'Total:'

        let price = document.createElement('div')
        price.className = 'price-wrap'
        let dollar = document.createElement('div')
        dollar.className = 'dollar-sign'
        dollar.innerHTML = '$'
        let price1 = document.createElement('div')
        price1.className = 'price-1'
        price1.innerHTML = totalP.toString().split('.')[0]
        let price2 = document.createElement('div')
        price2.className = 'price-2'
        price2.innerHTML = '.' + totalP.toFixed(2).toString().split('.')[1]

        price.append(totalText)
        price.append(dollar)
        price.append(price1)
        price.append(price2)

        let a = document.createElement('div')
        a.append(price)
        let btn = document.createElement('button')
        btn.innerHTML = 'Track'
        btn.onclick = () => {
            showTracker(obj)
        }

        summaryDiv.append(a)
        summaryDiv.append(btn)

        orderItems.append(summaryDiv)
    })

    const orders = document.querySelectorAll('.order')

    orders.forEach(element => {
        element.querySelector('.clickable').addEventListener('click', () => {
            element.classList.toggle('on')
            let a = element.querySelector('.items')
            element.classList.contains('on') ? a.style.opacity = '1' : a.style.opacity = '0';
        })
    });

    let messages = [
        'Your order has been received',
        'Your order has been packed',
        'Your order is being delivered',
        'Your order is delivered',
    ]

    function showTracker(order) {
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 1);
        document.body.style.overflow = 'hidden'

        let orderNo = document.createElement('h2')
        orderNo.innerHTML = "Order " + order.id

        let progressBar = document.createElement('ul')
        progressBar.className = 'progressbar'

        let status = 0;
        order.status.received.date != '' ? status = 0 : null;
        order.status.packed.date != '' ? status = 1 : null;
        order.status.delivering.date != '' ? status = 2 : null;
        order.status.complete.date != '' ? status = 3 : null;

        for (let i = 0; i < 4; i++) {
            let step = document.createElement('li')
            progressBar.append(step)
        }
        for (let i = 0; i <= status; i++) {
            let list = progressBar.querySelectorAll('li')
            list[i].className = 'active'
            list[status].className = 'current'
        }

        let statusContainer = document.createElement('div')
        statusContainer.className = 'container3'

        for (let i = 0; i <= status; i++) {
            let row = document.createElement('div')
            row.className = 'row'
            let message = document.createElement('div')
            message.className = 'message'
            let datetime = document.createElement('div')
            datetime.className = 'datetime'

            message.innerHTML = messages[i]
            let date = document.createElement('h2')
            let time = document.createElement('h3')

            if (i == 0) {
                date.innerHTML = order.status.received.date
                time.innerHTML = order.status.received.time
            }
            if (i == 1) {
                date.innerHTML = order.status.packed.date
                time.innerHTML = order.status.packed.time
            }
            if (i == 2) {
                date.innerHTML = order.status.delivering.date
                time.innerHTML = order.status.delivering.time
            }
            if (i == 3) {
                date.innerHTML = order.status.complete.date
                time.innerHTML = order.status.complete.time
            }

            datetime.append(date)
            datetime.append(time)

            row.append(message)
            row.append(datetime)
            statusContainer.append(row)
        }

        container2.append(orderNo)
        container2.append(progressBar)
        container2.append(statusContainer)
    }

    function caclculate(order) {
        let price1 = order.querySelectorAll('.price-1')
        let price2 = order.querySelectorAll('.price-2')
        let quantity = order.querySelectorAll('.quantity')
        let totalP = 0
        let i = 0
        price1.forEach(e => {
            let price = e.innerHTML + '.' + price2[i].innerHTML.substr(1)
            totalP = totalP + (parseFloat(price) * parseFloat(quantity[i].innerHTML.split(': ')[1]))
            i++
        })
        return totalP
    }
    