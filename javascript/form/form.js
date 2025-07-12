function display(event){
    event.preventDefault();
     firstname=document.getElementById("fname").value;
     lastname=document.getElementById("lname").value;
     password=document.getElementById("pass").value;
    document.getElementById("f").innerText=firstname;
    document.getElementById("l").innerText=lastname;
    document.getElementById("p").innerText=password;
}