function formValid() {

    // declarations
    const message = document.getElementById('message');
    const successMessage = document.getElementById('success');
    const fullName = document.getElementById('name').value;
    const mail = document.getElementById('email').value;
    const phone = document.getElementById('phone');
    const pass1 = document.getElementById('password1').value;
    const pass2 = document.getElementById('password2').value;
    const head = document.getElementById('head');
    const nameSection = document.getElementsByClassName('name-section');
    message.style.display = "none";
    successMessage.style.display = "none";
    var exp= /^[0-9]{10}$/;
    document.body.scrollTop=0;
    document.documentElement.scrollTop=0;
// conditions
    if (fullName.length == 0 ) {
      message.innerText = "Enter your Full name";
      message.style.display = "block";
      return false;
    }
    else if (
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) == false
    ) {
      message.innerText = "Enter correct email id";
      message.style.display = "block";
      return false;
    }
    else if(!phone.value.match(exp)){
        message.innerText = "Enter valid phone number";
        message.style.display = "block";
        return false;
    }
    else if (pass1.length < 8) {
      message.innerText = "Password length must be greater than 8";
      message.style.display = "block";
      return false;
    }
    else if(pass2!=pass1){
        message.innerText = "Passwords don't match";
      message.style.display = "block";
        return false;
    }
else {
      successMessage.innerText = "You have successfully created an account";
      successMessage.style.display = "block";
      alert("Success");
      head.innerText=" Login Now !!!";
      nameSection.display ="none";
      window.open("login.html");
      return false;
    }
  }
  function loginFormValid(){
    const message = document.getElementById('message');
    const mail = document.getElementById('email').value;
    const pass1 = document.getElementById('password').value;
    if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) == false
      ) {
        message.innerText = "Enter correct email id";
        message.style.display = "block";
        return false;
      }
    else if (pass1.length < 8) {
        message.innerText = "Password incorrect";
        message.style.display = "block";
        return false;
      }
      else{
        return false;
      }
  }