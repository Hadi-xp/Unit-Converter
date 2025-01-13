//DOM
const gramsBtn = document.querySelector(".gramsButton");
const gramsResult = document.querySelector(".grams");
const gramsError = {
    validError: new Error("Please enter a valid number"),
    zeroError: new Error("Input cant be zero"),
    negativeError: new Error("Input cant be negative")
};
// this prgram is a Unit converter

// Kg => grams

// taking first Number as Kg
gramsBtn.addEventListener('click',()=>{
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
})



