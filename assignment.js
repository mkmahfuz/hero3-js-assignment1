//put the github link of the repository of this project
// function kilometerToMeter : 1 parameter, input number, output number
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}

//test for kilometerToMeter()
console.log(kilometerToMeter(2)); // return 2000

// function budgetCalculator : 3 parameters, input number, output number
function budgetCalculator(watch,phone,laptop){
    const watchPrice = 50, phonePrice = 100, laptopPrice = 500;
    var totalBudget = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
    return totalBudget;
}

//test for budgetCalculator()
console.log(budgetCalculator(2,3,4)); //return 2400
console.log(budgetCalculator(1,1,1)); //return 650
console.log(budgetCalculator(0,1,0)); //return 100
console.log(budgetCalculator(0,0,0)); //return 0

