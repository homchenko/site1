// jQuery(document).ready(function ($) {
//
//   $('#checkbox').change(function(){
//     setInterval(function () {
//         moveRight();
//     }, 3000);
//   });
//
//     var slideCount = $('#slider ul li').length;
//     var slideWidth = $('#slider ul li').width();
//     var slideHeight = $('#slider ul li').height();
//     var sliderUlWidth = slideCount * slideWidth;
//
//     $('#slider').css({ width: slideWidth, height: slideHeight });
//
//     $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
//
//     $('#slider ul li:last-child').prependTo('#slider ul');
//
//     function moveLeft() {
//         $('#slider ul').animate({
//             left: + slideWidth
//         }, 200, function () {
//             $('#slider ul li:last-child').prependTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//
//     function moveRight() {
//         $('#slider ul').animate({
//             left: - slideWidth
//         }, 200, function () {
//             $('#slider ul li:first-child').appendTo('#slider ul');
//             $('#slider ul').css('left', '');
//         });
//     };
//
//     $('a.control_prev').click(function () {
//         moveLeft();
//     });
//
//     $('a.control_next').click(function () {
//         moveRight();
//     });
//
// });

var buttonItemBuy = document.querySelector('.catalog-item-buy');
var cartNotification = document.querySelector('.cart-notification');

/*if(buttonItemBuy != null && notification != null){
    buttonItemBuy.addEventListener('click', function(event){
        event.preventDefault();
        cartNotification.classList.add('show-block');
    })
}*/

var buyItemButtons= document.querySelectorAll('.catalog-item-buttons');

for (i = 0; i < buyItemButtons.length; ++i) {
    buyItemButtons[i].addEventListener("click", function (event) {
        // прерываем событие по умолчанию
        event.preventDefault(event);
        // Добавляем класс
        // classList - объект для работы с классами
        cartNotification.classList.add("show-block");
    })
}

var cartCancelBtn = document.querySelector('.cart-cancel-btn');
var cartNotificationClose = document.querySelector('.cart-notification-close');

cartCancelBtn.addEventListener('click', function(event){
    event.preventDefault();
    cartNotification.classList.remove('show-block');
})
cartNotificationClose.addEventListener('click', function(event){
    event.preventDefault();
    cartNotification.classList.remove('show-block');
})

// Оформить заказ
var cartOrderBtn = document.querySelector('.cart-order-btn');
cartOrderBtn.addEventListener('click', function(event){
    event.preventDefault();
    document.location.href = 'catalog.html'; // или window.location.href = 'catalog.html';
})
