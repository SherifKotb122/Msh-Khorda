var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

let requestURL = "../PreviewPage/json.json";
let request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {

let carinfos = request.response;

let inputid = localStorage.getItem("carId");

var carP;
for(let i=0; i<carinfos.length; i++){
  if(inputid == carinfos[i].id){
     carP = carinfos[i];
    console.log(carinfos[i]);
  }
}
document.getElementById(`carnm`).innerHTML = carP.name;

document.getElementById(`td1`).innerHTML = carP.name;
document.getElementById(`td2`).innerHTML = carP.year;
document.getElementById(`td3`).innerHTML = carP.country;
document.getElementById(`td4`).innerHTML = carP.price;
document.getElementById(`td5`).innerHTML = carP.body;
document.getElementById(`td6`).innerHTML = carP.driveSystem;
document.getElementById(`td7`).innerHTML = carP.topspeed;
document.getElementById(`td8`).innerHTML = carP.fuel;
document.getElementById(`td9`).innerHTML = carP.Cylinders;
document.getElementById(`td10`).innerHTML = carP.Max_Power;
document.getElementById(`td11`).innerHTML = carP.transmission;
document.getElementById(`td12`).innerHTML = carP.shape;
document.getElementById(`td13`).innerHTML = carP.seats;

document.getElementById(`img1`).src = carP.img[0];
document.getElementById(`img11`).src = carP.img[0];

document.getElementById(`img2`).src = carP.img[1];
document.getElementById(`img22`).src = carP.img[1];

document.getElementById(`img3`).src = carP.img[2];
document.getElementById(`img33`).src = carP.img[2];

document.getElementById(`img4`).src = carP.img[3];
document.getElementById(`img44`).src = carP.img[3];

// let index = carinfos.findIndex(x => x.id === inputid);

// document.getElementById(`carnm`).innerHTML = carinfos[index].name;

// document.getElementById(`td1`).innerHTML = carinfos[index].name;
// document.getElementById(`td2`).innerHTML = carinfos[index].year;
// document.getElementById(`td3`).innerHTML = carinfos[index].country;
// document.getElementById(`td4`).innerHTML = carinfos[index].price;
// document.getElementById(`td5`).innerHTML = carinfos[index].body;
// document.getElementById(`td6`).innerHTML = carinfos[index].driveSystem;
// document.getElementById(`td7`).innerHTML = carinfos[index].topspeed;
// document.getElementById(`td8`).innerHTML = carinfos[index].fuel;
// document.getElementById(`td9`).innerHTML = carinfos[index].Cylinders;
// document.getElementById(`td10`).innerHTML = carinfos[index].Max_Power;
// document.getElementById(`td11`).innerHTML = carinfos[index].transmission;
// document.getElementById(`td12`).innerHTML = carinfos[index].shape;
// document.getElementById(`td13`).innerHTML = carinfos[index].seats;

// document.getElementById(`img1`).src = carinfos[index].img[0];
// document.getElementById(`img11`).src = carinfos[index].img[0];

// document.getElementById(`img2`).src = carinfos[index].img[1];
// document.getElementById(`img22`).src = carinfos[index].img[1];

// document.getElementById(`img3`).src = carinfos[index].img[2];
// document.getElementById(`img33`).src = carinfos[index].img[2];

// document.getElementById(`img4`).src = carinfos[index].img[3];
// document.getElementById(`img44`).src = carinfos[index].img[3];

/*document.getElementById(`img5`).src = carinfos[index].img[4];
document.getElementById(`img55`).src = carinfos[index].img[4];

document.getElementById(`img6`).src = carinfos[index].img[5];
document.getElementById(`img66`).src = carinfos[index].img[5];*/

}








    




    

   

