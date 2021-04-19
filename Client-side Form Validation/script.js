const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const passwordConfirmation = document.getElementById('passwordConfirmation');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs(){

    // get the values from the inputs

    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue =password.value.trim();
    const passwordConfirmationValue = passwordConfirmation.value.trim();

    if(usernameValue === ''){
        //show error message
        //add error class
        setErrorFor(username, 'Username cannnot be blank');
    } else{
        //add success class 
        setSuccessFor(username);
    }


    if(emailValue === ''){
        setErrorFor(email, 'Email cannnot be blank');
    } else if(!isEmail(emailValue)){
       setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }

    if(passwordValue === ''){
        setErrorFor(password, 'Password cannnot be blank');
    //} else if(!isPassword(passwordValue)){
    //setErrorFor(password, 'Password is not valid')
        //should contain at least one digit
        //should contain at least one lower case
        //should contain at least one upper case
        //should contain at least 8 from the mentioned characters
    } else {
        setSuccessFor(password);
    }
   
    if(passwordConfirmationValue === ''){
        setErrorFor(passwordConfirmation, 'Confirm Password cannnot be blank');
    } else if (passwordConfirmationValue !== passwordValue){
    setErrorFor(passwordConfirmation, "Passwords do not match")
    } else{
        setSuccessFor(passwordConfirmation);
        document.body.innerHTML= "Thank You"
    
    }

    //create a success message that will check all the successfor are showing and gives off a message 
}





function setErrorFor(input, message){
    const formControl = input.parentElement; //.form control
    const small = formControl.querySelector('small');

    //add error message inside small
    small.innerText = message;
    
    //add error class
    formControl.className = 'form-control error';

}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    

}

function isEmail(email){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//function isPassword(password){
  // return /"^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$"/.test(password)
//}