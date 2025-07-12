const form1= document.querySelector('#userform');
form1.addEventListener('submit',function(event){
    event.preventDefault();
    // alert("form submited");
    // alert(`form submited  ${firstname} and ${lastname}`);
    // console.log(document.forms);
    // console.dir(document.forms['userform'][0].value) // dir gets only one parameter
    // console.log(document.forms['userform'][0].value ,document.forms['userform'][1].value)

    const form= new FormData(form1)
    // console.log(form.get('fname'));
    // console.log(form.get('lname'));

    const user={};
    form.forEach(function(value,key){
        user[key]=value;
    })
    console.log(user)
    
})