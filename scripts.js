/* Add your JavaScript to this file */

window.onload = function(){
    var emailFormat = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/
    var email = document.getElementById("email");
    var emailmsg = document.getElementsByClassName("message")[0];
    var submit = document.getElementsByTagName("form")[0];

    submit.addEventListener("click", (e)=>{
        e.preventDefault();

    if (email.value.length == 0 || !(email.value.match(emailFormat))){
        emailmsg.innerHTML = "Please enter a valid email address.";
        email.value ="";
    }else{
        emailmsg.innerHTML = "Thank you! Your email address " + email.value + " has been added to our mailing list";
    }
}
)}


/*window.onload = function () {
  var myform = document.getElementsByTagName("form")[0];

  myform.addEventListener('submit', function (element) {
    console.log('form submitted');
    var validationFailed = false;
    var email = document.querySelector('#email');

    clearErrors();

    if (!isValidEmail(email.value.trim())) {
      validationFailed = true;
      displayErrorMessage(email, "Please enter a valid email address.");
    };

    if (validationFailed) {
      console.log('Please fix issues in Form submission and try again.');
      element.preventDefault();
    }
  });
};


function isEmpty(elementValue) {
  if (elementValue.length == 0) {
    displayErrorMessage(email, "Please enter a valid email address.");
    return true;
  }
  return false;
}

function isValidEmail(emailAddress) {
  return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/.test(emailAddress);
}

function insertAfter(element, newNode) {
  element.parentNode.insertBefore(newNode, this.nextSibling);
}

function clearErrors() {
  var elementsWithErrors = document.querySelectorAll('.error');
  for (var x = 0; x < elementsWithErrors.length; x++) {
    elementsWithErrors[x].setAttribute('class', '');
    elementsWithErrors[x].parentNode.removeChild(elementsWithErrors[x].nextElementSibling);
  }
}

function displayErrorMessage(formField, message) {
  formField.setAttribute('class', 'error');
  var errorMessageText = document.createTextNode(message);
  var errorMessage = document.createElement('span');
  errorMessage.setAttribute('class', 'error-message');
  errorMessage.appendChild(errorMessageText);
  insertAfter(formField, errorMessage);
}*/