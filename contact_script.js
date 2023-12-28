document.addEventListener("DOMContentLoaded", function () {
    // Saving input from html form
    document.querySelector('form').onsubmit = function() {
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const message = document.querySelector('#message').value;

        if(name === "" && email === "" && message === ""){
          alert("Error: Missing input!");
        }
        else{
          alert(`Name: ${name}\nEmail: ${email}\nMessage:${message}`)
        }
    }
  });