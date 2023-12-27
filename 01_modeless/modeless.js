document.getElementById("showTop").addEventListener("click", () => {
    showWindow("topDiv");
});

document.getElementById("closeTop").addEventListener("click", () => {
    closeWindow("topDiv");
})

function showWindow(divId) {
    document.getElementById(divId).style.visibility = "visible";
}

function closeWindow(divId) {
    document.getElementById(divId).style.visibility = "hidden";
}