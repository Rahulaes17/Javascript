
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