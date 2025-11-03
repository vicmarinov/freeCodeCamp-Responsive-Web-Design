function showAndHideNavbar () {
    let navbarElement = document.getElementById("nav-bar");
    let navbarDisplayValue = window.getComputedStyle(navbarElement).display;
    
    if (navbarDisplayValue === "none") {
        navbarElement.style.display = "flex";
    } else if (navbarDisplayValue === "flex") {
        navbarElement.style.display = "none";
    }
}