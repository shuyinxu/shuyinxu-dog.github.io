$(document).ready(function() {

  // QUESTION 6

  $('#sidebar-button').click(function(){
    console.log("45")
    if ($('.sidebar-container').hasClass('sidebar-active')){
      console.log("if")
      $('body').removeClass('no-scroll');
      $('#sidebar-button').removeClass('wrapper-active');
      $('.sidebar-container').removeClass('sidebar-active');
      $('.page-wrapper').removeClass('wrapper-active');
    }
    else{
      console.log("else")
      $('#sidebar-button').addClass('wrapper-active');
      $('.sidebar-container').addClass('sidebar-active');
      $('.page-wrapper').addClass('wrapper-active');
      setTimeout(function() {
        $('body').addClass('no-scroll');
      }, 300);
    }
  });
  //Implement the showing and hiding of the sidebar when the user clicks on #sidebar-button here:

  // QUESTION 7
  $('.page-wrapper').click(function(){
    if ($('.sidebar-container').hasClass('sidebar-active')){
        $('#sidebar-button').removeClass('wrapper-active');
        $('.sidebar-container').removeClass('sidebar-active');
        $('.page-wrapper').removeClass('wrapper-active');
        $('body').removeClass('no-scroll');
    }
  });


  //Implement the hiding of the sidebar when the user clicks on the page wrapper here:

  // QUESTION 8


  //Implement the "slide to left" when the user clicks on #carousel-next here


  //THIS IS NOT A REQUIRED QUESTION
  // EXTRA FOR EXPERTS

  // Implement a "smooth scroll" when the user clicks on the sidebar links here

  //showSlides();




var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
$( window ).load( function()
{
    $( '#list' ).masonry( { itemSelector: '.item' } );
});
$('a').click(function(){
    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
    return false;
});
$('#corgi').click(function(){
    console.log("show");
    $('#info').show();
});

});
