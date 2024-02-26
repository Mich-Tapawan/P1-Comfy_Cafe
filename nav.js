document.addEventListener("DOMContentLoaded", function () {
    // Top nav
    var navbar = document.getElementById("fixedNav");
    var navName = document.getElementById("nav-name");
    var nameStyle = getComputedStyle(navName);
    var navLogo = document.getElementById("logo");
    var logoStyle = getComputedStyle(navLogo);
    var navLinks = document.getElementById("page-links");
    var linkStyle = getComputedStyle(navLinks);
  
    window.addEventListener("scroll", function () {
      if (window.scrollY > 0) {
        navbar.style.backgroundColor = "#3B2929";
        navbar.style.height = "80px";
        navLogo.style.width = logoStyle.width - 10;
        navLogo.style.height = logoStyle.height - 10;;
        navName.style.fontSize = nameStyle.fontSize - 5;
        navLogo.style.left = '40px';
        navName.style.left = '40px';
        navLogo.style.bottom = '5px';
        navLinks.style.bottom = "5px";
        navLinks.style.transform = 'translateX(-48px)';
        navLinks.style.float = "null";
      } 
      else {
        navbar.style.backgroundColor = "transparent";
        navbar.style.height = "100px";
        navLogo.style.width = logoStyle.width;
        navLogo.style.height = logoStyle.height;
        navName.style.fontSize = nameStyle.fontSize;
        navLinks.style.bottom = "0px";
        navLogo.style.left = '0px';
        navName.style.left = '0px';
        navLinks.style.transform = '0px';
        navLinks.style.transition = '0.3s ease';
      }
    });
});