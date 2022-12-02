const cartBox = document.querySelector(".order-box");

window.addEventListener("click", function (event) {
  if (event.target.hasAttribute("add-to-cart")) {
    const product = event.target.closest(".box");

    const productInfo = {
      imgSrc: product.querySelector("img").getAttribute("src"),
      title: product.querySelector(".product-name").textContent,
      pices: product.querySelector(".product-pices").textContent,
      price: product.querySelector(".price").textContent,
      quantity: product.querySelector(".quantity").textContent,
    };

    const productItemInfo = `<div class="item">
    <div class="item-photo">
      <img src="${productInfo.imgSrc}" alt="">
    </div>

    <div class="product-details">
      <h4 class="product-name">${productInfo.title}</h4>
      <div class="product-info">
          <span class="product-item-pices">${productInfo.pices}</span>
      </div>
      
      <p class="product-price">${productInfo.price}</p>
      <div class="quantity-buttons">
                <button class="minus" data-action="minus">-</button>
                <p class="quantity">${productInfo.quantity}</p>
                <button class="plus" data-action="plus">+</button>
      </div>
  </div>

  <button class="cancel" cancel>Remove</button>
  </div>`;

    cartBox.insertAdjacentHTML("beforeend", productItemInfo);
    product.querySelector(".quantity").textContent = "1";

    document.querySelector(".total").textContent =
      "Total:  " + calcCartPrice() + " €";
  }

  if (event.target.hasAttribute("cancel")) {
    event.target.closest(".item").remove();
    document.querySelector(".total").textContent =
      "Total:  " + calcCartPrice() + " €";
  }
});

function calcCartPrice() {
  const cartItems = document.querySelectorAll(".item");

  let totalPrice = 0;

  cartItems.forEach(function (item) {
    const priceOneItem = item.querySelector(".product-price");
    const amoutOfItems = item.querySelector(".quantity");

    const currentPrice =
      parseFloat(priceOneItem.textContent) *
      parseFloat(amoutOfItems.textContent);
    totalPrice += currentPrice;
  });

  return totalPrice.toFixed(2);
}

const cartIcon = document.getElementById("cart-btn");
const closeBtn = document.getElementById("close-btn");

cartIcon.onclick = () => {
  cartBox.classList.add("active");
};

closeBtn.onclick = () => {
  cartBox.classList.remove("active");
  console.log("Ok");
};
