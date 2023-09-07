import {menuArray} from '/data.js'

let arrayOfOrders = []

const renderHereEl = document.getElementById('renderHere')
const checkoutSectionEl = document.getElementById('checkoutSection')
let total = 0

document.addEventListener('click',function(e){
  if(e.target.dataset.id){
    addItemToList(e.target.dataset.id)
    getFeed(e.target.dataset.id)
    
  }
  if(e.target.dataset.rem){
    removeOrder(e.target.dataset.rem)
  }
})

function renderHtml(){
menuArray.forEach(function(item){
  renderHereEl.innerHTML += `<div class="container">
                              <img src="${item.location}" width="100px">
                              <div>
                                <h2>${item.name}</h2>
                                <p>${item.ingredients}</p>
                                <h3>$${item.price}</h3>
                              </div>
                              <button class="addbtn" data-id ="${item.id}">+</button>
                            </div>
                             `
})
}
renderHtml()

function addItemToList(orderId){
  
  const targetItemObj = menuArray.filter(function(order){
    return order.id === orderId
   })[0]
   total = total + targetItemObj.price
  arrayOfOrders.push(targetItemObj) 
  renderOrderList()
}

function getFeed(orderId){
  let feed = ``
  
  const menu = menuArray.filter(function(item){
    return item.id === orderId
  })[0]
  

  const {name , price , id} = menu
     
     feed  += `
                <div class="one-item"> 
                    <div class="item">
                        <h2>${name}</h2>
                        <button class="remove-btn" data-rem ="${id}">remove</button>
                    </div>
                    <div class="item-price">
                        <h3>$${price}</h3>
                    </div>
                </div>
                `    
    render1()

   
}

function render2(){
  array1.forEach(function(item){
    checkoutSectionEl.innerHTML +=  item
  })
}


function render1(){
  const heading = `
                    <div class="container-one">
                        <h1>Your Order</h1>
                    </div>
                    `
  document.getElementById('your-order').innerHTML = heading
  TotalPrice()     
  
}




function removeOrder(orderId){
  const targetItemObj = menuArray.filter(function(item){
    return item.id === orderId
  })
  
  // console.log(targetItemObj)
  // console.log(arrayOfOrders)

  let index = arrayOfOrders.findIndex(function(item){
    return item === orderId
  })
  console.log(index)
  // let index = arrayOfOrders.findIndex(menu => menu.id === orderId)
  // arrayOfOrders.splice(index, 1)
  // renderOrderList()
}

function TotalPrice(){
  const output = `
                  <div class="total-order">
                      <h1>Total price:</h1>
                      <h2>$${total}</h2>
                  </div>
                  <button class="complete-order-btn">Complete order</button>
                    `             
  document.getElementById('last').innerHTML = output
}



function renderOrderList(){
  let items = ``
  arrayOfOrders.forEach(function(order){
     items = `
                <div class="one-item"> 
                    <div class="item">
                        <h2>${order.name}</h2>
                        <button class="remove-btn" data-rem ="${order.id}">remove</button>
                    </div>
                    <div class="item-price">
                        <h3>$${order.price}</h3>
                    </div>
                </div>
                `    
    
  })
  
  checkoutSectionEl.innerHTML +=  items

}