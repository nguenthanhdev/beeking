let chieu_dai = 768;
let clik = false;
let clik1 = false;
$(document).ready(function(){

  $(".noi-dung").hide();
  $(".noi-dung1").hide();
  // $(".toggle-menu").show();
  // $(".menu").hide();


  $(".toggle-menu").click(function(){
    $(".menu").toggle();/**ẩn hiện */
  });
  
  $(window).resize(function(){
    if($(window).width()<chieu_dai){
      $(".menu").hide();
      $(".toggle-menu").show();

    };
    if($(window).width()>chieu_dai){
      $(".menu").show();
      $(".toggle-menu").hide();


    };
  });

  // $(".control-btn").click(function(){
  //   $(".noi-dung").toggle();
  // });

  $(".control-btn1").click(function(){
    $(".noi-dung1").toggle();
    if(clik == false){
      $(".control-btn1").attr("src","../Assets/Image/ICON_WEBSITE BEE-29.png")
      // $(".control-btn1").prop('title', 'Ẩn');
      clik =true;
    }
    else{
      $(".control-btn1").attr("src","../Assets/Image/ICON_WEBSITE BEE-28.png")

      clik =false;
    }
  });

  $(".control-btn").click(function(){
    $(".noi-dung").toggle();
    if(clik1 == false){
      $(".control-btn").attr("src","../Assets/Image/ICON_WEBSITE BEE-29.png")
      // $(".control-btn").prop('title', 'Ẩn');change title

      clik1 =true;
    }
    else{
      $(".control-btn").attr("src","../Assets/Image/ICON_WEBSITE BEE-28.png")
      clik1 =false;
    }
  });
    
});