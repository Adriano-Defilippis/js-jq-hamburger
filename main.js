// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.

//Memorizzo l'elemento azione del click con chiamata Jquery in una variabile
var hamburgerList = $("#hamburgerButton");
var hamburgerListClose = $(".close");

console.log(hamburgerList);

//Azione click sull'icona dell'amburgher per far apparire il menù nascosto
hamburgerList.on({

  click: function(){

    $(".hamburger-menu").fadeIn();
    $(".hamburger-menu").css({ 'min-width' : "25vw", "width" : "25%", "min-height" : "50vh", "height" : "50%"});;

    // $(".hamburger-menu").css("width", "25vh");

  }


});

//Azione click sull'icona per chiudere il menù nascosto
hamburgerListClose.click(function(){

  $(".hamburger-menu").fadeOut(1000);

});
