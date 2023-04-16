const checkBox = $("#check1");

$("#check1").on("change", function(){
    if(checkBox.prop("checked")){
        $(".addres").closest(".group-choose").show();
    }
    else{
        $(".addres").closest(".group-choose").hide();
    }
});

function checkAddres(){
    if(checkBox.checked){
        const group = addres.closest(".group-choose");
        const message = group.querySelector(".error-message");
        if(addres.value == "Выберите адрес доставки"){
            addres.classList.add("input-mistake");
            addres.classList.remove("input-success");
            message.textContent = "Значение не выбрано";
            hasMistake = true;
        }
        else{
            addres.classList.add("input-success");
            addres.classList.remove("input-mistake");
            message.textContent = "";
        }
    }
}

function checkSize(){
    let sizeInputs = form.size;
    for(let id = 0; id < sizeInputs.length; id++){
        if(sizeInputs[id].value == "Размер"){
            sizeInputs[id].classList.add("input-mistake");
            sizeInputs[id].classList.remove("input-success");
            hasMistake = true;
        }
        else{
            sizeInputs[id].classList.add("input-success");
            sizeInputs[id].classList.remove("input-mistake");
        }
    }
}

let hasMistake = false;

function checkInput(){
    hasMistake = false;
    //checkAddres();
    // checkSize();
    checkTextInput($(".email"));
    checkTextInput($(".phone"));
    if(! hasMistake){
        //let isSer = confirm("Подтвердите отправку формы");
        //if(isSer){
            //serializeForm(form);
            //deleteProducts();
        //} 
    }
}

function checkTextInput(input){
    const group = input.closest(".group");
    const message = group.find(".error-message");
    const icon = group.find(".bi");
    const inputlValue = input.val().trim();
    if(inputlValue === ''){
        input.addClass("input-mistake");
        input.removeClass("input-success");
        hasMistake = true;
        message.text("Поле не заполнено");
        icon.addClass("bi-x-circle-fill");
        icon.removeClass("bi-check-circle-fill")
    }
    else{
        input.removeClass("input-mistake");
        input.addClass("input-success");
        message.text("");
        icon.removeClass("bi-x-circle-fill");
        icon.addClass("bi-check-circle-fill");
    }
}

$(".main-form").on("submit", (e)=>{
    e.preventDefault();
    checkInput();
});