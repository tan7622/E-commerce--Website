
    let cont = document.getElementById('container')
    const closeBtn = document.querySelector('#cross');
    const overlay = document.querySelector('.overlay');
    const container2 = document.querySelector('#container2');
    const back = document.getElementById('back')

    back.addEventListener('click',()=>{
        window.location.href = 'admin.html'
    })
    closeBtn.addEventListener('click', () => {
        overlay.style.opacity = 0
        setTimeout(() => {
            overlay.style.display = 'none'
        }, 500);
        document.body.style.overflow = 'auto'
        container2.innerHTML = ''
    })

    orderList.forEach(e => {
        let orderDiv = document.createElement('div')
        orderDiv.className = 'order'

        let orderNo = document.createElement('div')
        orderNo.className = 'orderNo'
        orderNo.innerHTML = 'Order ' + e.id

        let status = document.createElement('div')
        status.className = 'status'
        status.innerHTML = getStatus(e, status)

        let btnContainer = document.createElement('div')
        btnContainer.className = 'btnContainer'
        let btn = document.createElement('button')
        btn.innerHTML = "View"
        btnContainer.append(btn)

        btn.addEventListener('click',()=>{
            showOrder(e)
        })

        orderDiv.append(orderNo)
        orderDiv.append(status)
        orderDiv.append(btnContainer)

        cont.append(orderDiv)
    });

    function getStatus(order, element){
        let status = '';
        order.status.received.date != '' ? status = 'Received' : null;
        order.status.packed.date != '' ? status = 'Packed' : null;
        order.status.delivering.date != '' ? status = 'Delivering' : null;
        order.status.complete.date != '' ? status = 'Completed' : null;

        status == 'Received'? element.classList.toggle('received') :null;
        status == 'Packed'? element.classList.toggle('packed') :null;
        status == 'Delivering'? element.classList.toggle('delivering') :null;
        status == 'Completed'? element.classList.toggle('completed') :null;

        return status
    }
    
    function showOrder(e) {
        overlay.style.display = 'flex';
        setTimeout(() => {
            overlay.style.opacity = 1;
        }, 1);
        document.body.style.overflow = 'hidden'

        let orderNo = document.createElement('h2')
        orderNo.innerHTML = 'Order ' + e.id

        let detail = document.createElement('div')
        detail.className = 'row'
        let detail1 = document.createElement('div')
        detail1.style.width = '60%'
        let detail2 = document.createElement('div')
        detail2.style.width = '40%'
        detail.append(detail1)
        detail.append(detail2)

        let n = document.createElement('strong')
        n.innerHTML = 'Customer: '
        let name = document.createElement('div')
        name.innerHTML = e.customer;
        let address = document.createElement('strong')
        address.innerHTML = 'Address: '
        let line1 = document.createElement('div')
        line1.innerHTML = e.address1
        let line2 = document.createElement('div')
        line2.innerHTML = e.address2
        let line3 = document.createElement('div')
        line3.innerHTML = e.address3

        detail1.append(n)
        detail1.append(name)
        detail1.append(address)
        detail1.append(line1)
        detail1.append(line2)
        detail1.append(line3)

        let status = document.createElement('div')
        status.innerHTML = 'Status'
        let select = document.createElement('select')
        select.style.width = '60%'
        let s = ['Received','Packed','Delivering','Completed']
        s.forEach((e)=>{
            let opt = document.createElement('option')
            opt.innerHTML = e
            select.append(opt)
        })

        detail2.append(status)
        detail2.append(select)

        let o = document.createElement('h2')
        o.innerHTML = 'Orders'

        let menulist = document.createElement('div')
        menulist.className = 'menu-list'
        e.items.forEach((i)=>{
            let med = medicine.filter((m) => {
                return m.id === i.id
            })
            let item = document.createElement('div')
            item.className = 'item'
            let menuitem = document.createElement('div')
            menuitem.className = 'menu-item'
            let img = document.createElement('img')
            img.src = med[0].path

            menuitem.append(img)
            item.append(menuitem)
            item.append(med[0].medicine + ' x' + i.quantity)
            menulist.append(item)
        })

        let end = document.createElement('div')
        end.className = "row end"
        let btn = document.createElement('button')
        btn.innerHTML = 'Save'
        end.append(btn)

        container2.append(orderNo)
        container2.append(detail)
        container2.append(o)
        container2.append(menulist)
        container2.append(end)
    }
