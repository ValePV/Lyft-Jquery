//función para splash
$(function(){
  setTimeout(function() { //settimeout llama a una función después de un número especificado de milisegundos.
  $('.splash').fadeOut(); //despues de transcurridos los 3 segundos se desvanecera
  }, 4000);

  //ocultar sections
  $('.section-signup').hide();
  $('.section-signup1').hide();
  $('.section-register').hide();
  $('.section-Successfulregistry').hide();
  

});

// Seleccion de paices.. al clickear en uno se mantenga su nombre
$('.menudrop li').click(function(){
  $('.country').text($(this).text()); //tomo el texto que clickeo que esta en la lista
  $('.country-selection').removeClass('active'); //se remueve la class que esta por defecto
});
// Seleccion de carrier
$('.carmenu li').click(function(){
  $('.carrier').text($(this).text()); //tomo el texto que clickeo que esta en la lista
  $('.carrier-selection').removeClass('active'); //se remueve la class que esta por defecto
});

// funciones
function sign(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.header').hide();
  $('.section-signup').fadeIn();
}

function back(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-signup').hide();
  $('.header').fadeIn(); 
}
function next(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-signup').hide();
  $('.section-signup1').fadeIn();
  //envíar alert 
  alert("Tu código es LAB-476");
  
  function dis(){
  var btn = $('#btn-count');
  var num = $('.input-num').val().length;
  var max = "10";
  if (num === 0 | num < max) {
    $(btn).attr(":disabled", true);
  } else {
    $(btn).attr(":disabled", false);
  }
}}
function back1(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-signup1').hide();
  $('.section-signup').fadeIn();
}
function resend(){
  //envíar alert 
  alert("Tu código es LAB-794");
}
function next1(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-signup1').hide();
  $('.section-register').fadeIn(); 
}
function back2(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-register').hide();
  $('.section-signup1').fadeIn();
}
function next2(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-register').hide();
  $('.section-Successfulregistry').fadeIn();
}
function back3(){
  //ocultar y mostrar la imagen correspondiente al icono que hacemos click
  $('.section-Successfulregistry').hide();
  $('.section-register').fadeIn();
}









