function show(){
    if(document.getElementById("menu").style.display == "" || document.getElementById("menu").style.display=="none"){
        document.getElementById("menu").style.display="block";
        document.getElementById("bg-menu").style.display="block";
    }
    else{
        document.getElementById("menu").style.display="none"
        document.getElementById("bg-menu").style.display="none";
    }
}
function show_drop(){
    if(document.getElementById("drop").style.display == "" || document.getElementById("drop").style.display=="none"){
        document.getElementById("drop").style.display="block"
    }
    else{
        document.getElementById("drop").style.display="none"
    }
}