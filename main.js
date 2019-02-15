

// on window scroll check the nav bar elevation
window.onscroll = function() {
    elevateNavBar()
};

// on window resize, check the nav bar elevation
window.onresize = function() {
    elevateNavBar();
};

function elevateNavBar() {

    var viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    // checks

    // if the viewport is smaller than 700px then the nav bar wont be fixed and wont need to be elevated
    if (viewportWidth < 700){
        document.getElementById("navbar").className = "";
        return;
    }

    // check if scolled down
    if ((document.body.scrollTop < 20 && document.documentElement.scrollTop < 20)) {
        document.getElementById("navbar").className = "";
        return;
    }

    
    document.getElementById("navbar").className = "active";
}
