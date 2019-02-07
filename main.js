


window.onscroll = function() {
    
    elevateNavBar()
};

function elevateNavBar() {
    
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     
      document.getElementById("navbar").className = "active";
  } else {
       
      document.getElementById("navbar").className = "";
      
  }
}
