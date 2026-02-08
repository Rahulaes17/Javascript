let header = document.querySelector('h1')
console.log(header.innerHTML)


let arr = [10, 23, 53, 12, 6, 74, 23, 3, 1, 6, 85, 30, 32, 90];
console.log("The Array is:", arr);




//MINMAX BY FOR LOOP

// function minmax(arr){
//     let max = arr[0];
//     let min = arr[0];

//     if (arr.length == 0){
//         console.log("Empty Array")
//     }

//     for(let i=0;i<=arr.length-1;i++){
//         if(arr[i]>=max){
//             max= arr[i];
//         }

//         if(arr[i]<=min){
//             min= arr[i];
//         }
//     }

//     console.log("The largest number is:" , max)
//     console.log("The smallest number is:" , min)
// }
// minmax(arr);










//MINMAX BY FOREACH METHOD

function minmax(arr) {
    let max = arr[0];
    let min = arr[0];

    if (arr.length == 0) {
        return null;
    }

    arr.forEach(element => {
        if (element > max) {
            max = element;
        }

        if (element < min) {
            min = element;
        }
    });

    return { max, min }
}

const minMax = minmax(arr);

if (minMax === null) {
    console.log("Empty Array");
}
else {
    console.log(minMax);
}










//SECOND LARGEST NUMBER
function secondLargest(arr) {
    let max = -Infinity;
    let secondLargest = -Infinity;

    if (arr.length < 2) return null;


    arr.forEach(element => {
        if (element > max) {
            secondLargest = max
            max = element;
        }

        else if (element > secondLargest && element < max) {
            secondLargest = element;
        }
    });

    if (secondLargest === -Infinity) return null;

    return secondLargest
}

const slargest = secondLargest(arr);
if (slargest === null) {
    console.log("No second Largest")
}
else {
    console.log("Second largest number is:", slargest)
}












//Write a function that counts even and odd numbers in an array and RETURNS an object.

function oddEven(arr) {
    if (arr.length === 0) {
        return { even: 0, odd: 0 }
    }

    let even = 0;
    let odd = 0;

    arr.forEach(num => {
        if (num % 2 === 0) {
            even += 1;
        }

        else {
            odd += 1;
        }
    })

    return { even, odd }
}
const result = oddEven(arr);
console.log(result);















//Student Interview Application System

let students = [
    { name: "Rahul", rollNo: 51, cgpa: 8.67 },
    { name: "Rohit", rollNo: 58, cgpa: 8.00 },
    { name: "Sahil", rollNo: 40, cgpa: 8.50 },
    { name: "Rhutul", rollNo: 53, cgpa: 7.86 },
    { name: "Ashish", rollNo: 34, cgpa: 6.70 },
    { name: "Piyush", rollNo: 43, cgpa: 8.30 },
    { name: "Prabhu", rollNo: 45, cgpa: 9.20 },
    { name: "Prateek", rollNo: 46, cgpa: 9.10 }
];

console.log(students);

function updateHiring(students) {
    students.forEach(student => {
        if (student.cgpa >= 9.00) {
            student.hiring = "hired"
        }
        else if (student.cgpa >= 8.00) {
            student.hiring = "Applicable";
        }
        else {
            student.hiring = "Not Applicable";
        };
    })
}

updateHiring(students)

for (let i = 0; i < students.length; i++) {
    console.log(`${students[i].name}`, ":", `${students[i].hiring}`)
}

function countHiring(students) {
    let hired = 0;
    let applicable = 0;
    let notApplicable = 0;

    students.forEach(student => {
        if (student.hiring === "hired") {
            hired += 1
        }
        else if (student.hiring === "Applicable") {
            applicable += 1
        }
        else {
            notApplicable += 1
        }
    })
    return { hired, applicable, notApplicable };
}
console.log(countHiring(students));





//Get topper students with forEach
function getToppers(students){
    let toppers = []
    students.forEach(student =>{
        if(student.cgpa>8.5){
            toppers.push(student.name);
        }
    })
    return toppers;
}
const toppers = getToppers(students);
console.log(toppers);