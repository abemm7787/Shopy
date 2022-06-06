let products = [
  {
    name: "Mens T-Shirt",
    price: 23,
    inCart: 0,
    tag: "product1.jpg"

  },
  {
    name: "Slim Cut Jeans",
    price: 33,
    inCart: 0,
    tag: "product2.jpg"
  },
  {
    name: "AirForce Canvas",
    price: 120,
    inCart: 0,
    tag: "product3.jpg",
  },
  {
    name: "Smart Watch V20 Classich",
    price: 435,
    inCart: 0,
    tag: "product4.jpg",
  },
  {
    name: "V Neck Tassel Cape",
    price: 65,
    inCart: 0,
    tag: "wproduct1.jpg",
  },
  {
    name: "Wrapped Dress Shoes",
    price: 65,
    inCart: 0,
    tag: "wproduct2.jpg",
  },
  {
    name: "Blue Denim Dress",
    price: 85,
    inCart: 0,
    tag: "wproduct3.jpg",
  },
  {
    name: "Low Printed Dress",
    price: 85,
    inCart: 0,
    tag: "wproduct4.jpg",
  },
]

let carts = document.querySelectorAll(".add-carts")
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    //totalCost(products[i])
  })
}


function onLoadCartNumbers() {
  
  let productNumbers = localStorage.getItem("cartNumbers")
  if (productNumbers) {
    document.querySelector(".smartCart span").textContent = productNumbers
  }
}
function cartNumbers(product) {
  console.log(product, "myname")
  let productNumbers = localStorage.getItem("cartNumbers")
  productNumbers = parseInt(productNumbers)

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1)
    document.querySelector(".smartCart span").textContent = productNumbers + 1
  }
  else {
    localStorage.setItem("cartNumbers", 1)
    document.querySelector(".smartCart span").textContent = 1
  }
  setItems(product)
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart")
  cartItems = JSON.parse(cartItems)

  if (cartItems != null) {

    if (cartItems[product.name] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1
  }
  else {
    product.inCart = 1
    cartItems = {
      [product.tag]: product
    }
  }


  localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost")


  if (cartCost != null) {
    cartCost = parseInt(cartCost)
    localStorage.setItem("totalCost", cartCost + product.price)
  } else {
    localStorage.setItem("totalCost", product.price)
  }

}

function displayCart() {
      

  let cartItems = localStorage.getItem("productsInCart")
  cartItems = JSON.parse(cartItems)

  let productContainer = document.querySelector(".products-container")
  let priceProducts = document.querySelector(".product-price-container")
  let quanityProducts = document.querySelector(".quanity-Products")
  let total = document.querySelector(".total")

  let completeTotal = document.querySelector(".completeTotal")  
var sumOfProduct = 0


  if (cartItems && productContainer && priceProducts && quanityProducts && total) {
    productContainer.innerHTML = "";
    Object.values(cartItems).forEach(item => {
      let sumnum = 0;
      console.log(sumnum)
      productContainer.innerHTML += `
      <div class="flex flex-row justify-around">
      <img id="tag-img" class="h-10 w-10 class="" src="./images/products/${item.tag}">
      
    <div id="name-span">${item.name}</div>
</div>`
      priceProducts.innerHTML += `
  <div class="flex flex-row justify-around">
   <div id="price-span" class="mt-5 price">$${item.price}.00</div>
 </div>`

quanityProducts.innerHTML += `
  
  <div class="flex flex-row justify-around">
  <div  id="inCart-span"  class="mt-5 quanitity">${item.inCart}</div>

</div>`
total.innerHTML += `
  <div class="flex flex-row justify-around">
   <div id="total-div" class="mt-5 total">
$${item.inCart * item.price}.00

</div>`

sumOfProduct  += item.price * item.inCart
completeTotal.innerHTML = sumOfProduct  
 console.log(sumOfProduct)
   
    })
  }



}



displayCart()

onLoadCartNumbers()