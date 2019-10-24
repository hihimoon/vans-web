
$(document).ready(function(){ // When the DOM is Ready, then bind the click
    $(".presentation").click(function(){
        var a =$(this).index();
        $('.presentation').removeClass('presentation-active');
 $(this).addClass('presentation-active');
    });
});