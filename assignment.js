//put the github link of the repository of this project
// function kilometerToMeter : 1 parameter, input number, output number
function kilometerToMeter(km){
    var meter = km * 1000;
    return meter;
}

// test for kilometerToMeter()
// console.log(kilometerToMeter(2)); // return 2000

// function budgetCalculator : 3 parameters, input number, output number

function budgetCalculator(watch,phone,laptop){
    // variable initialization
    const watchPrice = 50, phonePrice = 100, laptopPrice = 500;

    // calculate the totalBudget
    var totalBudget = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);

    // return the result
    return totalBudget;
}

// test for budgetCalculator()
// console.log(budgetCalculator(2,3,4)); //return 2400
// console.log(budgetCalculator(1,1,1)); //return 650
// console.log(budgetCalculator(0,1,0)); //return 100
// console.log(budgetCalculator(0,0,0)); //return 0

// function hotelCost : 1 parameter, input number, output number

function hotelCost(days){
    // variable initialization
    const dayOnetoTenPrice = 100, dayEleventoTwentyPrice = 80, dayTwentyonetoMorePrice = 50;
    var totalCost = 0, daysOn2ndSlot = 0, daysOn3rdSlot = 0;

    // condition and count block start
    if(days<=10){
        totalCost = days * dayOnetoTenPrice;
    }else if(days<=20){
        daysOn2ndSlot = days - 10;
        totalCost = (10 * dayOnetoTenPrice) + (daysOn2ndSlot * dayEleventoTwentyPrice);
    } else {
        daysOn3rdSlot = days - 20;
        totalCost = (10 * dayOnetoTenPrice) + (10 * dayEleventoTwentyPrice) + (daysOn3rdSlot * dayTwentyonetoMorePrice);        
    }
    //end of condition

    // return the result
    return totalCost;
}

// test for hotelCost()
// console.log(hotelCost(23)); //1950
// console.log(hotelCost(13)); //1240
// console.log(hotelCost(10)); //1000
// console.log(hotelCost(20)); //1800