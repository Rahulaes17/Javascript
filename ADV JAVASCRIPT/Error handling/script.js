
try {
    let a = 56;
    let b = 4;
    let c = b / a;
    if (a === 0) {
        throw Error("You cannot do this")
    }

    console.log(c.toUppercase())
}
catch {
    console.log("error")
}

try {
    let a = 0;
    let b = 10;

    if (a === 0) {
        throw new Error("Cannot divide by zero");
    }

    let result = b / a;
    console.log(result);
}
catch (err) {
    console.log("Error:", err.message);
}

try {
    let input = "abc";
    let num = Number(input);

    if (isNaN(num)) {
        throw new Error("Invalid number entered");
    }

    console.log(num * 2);
}
catch (err) {
    console.log("Error:", err.message);
}

try {
    let user = { name: "Rahul" };

    if (!user.age) {
        throw new Error("Age property missing");
    }

    console.log(user.age);
}
catch (err) {
    console.log("Error:", err.message);
}