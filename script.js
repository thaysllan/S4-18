//oneThroughTwenty
function oneThroughTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <=20; counter++) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(oneThroughTwenty());


//evensToTwenty
function evensToTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <=20; counter ++) {
       if (counter % 2===0) {
        meuRetorno.push(counter)
       }
    }
    return meuRetorno;
}
console.log(evensToTwenty());
//oddsToTwenty

function oddsToTwenty() {
    let meuRetorno = [];
    for (let counter = 1; counter <=20; counter ++) {
       if (counter % 2===1) {
        meuRetorno.push(counter)
       }
    }
    return meuRetorno;
}
console.log(oddsToTwenty());

//multiplesOfFive
function multiplesOfFive() {
    let meuRetorno = [];
    for (let counter = 1; counter <=100; counter ++) {
       if (counter % 5===0) {
        meuRetorno.push(counter)
       }
    }
    return meuRetorno;
}
console.log(multiplesOfFive());
//squareNumbers
function squareNumbers() {
    let meuRetorno = [];
    for (let counter = 1; counter <=100; counter ++) {
    if ((counter*counter)<=100) {
        meuRetorno.push(counter*counter)
    }
}
return meuRetorno;
}
console.log(squareNumbers());

//countingBackwards

function countingBackward() {
    let meuRetorno = [];
    for (let counter = 20; counter >=1; counter--) {
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(countingBackward());

//evenNumbersBackwards
function evenNumbersBackwards() {
    let meuRetorno = [];
    for (let counter = 20; counter >=1; counter--) {
       if (counter %2===0)
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(evenNumbersBackwards());

//oddNumbersBackwards
function oddNumbersBackwards() {
    let meuRetorno = [];
    for (let counter = 20; counter >=1; counter--) {
       if (counter %2===1)
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(oddNumbersBackwards());
//multiplesOfFiveBackwards

function multiplesOfFiveBackwards() {
    let meuRetorno = [];
    for (let counter = 100; counter >=1; counter--) {
       if (counter %5===0)
        meuRetorno.push(counter)
    }
    return meuRetorno;
}
console.log(multiplesOfFiveBackwards());

//squareNumbersBackwards
function squareNumbersBackwards() {
    let meuRetorno = [];
    for (let counter = 100; counter >=1; counter --) {
    if ((counter*counter)<=100) {
        meuRetorno.push(counter*counter)
    }
}
return meuRetorno;
}
console.log(squareNumbersBackwards());