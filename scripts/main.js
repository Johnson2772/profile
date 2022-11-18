/* Trying to make a dynamic webpage */

function toggleResponsive() {
  var x = document.getElementById("topNav");
  if (x.className === "nav") {
    x.className += " responsive";
  } else {
    x.className = "nav";
  }
}



/* Changing content */
function openPage(pageName, element) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
}

// Get the element with id="active" and click on it
document.getElementById("active").click();





/* Changing content */

// function index() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "Welcome!!!";
//   p.innerHTML = "This is my first web site in The SoloLearn...<br>You can navagation in menus...";

// }
// function home() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "Hii... ";
//   p.innerHTML = "Nice to meet you.. :D";
// }

// function projects() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "In Progress... ";
//   p.innerHTML = "I see you baby :D";
// }

// function about() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "About Me ... ";
//   p.innerHTML = "Hello, I'm Johnson, 35 years old, I'm originally from Colombia (Hola mundo a todos los hispanos leyendo esto) This Web site is the simple example about Home pages, Menus and Context design <br><br> Good bye there :D";
// }

// function news() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "Today's news are ";
//   p.innerHTML = "bla bla bla";
// }

// function schedule() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "schedule ";
//   p.innerHTML = "Yikiris makiris";
// }

// function contact() {
//   var titulo = document.getElementById("titulo")
//   var p = document.getElementById("p");
//   titulo.innerHTML = "Contact ";
//   p.innerHTML = "ZZZZzzzZZzZzzzZzzZZzzzzzzzZzzZZZzZzzzzzzzzzZZZZZzZZZZzZZzzzZZzzZZZZZ";
// }





// // Set the date we're counting down to
// var countDownDate = new Date("Jan 1, 2023 15:00:00").getTime();

// // Update the count down every 1 second
// var countdownfunction = setInterval(function () {

//   // Get todays date and time
//   var now = new Date().getTime();

//   // Find the distance between now an the count down date
//   var distance = countDownDate - now;

//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//   // Output the result in an element with id="countdown"
//   document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
//     + minutes + "m " + seconds + "s ";

//   // If the countdown is over, write some text 
//   if (distance < 0) {
//     clearInterval(countdownfunction);
//     document.getElementById("countdown").innerHTML = "EXPIRED";
//   }
// }, 1000);





let days = 2; //starting number of days
let hours = 3; // starting number of hours
let minutes = 2; // starting number of minutes
let seconds = 5; // starting number of seconds

// converts all to seconds
let totalSeconds =
  days * 60 * 60 * 24 + hours * 60 * 60 + minutes * 60 + seconds;

//temporary seconds holder
let tempSeconds = totalSeconds;

// calculates number of days, hours, minutes and seconds from a given number of seconds
const convert = (value, inSeconds) => {
  if (value > inSeconds) {
    let x = value % inSeconds;
    tempSeconds = x;
    return (value - x) / inSeconds;
  } else {
    return 0;
  }
};

//sets seconds
const setSeconds = (s) => {
  document.querySelector("#seconds").textContent = s + "s";
};

//sets minutes
const setMinutes = (m) => {
  document.querySelector("#minutes").textContent = m + "m";
};

//sets hours
const setHours = (h) => {
  document.querySelector("#hours").textContent = h + "h";
};

//sets Days
const setDays = (d) => {
  document.querySelector("#days").textContent = d + "d";
};

// Update the count down every 1 second
var x = setInterval(() => {
  //clears countdown when all seconds are counted
  if (totalSeconds <= 0) {
    clearInterval(x);
  }
  setDays(convert(tempSeconds, 24 * 60 * 60));
  setHours(convert(tempSeconds, 60 * 60));
  setMinutes(convert(tempSeconds, 60));
  setSeconds(tempSeconds == 60 ? 59 : tempSeconds);
  totalSeconds--;
  tempSeconds = totalSeconds;
}, 1000);





/* Slideshow  */

let slideIndex = [1, 1];
let slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) { slideIndex[no] = 1 }
  if (n < 1) { slideIndex[no] = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}




/* Automatic Slideshow - change image every 3 seconds */

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) { myIndex = 1 }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 3000);
}