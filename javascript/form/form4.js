function display(checkbox){
    if(html.checked){
        document.getElementById("H").innerHTML=html.value;
    }else{
        document.getElementById("H").innerHTML="";
    }
    if(css.checked){
        document.getElementById("j").innerHTML=css.value;
    }else{
        document.getElementById("j").innerHTML="";
    }
    if(js.checked){
        document.getElementById("jj").innerHTML=js.value;
    }else{
        document.getElementById("jj").innerHTML="";
    }
}