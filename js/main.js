// Работа с корзиной

const basketPrise = document.querySelector(".header__prise");
const productsAdd = document.querySelectorAll(".popular__link");
basketPrise.textContent = 0 + " р.";

let commonPrice = 0;

productsAdd.forEach((item)=>{
    item.addEventListener("click", function (event) {
        const card = event.target.closest(".popular__card");
        const productPrice = card.querySelector(".popular__price");
        let price = Number(productPrice.textContent.trim().slice(0, -3));
        commonPrice += price;
        basketPrise.textContent = commonPrice + " р.";
    })
})

