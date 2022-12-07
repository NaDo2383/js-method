const useg = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "Ф", "Х", "У", "Ц"]
function isCorrectReg(register) {
    if (register.length == 10) {
        if (useg.includes(register.slice(0, 1).toUpperCase()) && useg.includes(register.slice(1, 2).toUpperCase())) {
            if (Number.isInteger(+register.slice(2)) == true) {
                console.log("Tanii oruulsan RD zov baina");
            } else {
                console.log("Tanii oruulsan RD buruu baina");
            }
        } else {
            console.log("Tanii oruulsan RD buruu baina");
        }
    } else {
        console.log("Tanii oruulsan RD buruu baina");
    }

}
let rd = prompt("RD oruulna uu")
isCorrectReg(rd);