const left = document.getElementById('left')
const body = document.querySelector('body')
const url = 'http://localhost/wordpress/wp-json/wc/v3/products'
var products
async function f(){
    const data = await fetch(url, {
        method: 'GET',
        headers: {
            Authorization: `Basic ${btoa('filip:haslo123haslo')}`
        }
    })
    products = await data.json()

    for(let i in products)
        {
            const ten = products[i]
            const div = document.createElement('div')
            div.classList.add('divs')
            

             const nazwa = document.createElement('h3')
             nazwa.innerHTML = ten.name
             const cena = document.createElement('h3')
             cena.innerHTML = ten.regular_price + ' zł'

             const ilosc = document.createElement('h3')
             if(ten.stock_quantity) ilosc.innerHTML = ten.stock_quantity
             else ilosc.innerHTML = 'null'

             const iloscInp = document.createElement('input')
             iloscInp.setAttribute('type', 'number')
             iloscInp.setAttribute('id', 'number')


             const potwierdz = document.createElement('button')
             potwierdz.innerHTML = 'potwierdź'
             potwierdz.setAttribute('id', `${ten.id}`)
             potwierdz.setAttribute('onclick', `potw(this, ${ten.stock_quantity})`)
             



             //append
             div.appendChild(nazwa)
             div.appendChild(cena)
             div.appendChild(ilosc)
             div.appendChild(iloscInp)
             div.appendChild(potwierdz)

             left.appendChild(div)

        }
}

f()