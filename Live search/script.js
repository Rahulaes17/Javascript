// Initial data
let names = [
    "Rahul",
    "Rohit",
    "Ramesh",
    "Suresh",
    "Pranav",
    "Amit",
    "Karan",
    "Sumit",
    "Vikram"
];

let searchBox = document.getElementById("searchBox");
let nameList = document.getElementById("nameList");

// Function to show names
function renderList(arr) {
    nameList.innerHTML = "";

    if (arr.length === 0) {
        nameList.innerHTML = `<li class="no-results">No results found</li>`;
        return;
    }

    arr.forEach(name => {
        let li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

// Filter function
function filterNames() {
    let text = searchBox.value.toLowerCase();

    let filtered = names.filter(n =>
        n.toLowerCase().includes(text)
    );

    renderList(filtered);
}

// Event: Live typing
searchBox.addEventListener("input", filterNames);

// Show full list initially
renderList(names);
