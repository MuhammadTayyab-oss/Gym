document.addEventListener("DOMContentLoaded",
function(event){ 
 
  function Togglebar() {
    var icon = document.querySelector("i");
    var nav = document.querySelector(".navbar");

      

       if (nav.style.display === "none") {
       nav.style.display = "block ";
     } else {
       nav.style.display = "none ";
      }
    

     
  }

  function myFunction() {
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
  




  document.querySelector("i").onclick = Togglebar;
  document.querySelector("body").onresize = myFunction;

  document.getElementById("need").selectedIndex = -1;
  
  
}) ;