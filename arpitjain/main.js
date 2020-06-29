

  var typed = new Typed('.summary',{
    strings:["I'm a Developer","I Know Node.js","I Know ML","I Know Python","I Know MongoDb","And Many More...."],
    backSpeed: 40,
    typeSpeed: 90,
    loop:true
  });
$(".console").hide();

var normal = $(".normal");
var cmd = $(".cmd");
normal.on("click", function(){
  $(".UI").show();

  $(".console").hide();
});
cmd.on("click", function(){
  $(".console").show();
  
  $(".UI").hide();
});


