const menuButton = document.getElementById('menu-button');
const navigationBar = document.getElementById('navbar');
const navigationBarAnchors = navigationBar.getElementsByTagName('a');

menuButton.addEventListener('click', onMenuClick);

for (let anchor of navigationBarAnchors) {
    anchor.addEventListener('click', onMenuClick);
}

function onMenuClick () {
    if (window.getComputedStyle(navigationBar).display === 'none') {
        navigationBar.style.display = 'flex';
    } else {
        navigationBar.style.display = 'none';
    }
}