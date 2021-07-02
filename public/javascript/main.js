// page-Transition
$(function () {


    "use strict";

    var main  = $(".main"),
        about = $(".aboutSection");

    $(".about").click(function () {

        main.animate({
            'height': '0',
            'top': '50vh',
            'padding': '0'
        }, 300)
        .animate({
            'width': '2px',
            'left': '50%'
        }, 900)
        .fadeOut(300, function () {
            about.fadeIn(300);
            about.animate({
                'width': '100%',
                'left': '0'
            }, 900);
            about.animate({
                'min-height': '100vh',
                'top': '0',
                'padding-top': '50px',
                'padding-bottom': '50px'
            }, 300);
        });


    });

    $(".home").click(function () {

        about.animate({
            'min-height': '0',
            'height': '0',
            'top': '50vh',
            'padding': '0'
        }, 300)
        .animate({
            'width': '2px',
            'left': '50%'
        }, 900)
        .fadeOut(300, function () {
            main.fadeIn(300)
            .animate({
                'width': '100%',
                'left': '0'
            }, 900)
            .animate({
                'height': '100vh',
                'top': '0',
                'padding-top': '100px',
                'padding-bottom': '100px'
            }, 300);
        });
    });
});


// SKILLS

$(document).ready(function() {
  var entries = [
    {
      label: "python"

    },
    {
      label: "bootstrap"

    },
    {
      label: "C"

    },
    {
      label: "C++"

    },
    {
      label: "HTML5"

    },
    {
      label: "CSS3"

    },
    {
      label: "javascript"

    },
    {
      label: "jquery"

    },
    {
      label: "nodejs"

    },
    {
      label: "express"

    },
    {
      label: "SQL"

    },
    {
        label: "noSQL"

      }

  ];

  var settings = {
    entries: entries,
    width: 400,
    height: 300,
    radius: "65%",
    radiusMin: 35,
    bgDraw: false,
    opacityOver: 1.0,
    opacityOut: 0.05,
    opacitySpeed: 6,
    fov: 150,
    speed: 1,
    fontFamily: "Fira Sans Condensed",
    fontSize: "15",
    fontColor: "#fff",
    fontWeight: "normal", //bold
    fontStyle: "normal", //italic
    fontStretch: "expanded", //wider, narrower, ultra-condensed, extra-condensed, condensed, semi-condensed, semi-expanded, expanded, extra-expanded, ultra-expanded
    fontToUpperCase: true
  };

  //var svg3DTagCloud = new SVG3DTagCloud( document.getElementById( 'holder'  ), settings );
  $("#tag-cloud").svg3DTagCloud(settings);
  // $("#tag-cloud2").svg3DTagCloud(settings);
});



// contactme

function addClass() {
  document.body.classList.add("sent");
}





const contactform = document.querySelector(".letter");
let name = document.getElementById("name");
let email = document.getElementById("email");
let message = document.getElementById("message");

contactform.addEventListener("submit", (e)=>{
  e.preventDefault();
  let formdata={
    name: name.value,
    email: email.value,
    message: message.value
  }

  let xhr = new XMLHttpRequest();
  xhr.open("POST","/");
  xhr.setRequestHeader("content-type", "application/json");
  xhr.onload = function(){
    console.log(xhr.responseText);
    if(xhr.responseText == "success"){
      sendLetter.addEventListener("click", addClass());
    }
    else{
      alert("something went wrong");
    }

  }
      xhr.send(JSON.stringify(formdata));
});
