
var hamburgherButton = $('#hamburgerButton');

var hamburgherMenu = $('.hamburger-menu');

var closeButton = $('.close');


hamburgherButton.click(function(){

  hamburgherMenu.addClass( "active");

});

closeButton.click(function(){

  hamburgherMenu.removeClass( "active");

});
