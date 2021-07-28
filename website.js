/* FAQ Accordion dropdown operation */
const questionsContainer = document.getElementsByClassName("contentBx");
console.log(questionsContainer);
for (i = 0; i < questionsContainer.length; i++) {
    questionsContainer[i].addEventListener("click", function () {
        this.classList.toggle("active");
    })
}

/* Nav Bar operation*/
const menu = document.querySelector("nav ul");
const menuButton = document.querySelector(".menu-btn");
const cancelButton = document.querySelector(".cancel-btn");

menuButton.onclick = () => {
    menu.classList.add("active");
    console.log(menu);
}

cancelButton.onclick = () => {
    menu.classList.remove("active");
    console.log(menu);
}
// Nav Bar operation ends here

