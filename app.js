//DOM Kg to grams
const gramsBtn = document.querySelector(".gramsButton");
const gramsResult = document.querySelector(".grams");
const gramsError = {
    validError: new Error("Please enter a valid number"),
    zeroError: new Error("Input cant be zero"),
    negativeError: new Error("Input cant be negative")
};
// this prgram is a Unit converter

// Kg => grams
function KgToGrams(){
    let Kg = Number(prompt("Enter the value in Kg: "));
    // validation
if (isNaN(Kg)) {
    gramsResult.textContent = gramsError.validError.message;
    throw gramsError.validError;
    
} else if(Kg === 0) {
    gramsResult.textContent = gramsError.zeroError.message;
    throw gramsError.zeroError;
    
} else if (Kg < 0){
    gramsResult.textContent = gramsError.negativeError.message;
    throw gramsError.negativeError;
}else{
    // converting it to grams
    let grams = Kg * 1000;

    // displaying the result
    gramsResult.textContent = `${Kg} Kg = ${grams} grams`;
}
}

// taking first Number as Kg
gramsBtn.addEventListener('click',KgToGrams);

// DOM Km to meters
const metersBtn = document.querySelector(".metersButton");
const metersResult = document.querySelector(".meters");
const metersError = {
    validError: new Error("Please enter a valid number"),
    zeroError: new Error("Input cant be zero"),
    negativeError: new Error("Input cant be negative")
};

// Km => Meters
function KmToMeters(){
    let Km = Number(prompt("Enter the value in Km: "));
    // validation
if (isNaN(Km)) {
    metersResult.textContent = metersError.validError.message;
    throw metersError.validError;
    
} else if(Km === 0) {
    metersResult.textContent = metersError.zeroError.message;
    throw metersError.zeroError;
    
} else if (Km < 0){
    metersResult.textContent = metersError.negativeError.message;
    throw metersError.negativeError;
}else{
    // converting it to meters
    let meters = Km * 1000;

    // displaying the result
    metersResult.textContent = `${Km} Km = ${meters} meters`;
}
}

// taking first Number as Km
metersBtn.addEventListener('click',KmToMeters);



