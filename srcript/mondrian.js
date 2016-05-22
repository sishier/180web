$(function(){
    var select_color = null;
    $("li").on("click", function(){
       select_color = $(this).css("background-color"); 
    });
    $(".grid").on("click", function(){
       $(this).css("background-color", select_color); 
    });
});