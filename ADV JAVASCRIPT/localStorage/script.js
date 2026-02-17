const form = document.querySelector("form")

form.addEventListener("submit", function(event){
    // event.preventDefault();

    const user = document.getElementById("name").value 
    localStorage.setItem("name", user)

})

const userName = localStorage.getItem('name')
console.log(userName);


const admin = {
    name:"rahul",
    rollNo:51,
    age:20
};

localStorage.setItem("admin", JSON.stringify(admin))

const localAdmin =JSON.parse(localStorage.getItem("admin"))
console.log(localAdmin.age)


if(localStorage.getItem(admin)){
    console.log("Admin is present")
}
