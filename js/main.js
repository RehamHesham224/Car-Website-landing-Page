//jQuery
$(function () {
     //change nav color on scroll
$(document).scroll(function () {
  var $nav = $(".navbar-fixed-top");
  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
});
//car item
$('.car-item').click(function () {
  $(".img-src").attr("src",$(this).data('img'));
  console.log($(this).data('img'));
});
//add class active and remove from siblings
// $('#nav #main-nav li').on("click",' a',function(){//
//   $(this).addClass('active').parent('li').siblings().find('a').removeClass('active');
//   $(this).style("color","#007bff");
// })
});

window.onload = function() {
  //hide spinner
  $('.spinner').delay(2000).fadeOut('slow');
}




//bootstrap
$('body').scrollspy({ target: '#main-nav' });
  
      // Smooth Scrolling
      $("#main-nav a").on('click', function (event) {
        if (this.hash !== "") {
          event.preventDefault();
  
          const hash = this.hash;
  
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function () {
  
            window.location.hash = hash;
          });
        }
      });

//modal
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
//shuffle images
//features work shuffle
$('.featured-work ul li').on('click',function(){
$(this).addClass('active').siblings().removeClass('active');
if($(this).data('class')==='All'){
$(".shuffle-images .col-md-6").css('display','block');
}else{
  $(".shuffle-images .col-md-6").css('display','none');
  $($(this).data('class')).parent().parent().css('display','block');

}

});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})

//java script
//creat popup with the image

//creat popup with the image
let ourGallery =document.querySelectorAll(".gallery img");
ourGallery.forEach(img =>{
img.addEventListener("click",(e)=>{
//creat overlay element
let overlay =document.createElement("div");
//add class to overlay div
overlay.className="popup-overlay";
//append to body
document.body.appendChild(overlay);
//creat popup box
let popupBox =document.createElement("div");
//add class to overlay div
popupBox.className="popup-box";
if(img.alt !== null){
    //creat heading
    let imgHeading=document.createElement("h3");
    //creat text for heading
    let imgText =document.createTextNode(img.alt);
    //append text to heading
    imgHeading.appendChild(imgText);
    //append heading to popup box
    popupBox.appendChild(imgHeading);
}
//creat the image
let popupImg =document.createElement("img");
//set image source
popupImg.src=img.src;
//append popupImg img to div popupBox
popupBox.appendChild(popupImg)
//append  popup box to body
document.body.appendChild(popupBox);
//create the close span
let closeButton =document.createElement('span');
//create the close span text
let closeButtonText =document.createTextNode("x");
//append  close span text to span
closeButton.appendChild(closeButtonText);
//add class to close button
closeButton.className="close-button";
//add close button to popup box
popupBox.appendChild(closeButton);
});
});

//close popup
document.addEventListener("click", e =>{
    if(e.target.className === "close-button"){
        //remove the current popup box
        e.target.parentElement.remove();
        document.querySelector(".popup-overlay").remove();
    }
});

