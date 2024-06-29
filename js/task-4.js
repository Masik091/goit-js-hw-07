"use strict";

document.querySelector('.login-form').addEventListener('submit', function(event){
    event.preventDefault();

    const form = event.target;
    const email = form.elements['email'].value.trim();
    const passwordElement = form.elements['password'];
    const password = passwordElement.value.trim();

    if(!email || !password) {
        alert('All form fields must be filled in');
        return;
    }
    const formInfo = {
        email: email,
        password: password
    };
    console.log(formInfo);
    form.reset();
})
