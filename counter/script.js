let count = 0;

// selecting elements
const countValue = document.getElementById("count");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

// event listeners
increaseBtn.addEventListener("click", () => {
    count++;
    countValue.textContent = count;
});

decreaseBtn.addEventListener("click", () => {
    count--;
    countValue.textContent = count;
});

resetBtn.addEventListener("click", () => {
    count = 0;
    countValue.textContent = count;
});
