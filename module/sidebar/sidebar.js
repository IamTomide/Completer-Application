const closeMenu = document.getElementById("closeicon");
const menuLabels = document.querySelectorAll(".menulabel");
console.log(menuLabels);

closeMenu.addEventListener("click", () => {
    menuLabels.forEach(label => {
        label.classList.add("hide");
    });
    console.log(menuLabels);
    console.log("Clicked!");
})