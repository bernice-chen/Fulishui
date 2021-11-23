
window.addEventListener("load",function(){
    //--- vansbtn ---//
    document.getElementById("vansbtn").onclick = function(){
        document.getElementById("bus-info-2").style.display = 'block';
        document.getElementById("bus-info-1").style.display = 'none';
        document.getElementById("bus-info-3").style.display = 'none';
    }
    
    //--- rehabusbtn ---//
    document.getElementById("rehabusbtn").onclick = function(){
        document.getElementById("bus-info-1").style.display = 'block';
        document.getElementById("bus-info-2").style.display = 'none';
        document.getElementById("bus-info-3").style.display = 'none';
    }
    
    //--- taxibtn ---//
    document.getElementById("taxibtn").onclick = function(){
        document.getElementById("bus-info-3").style.display = 'block';
        document.getElementById("bus-info-1").style.display = 'none';
        document.getElementById("bus-info-2").style.display = 'none';
    }
})