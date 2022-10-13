let menu_list = document.getElementById('menu-list')
let orders_list = document.getElementById('orders-list')
let sum = document.getElementById('sum')
let items_count = document.getElementById('items-count')

const renderMenuItem = (product) => {
    return `
        <div class="food-card" onclick="onClickCard(event)" data-product='${JSON.stringify(product)}'>  
            <img class="food-img" src="${product.img}" >
            <div>
                <div>${product.title}</div>
                <div>${product.price} som </div>
            </div>
        </div>
    `
}

const renderOrderItem = (orderItem) => {
    return( `
      
        <li class="order-item">
                <div> ${orderItem.title} </div>
                <span> ${orderItem.count} </span>
                <span> ${orderItem.price} </span>
                <span class="reFresh" onClick='getDelete()'> X </span>
        </li> 
        
    `)
}

function getDelete(){
        let cart = document.querySelector('.order-item')
        cart.remove()
   }
   
const renderOrders = (list) => {
     let items = []
     list.map((item) => {
        items.push(renderOrderItem(item))
     })
     orders_list.innerHTML = items.join('')
}

const renderMenuList = (list) => {
    let items = []
    list.map((item) => {
        items.push(renderMenuItem(item))
    })
    menu_list.innerHTML = items.join('')
}

const onClickCard = (event) => {
    let card = JSON.parse(event.currentTarget.dataset.product)
    let currentIndex = orders_basket.findIndex(el => el.id == card.id)

    if(currentIndex == -1){
        orders_basket.push({...card, count: 1})
    } else{
        orders_basket[currentIndex].count++
        orders_basket[currentIndex].price += card.price   
    }
    renderOrders(orders_basket)
    solveSum()
    getCount()
}

const solveSum = () => {
    sum.innerHTML = orders_basket.reduce ((el,{price}) => el + price, 0 )
}

const getCount = () => {
    items_count.innerHTML = orders_basket.reduce ((el,{count}) => el + count, 0 )
}

renderMenuList(menu_items)

// homework  x иштетип келуу