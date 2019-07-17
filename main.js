// Creare un hamburger menu con l’utilizzo di Html, Css e JavaScript.

//Memorizzo l'elemento azione del click con chiamata Jquery in una variabile
var hamburgerList = $("#hamburgerButton");
var hamburgerListClose = $(".close");
console.log(hamburgerList);

//Azione click sull'icona dell'amburgher per far apparire il menù nascosto
hamburgerList.on({

  click: function(){
    $(".hamburger-menu").fadeIn();

    //Aggiunta Classi per ridimensinare il div nascosto
    $(".hamburger-menu").css({ 'min-width' : "35vw", "width" : "40%", "min-height" : "50vh", "height" : "75%"});
  }

});


//Azione click sull'icona per chiudere il menù nascosto
hamburgerListClose.click(function(){

  $(".hamburger-menu").fadeOut(500);

});

// function resize(){
//   if ($(document).width() >= 1000 ) {
//     $(".hamburger-menu").css({ 'display' : "none"});
//   }
// }
//
// $(".hamburger-menu").resize();
