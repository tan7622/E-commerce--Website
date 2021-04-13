
    let options = document.querySelectorAll('.payment-opt')
    options.forEach((e)=>{
        e.addEventListener('click',()=>{
            e.classList.toggle('selected')
            deactivate(e.id)
        })
    })

    function deactivate(id) {
        let tng = document.getElementById('tng')
        let card = document.getElementById('card')

        options.forEach((e)=>{
            e.id == id? null: e.classList.remove('selected')
        })
        if(id == 1){
            tng.style.display = 'block'
            card.style.display = 'none'
        }
        else{
            tng.style.display = 'none'
            card.style.display = 'block'
        }
}