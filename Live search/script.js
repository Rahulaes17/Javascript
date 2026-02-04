const names = [
    "Rahul",
    "Rohit",
    "Ramesh",
    "Suresh",
    "Pranav",
    "Amit",
    "Karan",
    "Sumit",
    "Vikram",
    "Arjun",
    "Manish",
    "Sanjay"
];

const searchBox = document.getElementById("searchBox");
const nameList = document.getElementById("nameList");

// RENDER LIST
function renderList(arr, query = "") {
    nameList.innerHTML = "";

    if (arr.length === 0) {
        nameList.innerHTML = `<li class="no-results">No results found</li>`;
        return;
    }

    arr.forEach(name => {
        const li = document.createElement("li");

        // highlight matched text
        if (query) {
            const regex = new RegExp(query, "gi");
            li.innerHTML = name.replace(regex, match => `<span class="highlight">${match}</span>`);
        } else {
            li.textContent = name;
        }

        nameList.appendChild(li);
    });
}

// FILTER LIST
function filterNames() {
    const text = searchBox.value.trim().toLowerCase();

    const filtered = names.filter(n =>
        n.toLowerCase().includes(text)
    );

    renderList(filtered, text);
}

searchBox.addEventListener("input", filterNames);

// INITIAL LIST
renderList(names);
