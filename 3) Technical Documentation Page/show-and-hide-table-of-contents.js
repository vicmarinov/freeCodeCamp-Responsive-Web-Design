function showTableOfContents () {
    let showTableOfContentsButton = document.getElementById("show-table-of-contents");
    let hideTableOfContentsButton = document.getElementById("hide-table-of-contents");
    let tableOfContents = document.getElementById("table-of-contents");

    showTableOfContentsButton.style.display = "none";
    hideTableOfContentsButton.style.display = "unset";
    tableOfContents.style.display = "unset";
}

function hideTableOfContents () {
    let showTableOfContentsButton = document.getElementById("show-table-of-contents");
    let hideTableOfContentsButton = document.getElementById("hide-table-of-contents");
    let tableOfContents = document.getElementById("table-of-contents");

    showTableOfContentsButton.style.display = "unset";
    hideTableOfContentsButton.style.display = "none";
    tableOfContents.style.display = "none";
}