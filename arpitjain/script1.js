var input = document.querySelector('input');
var command = document.querySelector(".command");

  $("section").hide();
  $("#home").show();
  $(".showcase section").hide();
  $("#aboutme").show();
  $("#Aboutme").on("click",function(){
   $(".showcase section").hide();
   $("#aboutme").show();
  });
  $("#Skill").on("click",function(){
   $(".showcase section").hide();
   $("#skill").show();
  });
  $("#certifications").on("click",function(){
   $(".showcase section").hide();
   $("#Certifications").show();
  });
  $("#projects").on("click",function(){
   $(".showcase section").hide();
   $("#Projects").show();
  });
  $("#academics").on("click",function(){
   $(".showcase section").hide();
   $("#Academics").show();
  });
  $("#hobbies").on("click",function(){
   $(".showcase section").hide();
   $("#Hobbies").show();
  });
  input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
      if (input.value.toLowerCase() !="home" || input.value.toLowerCase()!="skills" || input.value.toLowerCase()!="about" ||input.value.toLowerCase()!="help" || input.value.toLowerCase()!="certificates" || input.value.toLowerCase()!="project" || input.value.toLowerCase()!="academic" || input.value.toLowerCase()!="hobby"){
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
 if (input.value.toLowerCase() == "hobby"){
   $("section").hide();
    var destination = input.value.toLowerCase();
   console.log("hobby");
   $('section[id="' + destination + '"]').show();
   $("input").val('');
}
if (input.value.toLowerCase() == "academic"){
   $("section").hide();
    var destination = input.value.toLowerCase();
   console.log("academic");
   $('section[id="' + destination + '"]').show();
   $("input").val('');
}
if (input.value.toLowerCase() == "project"){
   $("section").hide();
    var destination = input.value.toLowerCase();
   console.log("project");
   $('section[id="' + destination + '"]').show();
   $("input").val('');
}
  }
  
});