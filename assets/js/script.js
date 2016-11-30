$(document).ready(function() {
  $('#grids').click(function(){
    $('#info').hide();
  });

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
    $('#info').show();
});
$( "#link" ).hover(function() {
    console.log("omg")
    $( this ).addClass( "big" );
  },
  function() {
    console.log("kkk")
    $( this ).removeClass( "big" );
  }
);

});
