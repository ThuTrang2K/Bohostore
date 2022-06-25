// Scrollbar navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("scroll-on");
    } else {
        nav.classList.remove("scroll-on");
    }
};

//cart jQuery

$(document).ready(function () {
    update_amounts();
    $(".quantity").on("keyup keypress blur change", function (e) {
        update_amounts();
    });
    $(".remove-cart").on("click", function (e) {
        e.preventDefault();
        $(this).parents("tr").remove();
        update_amounts();
    });
});

function update_amounts() {
    let sum = 0.0;
    $(".all-cartItems > tbody > tr").each(function () {
        const qty = $(this).find(".quantity").val();
        if (qty <= 0) {
            $(this).find(".totalPrice").addClass("bg-danger p-2");
        } else {
            $(this).find(".totalPrice").removeClass("bg-danger p-2");
        }
        const price = parseFloat($(this).find(".price").text());
        const amount = qty * price;
        sum += amount;
        $(this).find(".totalPrice").text(amount);
    });
    let tax = 0.1 * sum;
    $(".subtotal").text(sum);
    $(".tax").text(tax);

    $(".maintotal").text(sum + tax);
}

// // cart
// var cartRows= document.querySelectorAll(".table-item");
// var sumtotal = 0 ;
// var total=0;
// for (var i=0; i<cartRows.length; i++){
//     var cartRow = cartRows[i];
//     let pricesElement = cartRow.querySelector(".totalPrice");
//     let priceValue= parseInt(pricesElement.innerHTML);

//     cartRow.querySelector(".quantity").addEventListener('change', function() {
//         if( isNaN(this.value) || this.value <= 0){
//             this.value=0;
//         }
//         total = priceValue * this.value;
//         pricesElement.innerHTML = total;
//         updateCartTotal();
//         if(this.value==0){
//             pricesElement.classList.add("bg-danger", "d-inline-block", "p-3");
//         }
//         else {
//             pricesElement.classList.remove("bg-danger", "d-inline-block", "p-3");
//         }
//     });
// }

// function updateCartTotal() {
//     var cartRows= document.getElementsByClassName("table-item");
//     var total =0;
//     for (var i=0; i<cartRows.length; i++){
//         var cartRow = cartRows[i];
//         var priceElement =cartRow.getElementsByClassName('price')[0];
//         var quantityElement = cartRow.getElementsByClassName("quantity")[0];
//         var price = parseFloat(priceElement.innerHTML);
//         var quantity = quantityElement.value;
//         total += (price * quantity);

//     }
//     var taxElement = document.querySelector(".tax");
//     var maintotalElement= document.querySelector(".maintotal");
//     var subtotalElement =document.querySelector(".subtotal");
//     var tax = parseFloat(taxElement.innerHTML);
//     total = Math.round(total*100) / 100;
//     subtotalElement.innerHTML = total;
//     maintotalElement.innerHTML= tax + total;

// }

// // remove
// var removeCartItemButtons= document.querySelectorAll('.remove-cart');
// for (var i=0; i<removeCartItemButtons.length; i++){
//     var button = removeCartItemButtons[i];
//     button.addEventListener('click', function(event){
//         event.preventDefault();
//         var buttonClick = event.target;
//         buttonClick.parentElement.parentElement.parentElement.parentElement.remove();
//         updateCartTotal();
//     })
// }
