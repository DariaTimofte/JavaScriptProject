//ascunde modalul dupa 10 secunde
function hideCartAfterTenSec() {
    setTimeout(function() {
        $("#shoppingCart").css("display", "none");
    }, 10000);
}

function displayOnClickSearch(modal, modalImg, element) {
    var imagine = element
        .parent()
        .parent()
        .find("img");
    modal.css("display", "block");
    modalImg.attr("src", imagine.attr("src"));
}

function displayLightbox() {
    // Get the modal
    var modal = $("#lightbox");
    var buttonsZoom = $(".zoom");
    var modalImg = $("#img01");
    for (var i = 0; i < buttonsZoom.length; i++)
        buttonsZoom[i].onclick = function() {
            displayOnClickSearch(modal, modalImg, $(this));
        };

    var span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.css("display", "none");
    };
}

function showCart() {
    $(this)
        .parent()
        .find("div")
        .css("display", "block");
    hideCartAfterTenSec();
}

// remove elements from cart
function removeElementFromCart(price) {
    var removeButtons = $(".remove");
    for (var i = 0; i < removeButtons.length; i++)
        removeButtons[i].onclick = function() {
            alert("minus one element");
            $(this).parent()
                .fadeOut("slow", function() {
                    $(this).remove();
                });
            var pret = $(this).siblings("b").text();
            decreaseTotalPrice(pret);
        };
}

function displayCartOnClick() {
    $("#cartul").click(showCart);
}

function addToTotalPrice(price) {
    var total = $("#total")
        .children()
        .text()
        .split(" R")[0];
    var sum = parseFloat(total) + parseFloat(price);
    $("#total")
        .children()
        .html(sum);
}

function createProduct() {
    var parent = $(this).parent().parent();
    var imageElement = parent.find("img").attr("src");
    var description = parent.find(".desc").text();
    var price = parent.find(".price").text();
    var oldDivContent = $("#shoppingCart").html();
    var imgElement = "<img class='widgetImg' src='" + imageElement + "'>";
    var buttonMinus = "<button class='remove'> &times;</button>";
    var divElement = 
        "<div class='produs'>" +
        imgElement + description + "<b>"+ price +"</b>"+ buttonMinus + "</div>";
    $("#shoppingCart").html(divElement + oldDivContent);
    var parsePrice = price.split(" R")[0];
    addToTotalPrice(parsePrice);
    removeElementFromCart(parsePrice);
}

function setButtonsAddToCart() {
    var buttonsAddToCart = $(".cart");

    for (var i = 0; i < buttonsAddToCart.length; i++)
        buttonsAddToCart[i].onclick = createProduct;
}

function decreaseTotalPrice(price) {
    var total = $("#total")
        .children()
        .text()
        .split(" R")[0];
    sum = total - parseFloat(price);
    $("#total")
        .children()
        .html(sum);
}



displayLightbox();
displayCartOnClick();
setButtonsAddToCart();
