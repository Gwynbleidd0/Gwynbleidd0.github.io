
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
    var sv1 = true;
    var sv2 = true;
    var sv3 = true;

        $("#b1").click(function(){
            if (sv1 == true) {
                $("#b1").animate({height:'+=10',top:'+=300'}, "slow");
            $("#c1").animate({height:'+=310'}, "slow");
            
            sv1 = false
            }
            else {
                
                $("#c1").animate({height:'-=310'}, "slow");
                $("#b1").animate({height:'-=10',top:'-=300'}, "slow");
                
                sv1 = true
            }
            
    });
    $("#b2").click(function(){
            if (sv2 == true) {
            $("#b2").animate({height:'+=10',top:'+=300'}, "slow");
            $("#c2").animate({height:'+=310'}, "slow");
        
            sv2 = false
            }
            else {
            
            $("#c2").animate({height:'-=310'}, "slow");
            $("#b2").animate({height:'-=10',top:'-=300'}, "slow");
            
            sv2 = true
            }
        
        });
        $("#b3").click(function(){
            if (sv3 == true) {
            $("#b3").animate({height:'+=10',top:'+=300'}, "slow");
            $("#c3").animate({height:'+=310'}, "slow");
        
            sv3 = false
            }
            else {
            
            $("#c3").animate({height:'-=310'}, "slow");
            $("#b3").animate({height:'-=10',top:'-=300'}, "slow");
            
            sv3 = true
            }
        
        });
    for(var i=0;i < 10, i++;){
    $("#i1").attr("src","images/im1.jpg");
    setTimeout(5000);
    $("#i1").attr("src","images/im2.jpg");
    setTimeout(5000);
    $("#i1").attr("src","images/im3.jpg");
    setTimeout(5000);
    }
});
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
      center: new google.maps.LatLng(51.5, -0.2), zoom: 10
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }
