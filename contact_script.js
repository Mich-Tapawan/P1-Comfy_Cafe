document.addEventListener("DOMContentLoaded", function () {
    // Top nav
    var navbar = document.getElementById("fixedNav");
    var navName = document.getElementById("nav-name");
    var navLogo = document.getElementById("logo");
    var navLinks = document.getElementById("page-links");
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#3B2929";
        navbar.style.height = "80px";
        navLogo.style.width = "53px";
        navLogo.style.height = "53px";
        navLogo.style.left = "50px";
        navName.style.fontSize = "30px";
        navName.style.left = "40px";
        navLinks.style.bottom = "5px";
        navLinks.style.float = "null";
      } 
      else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.height = "100px";
        navLogo.style.width = "63px";
        navLogo.style.height = "63px";
        navLogo.style.left = "0px";
        navName.style.fontSize = "35px";
        navName.style.left = "0px";
        navLinks.style.bottom = "0px";
      }
    });

    //Form submit
    const express = require('express');
    const port = process.env.PORT || 5000; // Port number

    const app = express();

    //API Middlewares
    app.use(express.json()); // Form data accept in json format
    
    app.use(express.urlencoded()); // html form data decoder

    app.use(express.static('public'));

    //API Routes
    app.get('/form',(req, res)=>{
      res.sendFile(__dirname + '/Users/Mich/Desktop/Mik/Coding/Portfolio/P1-Comfy_Cafe/contact.html');
    })

    app.post('/formPost', (req, res)=>{
      console.log(req.body);
    })

    app.listen(port, ()=>{
      console.log(`Server started at https://localhost:${port}`)
    })
  });