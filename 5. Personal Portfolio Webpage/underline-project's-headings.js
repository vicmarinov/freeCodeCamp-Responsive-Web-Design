const projects = document.getElementsByClassName('project');

for (const project of projects) {
    project.addEventListener('mouseover', onHover);
    project.addEventListener('mouseout', onMouseout);
}

function onHover (event) {
    const cardHeading = event.currentTarget.getElementsByTagName('h3')[0];
    cardHeading.style.textDecoration = 'underline';
}

function onMouseout (event) {
    const cardHeading = event.currentTarget.getElementsByTagName('h3')[0];
    cardHeading.style.textDecoration = 'none';
}