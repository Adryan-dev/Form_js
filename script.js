//INPUTS
const username = document.querySelectorAll("input")[0]; //select username input
const email = document.querySelectorAll("input")[1]; //Select email input
const pass = document.querySelectorAll("input")[2]; //Select password input
const passConfirm = document.querySelectorAll("input")[3]; //Select password confirm input
//BUTTON
const btn = document.querySelector("#btn"); //Select btn 
//SUCCESS AND ERROR ICONS
const iconError = document.querySelectorAll(".ierror"); //Select icon error
const iconSuccess = document.querySelectorAll(".icheck"); //Select icon success 

// SUCCESS AND ERROR TEXT'S
const elError = document.querySelectorAll(".error"); //Select error msg 
const elSuccess = document.querySelectorAll(".success"); //Select succcess msg

//VERIFY EMAIL IF HAVE @gmail. 
var reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;  

btn.addEventListener("click", function (a) {
  a.preventDefault(); // PREVENT ACTION DEFAULT OF BUTTON

  //Verify username input if the value is undefined etc...
  if (username.value == undefined || username.value == "") {
    username.style.border = "2px solid red";
    iconSuccess[0].style.display = 'none';
    iconError[0].style.display = "inline-block";
    elError[0].innerText = "Please enter a valid username!";
    elError[0].style.display = 'block';
  } else {
    username.style.border = "2px solid green";
    iconError[0].style.display = "none";
    iconSuccess[0].style.display = "inline-block";
    elError[0].style.display = "none";
  }

  //Verifiy if email input the value less than 6 or undefined
  if (reg.test(email.value) == false || email.value.length < 6 || (email.value == undefined || email.value == "")) {
    email.style.border = "2px solid red";
    iconSuccess[1].style.display = 'none';
    iconError[1].style.display = "inline-block";
    elError[1].innerText = "Please enter a valid email!";
    elError[1].style.display = 'block';
    
  } else {
    email.style.border = "2px solid green";
    elError[1].style.display = "none";
    iconError[1].style.display = "none";
    iconSuccess[1].style.display = "inline-block";
  }

  // Verifiy password input if have a digit
  if(pass.value === undefined ||  pass.value === ""){
    pass.style.border = '2px solid red'; 
    iconSuccess[2].style.display = 'none';
    iconError[2].style.display = 'inline-block';
    elError[2].innerText = "Please enter a valid password!";
    elError[2].style.display = 'inline-block';
  }else {
    pass.style.border = '2px solid green';
    iconSuccess[2].style.display = 'inline-block';
    iconError[2].style.display = 'none';
    elError[2].style.display = 'none';
  }

  //Verifiy password confirm input if is diferent than password input
  if(passConfirm.value != pass.value || passConfirm.value == undefined || passConfirm.value === ''){
    passConfirm.style.border = '2px solid red'; 
    iconSuccess[3].style.display = 'none';
    iconError[3].style.display = 'inline-block';
    elError[3].innerText = "Please enter a equal password!";
    elError[3].style.display = 'inline-block';
  }else {
    passConfirm.style.border = '2px solid green';
    iconSuccess[3].style.display = 'inline-block';
    iconError[3].style.display = 'none';
    elError[3].style.display = 'none';
  }



  /*

    if(cpf.value.length < 11){
     cpf.style.border = "2px solid red";
     elError[3].innerText = "Please enter a valid cpf";
     elError[3].style.display = 'block';
     iconError[3].style.display = 'inline-block';
     iconSuccess[3].style.display = 'none';
  }else if(cpf.value.length == 11 ){
    cpf.style.border = "2px solid green";
    elError[3].style.display = "none";
    iconError[3].style.display = "none";
    iconSuccess[3].style.display = "inline-block";
  }
  */


});
 