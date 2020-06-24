var input = document.querySelector('input');
var command = document.querySelector(".command");

  $("section").hide();
  $("#home").show();
  
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      if (input.value !="home" || input.value!="skills" || input.value!="about" ||input.value!="help" || input.value!="certificates"){
        $("section").hide();
        $('section[id="' + "error" + '"]').show();
        
      }
   if (input.value == "home"){
    $("section").hide();
       var destination = input.value;
       console.log("home");
      $('section[id="' + destination + '"]').show();
      $("input").val('');
      
   }
   if (input.value == "about"){
    $("section").hide();
    var destination = input.value;
    console.log("about");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 if (input.value == "skills"){
    $("section").hide();
    var destination = input.value;
    console.log("skills");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 if (input.value == "certificates"){
    $("section").hide();
    var destination = input.value;
    console.log("certificates");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 if (input.value == "help"){
    $("section").hide();
     var destination = input.value;
    console.log("help");
    $('section[id="' + destination + '"]').show();
    $("input").val('');
 }
 
  }
  
});