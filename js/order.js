window.addEventListener("click", function (event) {
  if (event.target.dataset.action === "plus") {
    const couter = event.target.closest(".quantity-buttons");
    const quantity = couter.querySelector(".quantity");
    quantity.textContent = ++quantity.textContent;
    document.querySelector(".total").textContent =
      "Total:  " + calcCartPrice() + " €";
  }
  if (event.target.dataset.action === "minus") {
    const couter = event.target.closest(".quantity-buttons");
    const quantity = couter.querySelector(".quantity");
    if (parseInt(quantity.textContent) > 1) {
      quantity.textContent = --quantity.textContent;
      document.querySelector(".total").textContent =
        "Total  " + calcCartPrice() + " €";
    }
  }
});

const menuBtn = document.getElementById("burger-btn");
const closeMobileMenu = document.getElementById("close-mobile-menu");
const mobileMenu = document.querySelector(".menu-mobile");
const mobileMenuItems = document.querySelectorAll(".menu-mobile a");

menuBtn.onclick = () => {
  mobileMenu.classList.add("active");
};

closeMobileMenu.onclick = () => {
  mobileMenu.classList.remove("active");
};

mobileMenuItems.forEach((item) => {
  item.onclick = () => {
    mobileMenu.classList.remove("active");
  };
});
