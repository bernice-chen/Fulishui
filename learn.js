window.addEventListener("load",function(){
    var sectionBtn = document.getElementById("sectionBtn");
    console.log(sectionBtn);
    var btns = sectionBtn.getElementsByClassName("btn");
    for(var i = 0; i < btns.length; i++){
        console.log(btns[i]);
        btns[i].addEventListener("click", function(){
            var current = sectionBtn.getElementsByClassName("active");
            console.log("current", current[0].className);
            current[0].className = current[0].className.replace("active", "");
            console.log("this",this);
            this.className += " active";
        });
    }
    var selectionCou = document.getElementById("selectionCou");
    console.log(selectionCou);
    var btncous = selectionCou.getElementsByClassName("btn");
    for(var i = 0; i < btncous.length; i++){
        console.log(btncous[i]);
        btncous[i].addEventListener("click", function(){
            var current = selectionCou.getElementsByClassName("active");
            console.log("current", current[0].className);
            current[0].className = current[0].className.replace("active", "");
            console.log("this",this);
            this.className += " active";
        });
    }
}) 