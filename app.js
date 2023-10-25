
async function dodaj(){
    const nazwaval = document.getElementById('nazwa').value
    const cenaval = document.getElementById('cena').value
    const iloscval = document.getElementById('ilosc').value

    await fetch(`${url}?name=${nazwaval}&regular_price=${cenaval}&stock_quantity=${iloscval}&manage_stock=true`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        }
    })
    
    left.innerHTML = ''
    f()
}


async function potw(but, ile){
    
    const id = but.id
    console.log(id)

    const add = document.getElementById('number').value
    ile = parseInt(ile)+parseInt(add)

    console.log(ile)
    await fetch(`${url}/${id}?stock_quantity=${ile}`, {
        method: 'POST',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        }
    })

    left.innerHTML = ''
    f()
}