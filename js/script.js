document.addEventListener("DOMContentLoaded",
function(event){ 
 
  function Togglebar() {
   
    var nav = document.querySelector(".navbar");
    var menuIcon = document.querySelector("#menu");
    var XIcon = document.querySelector("#Xmenu");

      

       if (nav.style.display === "none") {
       nav.style.display = "block ";
       menuIcon.style.display ="none";
       XIcon.style.display ="inline-block";
     } else {
       nav.style.display = "none ";
       XIcon.style.display ="none";
       menuIcon.style.display ="inline-block";
      }
    

     
  }

  function myFunction() {            /* this function shows navbar in full screen, when its closed in small size through togglebar */
    var w = window.innerWidth;
  
    if (w > 800) {
      document.querySelector('.navbar').style.display ='block';
    }
    else {
      document.querySelector('.navbar').style.display='none';
    }
  }

 

  var scrollbtn = document.getElementById("scrolltotop")

  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollbtn.style.display = "block";
    } else {
      scrollbtn.style.display = "none";
    }

    var w = window.innerWidth;
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 && w > 800) {
      // document.querySelector(".Hcontainer").style.height = "70px";
      document.getElementById("logo").style.height= "40px";
      document.getElementById("logo").style.width= "100px";
      document.getElementById("Brand-Name").style.fontSize= "1em";
    } else {
      // document.querySelector(".Hcontainer").style.height = "100px";
      document.getElementById("logo").style.height = "60px";
      document.getElementById("logo").style.width= "140px";
      document.getElementById("Brand-Name").style.fontSize= "1.3em";
    
  }
  }
  
  
 



  document.querySelector("#menu").onclick = Togglebar;
  document.querySelector("#Xmenu").onclick = Togglebar;
  document.querySelector("body").onresize = myFunction;

  document.getElementById("need").selectedIndex = -1;
  
  
}) ;