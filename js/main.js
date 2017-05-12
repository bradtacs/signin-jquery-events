
$(document).ready(function() {

  $('.signin').on('click', function(){
    $('.modal').fadeIn();
  })

  $('.modal').on('click', function(){
    $('.modal').fadeOut();
  })

  $('.close').on('click', function(){
    $('.modal').fadeOut();
  })

  $('.submit').on('click', function(e){
    e.stopPropagation();
    $('input').addClass('error');
  })

  $('input').on('mouseenter', function(){
    $(this).removeClass('error');
  })

  $('input').on('mouseleave', function(){
    $(this).addClass('error');
  })


});
