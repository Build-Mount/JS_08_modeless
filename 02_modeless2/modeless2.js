document.getElementById("showTop").addEventListener("click", () => {
    showWindow("topDiv");
});

document.getElementById("closeTop").addEventListener("click", () => {
    closeWindow("topDiv");
});

document.getElementById("showRight").addEventListener("click", () => {
    showWindow("rightDiv");
});

document.getElementById("closeRight").addEventListener("click", () => {
    closeWindow("rightDiv");
});

function showWindow(divId) {
    document.getElementById(divId).style.visibility = "visible";
}

function closeWindow(divId) {
    document.getElementById(divId).style.visibility = "hidden";
}