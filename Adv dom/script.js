let para = document.getElementById("para");
let output = document.getElementById("output");

// 1. Toggle Background
function toggleBG(){
    para.classList.toggle("highlight");
}

// 2. Add class
function makeBlue(){
    para.classList.add("blue-text");
}

// 3. Remove class
function removeBlue(){
    para.classList.remove("blue-text");
}

// 4. Set Attribute
function setTooltip(){
    para.setAttribute("title", "This is a tooltip!");
    output.innerText = "Tooltip attribute added!";
}

// 5. Append new line (new element)
function addNewLine(){
    let p = document.createElement("p");
    p.innerText = "This is a new appended line.";
    output.append(p);
}

// 6. Change Text inside the main paragraph
function changeText(){
    para.innerText = "Paragraph text has been changed!";
}
