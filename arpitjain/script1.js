var input = document.querySelector('input');
var command = document.querySelector(".command");

  $("section").hide();
  $("#home").show();
  
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      if (input.value.toLowerCase() !="home" || input.value.toLowerCase()!="skills" || input.value.toLowerCase()!="about" ||input.value.toLowerCase()!="help" || input.value.toLowerCase()!="certificates"){
        $("section").hide();
        $('section[id="' + "error" + '"]').show();
        
      }
   if (input.value.toLowerCase() == "home"){
    $("section").hide();
       var destination = input.value.toLowerCase();
       console.log("home");
      $('section[id="' + destination + '"]').show();
      $("input").val('');
      
   }
   if (input.value.toLowerCase() == "about"){
    $("section").hide();
    var destination = input.value.toLowerCase();
    console.log("about");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 if (input.value.toLowerCase() == "skills"){
    $("section").hide();
    var destination = input.value.toLowerCase();
    console.log("skills");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 if (input.value.toLowerCase() == "certificates"){
    $("section").hide();
    var destination = input.value.toLowerCase();
    console.log("certificates");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 if (input.value.toLowerCase() == "help"){
    $("section").hide();
     var destination = input.value.toLowerCase();
    console.log("help");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 
  }
  
});