/* Trying to make a dinamic webpage */

function index(){
    var titulo = document.getElementById("titulo")
     var p = document.getElementById("p");
     titulo.innerHTML="Welcome!!!";
     p.innerHTML="This is my first web site in The SoloLearn...<br>You can navagation in menus...";
  
 }
 function home(){
     var titulo = document.getElementById("titulo")
     var p = document.getElementById("p");
     titulo.innerHTML="Hii... ";
     p.innerHTML="Nice to meet you.. :D";
 }
 
 function projects(){
     var titulo = document.getElementById("titulo")
     var p = document.getElementById("p");
     titulo.innerHTML="In Progress... ";
     p.innerHTML="I see you baby :D";
 }
 
 function about(){
     var titulo = document.getElementById("titulo")
     var p = document.getElementById("p");
     titulo.innerHTML="About Me ... ";
     p.innerHTML="Hello, I'm Johnson, 35 years old, I'm originally from Colombia (Hola mundo a todos los hispanos leyendo esto) This Web site is the simple example about Home pages, Menus and Context design <br><br> Good bye there :D";
 }




 
/* Slideshow  */
 let slideIndex = [1,1];
 let slideId = ["mySlides1", "mySlides2"]
 showSlides(1, 0);
 showSlides(1, 1);
 
 function plusSlides(n, no) {
   showSlides(slideIndex[no] += n, no);
 }
 
 function showSlides(n, no) {
   let i;
   let x = document.getElementsByClassName(slideId[no]);
   if (n > x.length) {slideIndex[no] = 1}    
   if (n < 1) {slideIndex[no] = x.length}
   for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
   }
   x[slideIndex[no]-1].style.display = "block";  
 }




// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}







/* Only god knows XD */
 $(function(){
    
    $("#item").click(function() {
        $("#submenu").slideToggle(500);
    });

    $("#menuBtn").mouseover(function(){
        var toggle = false;
        if(toggle == false){
            $('#menu').css("left", "0");
            toggle = true;
            $("#menu").trigger("mouseover");
        }
        else{
            var negWidth = document.documentElement.clientWidth * -1;
            $("#menu").css("left", negWidth);
            toggle = false;
        }
    });
    $("#menu").mouseout(function(){
            var negWidth = document.documentElement.clientWidth * -1;
            $("#menu").css("left", negWidth);
            toggle = false;
    });
    var documentHeight = document.documentElement.clientHeight;
    var titlebarHeight = $(".titleBar").height();
    var mainHeight = documentHeight - titlebarHeight;
    $("#main").css("height", mainHeight);
    $("#main").css("top", titlebarHeight);
    
   $("#menu").mouseover(function(){
            $("#menu").css("left", "0");
            toggle = true;
            });
            var typeOfDevice = navigator.userAgent;
            if(typeOfDevice.toLowerCase().search("mobile") > 0){
               $("#main").click(function(){
            var negWidth = document.documentElement.clientWidth * -1;
            $("#menu").css("left", negWidth);
            toggle = false;
               });
            }
            else{
                
            }
 });