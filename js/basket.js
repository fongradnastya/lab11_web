const basketPrise = $(".price");
const headerPrice = $(".header__prise");
const counters = $(".counter");


$(".trash").on("click", function (event){
    const card = $(event.target).closest(".card");
    card.remove();
    setPrice();
});

function setPrice(){
    commonPrice = 0; 
    $(".counter").each(function(i, elem)
    {
        let quantity = elem.value;
        console.log(quantity);
        const card = $(this).closest(".card");
        console.log(card);
        const itemPriceTag = card.find(".card-price");
        let itemPrice = Number(itemPriceTag.text().trim().slice(0, -3));
        commonPrice += quantity * itemPrice;
    }
    )
    basketPrise.text(commonPrice + " р.");
    headerPrice.text(commonPrice + " р.");
    // checkIsEmpty();
}

$(".counter").each(function(){

    $(this).on('input', function() {setPrice()});
});

setPrice();