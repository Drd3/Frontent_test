document.addEventListener("DOMContentLoaded", function () { 

var languajeButton = document.getElementsByClassName('dropdown_triger')[0];
var toggleLanguajeButton = false;
var dropdownList = document.getElementsByClassName('dropdown_list')[0]; 

// Languaje button script//
languajeButton.addEventListener('click', ()=>{
    toggleLanguajeButton = !toggleLanguajeButton;

    if(toggleLanguajeButton){
        dropdownList.style.display = 'block';
    }if(toggleLanguajeButton == false){
        dropdownList.style.display = 'none';
    }
})
// Get currency atribute value //
var offerItems = document.getElementsByClassName('offers')[0].getElementsByTagName('li');

for (let index = 0; index < offerItems.length; index++) {
    var offerPrice = offerItems[index].getElementsByClassName('offer_price_value')[0];
    offerPrice.insertAdjacentHTML( 'afterbegin', offerPrice.getAttribute('attr-currency'));  
}


})