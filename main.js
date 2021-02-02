


$(document).ready(function() {
    //responsive menu toggle
    $("#menutoggle").click(function() {
      $('.xs-menu').toggleClass('displaynone');

      });
    //add active class on menu
    $('ul li').click(function(e) {
      e.preventDefault();
      $('li').removeClass('active');
      $(this).addClass('active');

    });  
   
    //drop-down menu
    $('.mega-menu').hide()
})

function checkMediaQuery() {
 
  if (window.innerWidth < 600) {
    
    console.log('Media Query Matched!<768 display xs')
  }else if (window.innerWidth > 600) {
    console.log('Media Query Matched!>768')
    $(".drop-down").mouseenter(function() {
      $('.mega-menu').show()
      // $(this).addClass("flex")
      console.log("entraxl")
    });
    $(".mega-menu").mouseleave(function(){
      $(this).hide()
      console.log("sale")
    });
  }
}
// Add a listener for when the window resizes
window.addEventListener('resize', checkMediaQuery);
checkMediaQuery() 

