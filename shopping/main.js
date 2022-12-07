const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
let n = prompt("If you are allergic to honey type 'Yes'");

//task1
if (shoppingCart.includes("Meat")) {

} else {
    shoppingCart.unshift("Meat");
}

//task2 
if (shoppingCart.includes("Sugar")) {

} else {
    shoppingCart.push("Sugar");
}

//task3
if (n == 'Yes') {
    shoppingCart.splice(shoppingCart.indexOf("honey") - 1, 1);
    console.log(shoppingCart);
} else {
    console.log(shoppingCart);
}

//task4
shoppingCart.splice(shoppingCart.indexOf("Tea"), 1, "Green Tea");