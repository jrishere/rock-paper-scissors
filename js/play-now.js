const buttons = document.querySelectorAll(".team-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log("Clicked", button);
        buttons.forEach(btn => btn.classList.remove("selected"));
        button.classList.add("selected");
    });
});