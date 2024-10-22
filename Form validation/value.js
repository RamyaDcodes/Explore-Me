// select sbut,name,email,password,message,input-field,form
var subbut = document.getElementById("submit");
var fname = document.getElementById("name");
var femail = document.getElementById("email");
var fpassword = document.getElementById("password");
var fmess = document.getElementById("mess");
var fform = document.getElementById("form");

fform.addEventListener('submit', e => {
    e.preventDefault(); 

    // Check if all inputs are valid
    if (valid_input()) {
        alert("You have successfully submitted the form!"); 
        fform.reset(); 
        removesuccess();
    }
});

var seterror = (element, message) => {
    var inputfield = element.parentElement;
    var errordis = inputfield.querySelector('.error');
    errordis.innerText = message;

    inputfield.classList.add('error');
    inputfield.classList.remove('success');
};

var setsuccess = element => {
    var inputfield = element.parentElement;
    var errordis = inputfield.querySelector('.error');
    errordis.innerText = '';

    inputfield.classList.add('success');
    inputfield.classList.remove('error');
};

var isvalidemail = email => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(String(email).toLowerCase());
};

var valid_input = () => {
    var name_value = fname.value.trim();
    var email_value = femail.value.trim();
    var password_value = fpassword.value.trim();
    var message_value = fmess.value.trim();
    
    // Initialize a valid flag to true
    var valid = true;

    if (name_value === '') {
        seterror(fname, 'Name field is required');
        valid = false; 
    } else {
        setsuccess(fname);
    }

    if (email_value === '') {
        seterror(femail, 'Email field is required');
        valid = false;
    } else if (!isvalidemail(email_value)) {
        seterror(femail, "Provide a valid email");
        valid = false;
    } else {
        setsuccess(femail);
    }

    if (password_value === '') {
        seterror(fpassword, 'Password field is required');
        valid = false;
    } else if (password_value.length < 8) {
        seterror(fpassword, 'Password must be at least 8 characters');
        valid = false;
    } else {
        setsuccess(fpassword);
    }

    if (message_value === '') {
        seterror(fmess, 'Message field is required');
        valid = false;
    } else {
        setsuccess(fmess);
    }

    return valid; 
};

var removesuccess = () => {
    var infield = document.querySelectorAll('.input-field');
    infield.forEach(field => {
        field.classList.remove('success');
    });
};