function display(){
    var HTML =document.getElementById("HTML");
   
    var java=document.getElementById("java");

    var js=document.getElementById("js");
    if(HTML.checked==true){
        document.getElementById("H").innerHTML=HTML.Value;
        
    }else{
        document.getElementById("H")=" ";
        
    }
    if(java.checked==true){
        document.getElementById("j").innerHTML=java.Value;
        

    }else{
        document.getElementById("j")=" ";
    }
    if(js.checked==true){
        document.getElementById("jj").innerHTML=js.Value;
        
    }else{
        document.getElementById("jj")=" ";
    }
}