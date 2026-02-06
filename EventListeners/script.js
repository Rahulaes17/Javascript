const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', () => {
    h1.style.backgroundColor = "black";
    h1.style.color = "bisque";
})
h1.addEventListener('mouseleave', () =>{
    h1.style.backgroundColor = "bisque";
    h1.style.color = "black";
})


const p = document.querySelector('p');
p.addEventListener('mouseenter', () => {
    p.style.fontSize = "24px";
})

p.addEventListener('mouseleave', () => {
    p.style.fontSize = "18px";
});