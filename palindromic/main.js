let n = prompt("Ta duriin too oruulna uu");
let a = n;
console.log("tanii oruulsan too bol", n);
const arr = n.split("");
if (a == arr.reverse().join("")) {
    console.log("Tanii oruulsan too palindrom mon baina");
} else {
    console.log("Tanii oruulsan too palindrom bish baina");
}
