carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];

let n=prompt("ta mashinii brandiin ehnii usgiig ooruulna uu"), m=0;

for(let i=0; i<carBrands.length; i++){
        if(carBrands[i][0][0]==n.toUpperCase()){
            console.log("brand:", carBrands[i][0]);
            console.log("brand:", carBrands[i][1]);
            console.log("brand:", carBrands[i][2]);
        }else{
            m++;
        }
}
if (m!=0){
    console.log("олдсонгүй");
}
