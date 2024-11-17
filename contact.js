

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {draggable: true});
  });





//funciotn to validate form inputs using regex
function validateForm(event){
    //stops form from submitting
    event.preventDefault();


    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('message').value.trim();

    var nameRegex = /^[A-Za-z\s]+$/
    var emailRegex = /^[a-zA-z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    var messageRegex = /^(?!\s*$).+/;

    if (!nameRegex.test(name)){
        alert("Please enter a valid name. Only letters and spaces allowed");
        return false;
    }

    if(!emailRegex.test(email)){
        alert("Please enetr a valid email address");
        return false;
    }

    if(!messageRegex.test(message)){
        alert("Please enter a message");
        return false;
    }

    alert("Form submitted successfully!");

}


// add event listener to form
document.getElementById('contact-form').addEventListener('submit', validateForm);