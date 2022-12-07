const useg = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "Ф", "Х", "У", "Ц"]
const useg1= [
    ["А", "Архангай"],
    ["Б", "Баян-Өлгий"],
    ["В", "Баянхонгор"],
    ["Г", "Булган"],    
    ["Д", "Говь-Алтай"],
    ["Е", "Дорноговь"],
    ["Ж", "Дорнод"],
    ["З", "Дундговь"],
    ["И", "Завхан"],
    ["Й", "Өвөрхангай"],
    ["К", "Өмнөговь"],
    ["Л", "Сүхбаатар"],
    ["М", "Сэлэнгэ"],
    ["Н", "Төв"],
    ["О", "Увс"],
    ["П", "Ховд"],
    ["Р", "Хөвсгөл"],
    ["С", "Хэнтий"],
    ["Т", "Дархан-Уул"],
    ["Ф", "Орхон"],
    ["Х", "Говьсүмбэр"],
    ["У", "Улаанбаатар"],
    ['Ц', "Улаанбаатар"],
];
let a="",b; 
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


function getGender(register) {
    if (register.length == 10) {
        if (useg.includes(register.slice(0, 1).toUpperCase()) && useg.includes(register.slice(1, 2).toUpperCase())) {
            if (Number.isInteger(+register.slice(2)) == true) {
                if(register.slice(-2,-1)%2==0){
                    console.log("Tanii oruulsan RD emegtei hunii RD baina")
                }else if(register.slice(-2,-1)%2==1){
                    console.log("Tanii oruulsan RD eregtei hunii RD baina")
                }else{             
                    console.log("Tanii oruulsan RD buruu baina");
                }
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

function getBirthDay(register) {
    if (register.length == 10) {
        if (useg.includes(register.slice(0, 1).toUpperCase()) && useg.includes(register.slice(1, 2).toUpperCase())) {
            if (Number.isInteger(+register.slice(2)) == true) {           
                    console.log("Tanii oruulsan RD tai hun", register.slice(6,8), " udur tursun baina");
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

function getBirthRegion(register) {
    if (register.length == 10) {
        if (useg.includes(register.slice(0, 1).toUpperCase()) && useg.includes(register.slice(1, 2).toUpperCase())) {
            if (Number.isInteger(+register.slice(2)) == true) {           
                    for(let i=0; i<useg1.length; i++){
                        for(let j=0; j<useg[i].length; j++ ){
                            if(useg1[i][0]==register.slice(0, 1).toUpperCase()){
                                a=useg1[i][1];
                            }
                        }
                    }
                    if(a!=""){
                        console.log("Tanii oruulsan RD tai hun", a,"bused tursun hun baina");
                    } else {
                        console.log("Tanii oruulsan RD buruu baina");        
                    }
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


function getRegisterInfo(register) {
    if (register.length == 10) {
        if (useg.includes(register.slice(0, 1).toUpperCase()) && useg.includes(register.slice(1, 2).toUpperCase())) {
            if (Number.isInteger(+register.slice(2)) == true) {   
                if(register.slice(-2,-1)%2==0){
                    b=("emegtei hun baina")
                }else if(register.slice(-2,-1)%2==1){
                    b=("eregtei hun baina")
                }else{             
                    console.log("Tanii oruulsan RD buruu baina");
                }        
                    for(let i=0; i<useg1.length; i++){
                        for(let j=0; j<useg[i].length; j++ ){
                            if(useg1[i][0]==register.slice(0, 1).toUpperCase()){
                                a=useg1[i][1];
                            }
                        }
                    }
                    if(a!=""){
                        if(register.slice(6,8)>0 && register.slice(6,8)<=31){
                            if(register.slice(4,6)>0 && register.slice(4,6)<=12){
                                console.log("Tanii oruulsan RD tai hun", register.slice(2,4), "onii", register.slice(4,6), "dugaar sariin", register.slice(6,8),"udur", a, "bused tursun", b );
                            }else if (register.slice(4,6)>=21 && register.slice(4,6)<=32){
                                console.log("Tanii oruulsan RD tai hun", register.slice(2,4), "onii", register.slice(4,6)-20, "dugaar sariin", register.slice(6,8),"udur", a, "bused tursun", b );
                            }else {
                                console.log("Tanii oruulsan RD buruu baina");        
                            }
                        }else {
                            console.log("Tanii oruulsan RD buruu baina");        
                        }
                        
                    } else {
                        console.log("Tanii oruulsan RD buruu baina");        
                    }
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
getRegisterInfo(rd);
