$(".trash").on("click", function (event){
    const card = $(event.target).closest(".card");
    card.remove();
    setPrice();
});

function checkIsEmpty(){
    if($(".counter").length == 0){
        $(".empty").css('display', "block");
        $(".common-price").css('display', "none");
        $(".warning").css('display', "block");
        disableForm();
    }
}

function disableForm(){
    form.check.checked = false;
    $(".addres").css('display', "none");
    form.check.disabled = true;
    form.flexRadio[0].disabled = true;
    form.flexRadio[1].disabled = true;
    form.email.disabled = true;
    form.phone.disabled = true;
    form.btn.disabled = true;
}

function setPrice(){
    commonPrice = 0; 
    $(".counter").each(function(i, elem)
    {
        let quantity = elem.value;
        const card = $(this).closest(".card");
        const itemPriceTag = card.find(".card-price");
        let itemPrice = Number(itemPriceTag.text().trim().slice(0, -3));
        commonPrice += quantity * itemPrice;
    })
    $(".price").text(commonPrice + " р.");
    $(".header__prise").text(commonPrice + " р.");
    checkIsEmpty();
}

$(".counter").each(function(){
    $(this).on('input', function() {setPrice()});
});

setPrice();