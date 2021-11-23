//--- ham -> icon ---//
function navFunction(){
    let x = document.getElementById("navLinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

//--- nav -> ul ---//
function ulFunction(){
    let x = document.getElementById("ulLinks");
    if(x.style.display === "block"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}
//--- navbtn ---//
var navLinks = document.getElementById("navLinks");
var navbtns = navLinks.getElementsByClassName("navbtns");
console.log("navLinks");
for(var i = 0; i<navbtns.length; i++){
    navbtns[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active");
        this.className += " active";
    });
}