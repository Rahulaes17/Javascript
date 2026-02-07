const textBox = document.querySelector("#textBox");
const count = document.querySelector("#count");

textBox.addEventListener("input", () => {
    count.textContent = textBox.value.length;
});
