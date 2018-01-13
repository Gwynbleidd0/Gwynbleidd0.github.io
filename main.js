
$(document).ready(function(){
    $(".button").click(function() {
        $(".textShow").fadeOut(2000,function(){
            $(".textShow").html("Не так ли?")
        }) 
        $(".textShow").fadeIn(2000) 
        $(".textShow").fadeOut(2000,function(){
            $(".textShow").html("Или ты хочешь со мной поспорить?")
        }) 
        $(".textShow").fadeIn(2000) 
        $(".textShow").fadeOut(2000,function(){
            $(".textShow").html("Плохая идея, знаешь ли")
        }) 
        $(".textShow").fadeIn(2000) 
        

    });

});
$(".scroll").click(function(){
    $(".sv").animate({height:"+=400"}, slow)
});