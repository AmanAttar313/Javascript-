function display(){
    var firstname=document.getElementById("fname").value;
    var lastname=document.getElementById("lname").value;
    var password=document.getElementById("pass").Value;
    var radio_b=document.getElementsByName("one");
    document.getElementById("fist").innerText=firstname;
    document.getElementById("second").innerText=lastname;
    document.getElementById("p").innerText=password;
    document.getElementById("rd").innerText=radio_b;
}