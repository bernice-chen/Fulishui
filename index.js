//--- banner slider ---//
let index = 0;
window.addEventListener("load",function(){
    
    //--- rightbtn.onclick ---//
    document.getElementById("right-btn").onclick = function(){
        index++;
        document.getElementById("left-btn").disabled = false; 
        if(index == 2){
            document.getElementById("right-btn").disabled = true;
        }
        let wrapper = document.getElementsByClassName("wrap")[0];
        wrapper.style.left = -100 * index + "%";
    }

    //--- leftbtn.onclick ---//
    document.getElementById("left-btn").onclick = function(){
        index--;
        document.getElementById("right-btn").disabled = false;//可點按
        if(index == 0){
            document.getElementById("left-btn").disabled = true;
        }
        let wrapper = document.getElementsByClassName("wrap")[0];
        wrapper.style.left = -100 * index + "%";
    }
})
//--- course photo ---//
window.onload = function(){
    let cmodal = document.getElementById("classModal");
    let cbtn = document.getElementById("class-btn");
    let cspan = document.getElementsByClassName("class-close")[0];
    cbtn.onclick = function(){
        cmodal.style.display = "block";
    }
    cspan.onclick = function(){
        cmodal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == cmodal){
            cmodal.style.display = "none";
        }
    }

    //--- physical photo ---//
    var pmodal = document.getElementById("physicalModal");
    var pbtn = document.getElementById("physical-btn");
    var pspan = document.getElementsByClassName("physical-close")[0];
    pbtn.onclick = function(){
        pmodal.style.display = "block";
    }
    pspan.onclick = function(){
        pmodal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == pmodal){
            pmodal.style.display = "none";
        }
    }

    //--- visit photo ---//
    var vmodal = document.getElementById("visitModal");
    var vbtn = document.getElementById("visit-btn");
    var vspan = document.getElementsByClassName("visit-close")[0];
    vbtn.onclick = function(){
        vmodal.style.display = "block";
    }
    vspan.onclick = function(){
        vmodal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == vmodal){
            vmodal.style.display = "none";
        }
    }

    //--- ask photo ---//
    let amodal = document.getElementById("askModal");
    let abtn = document.getElementById("ask-btn");
    let aspan = document.getElementsByClassName("ask-close")[0];
    abtn.onclick = function(){
        amodal.style.display = "block";
    }
    aspan.onclick = function(){
        amodal.style.display = "none";
    }
    window.onclick = function(event){
        if(event.target == amodal){
            amodal.style.display = "none";
        }
    }
}
