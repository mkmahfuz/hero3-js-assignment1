//put the github link of the repository of this project
// function kilometerToMeter : 1 parameter, input number, output number
function kilometerToMeter(km){
    //input validation (this portion is for assignment's bonus work)
    if(isNaN(km) || km < 0){
        return "Invalid input, please try again ";
    }

    // 1 kilometer == 1000 meter
    var meter = km * 1000;
    return meter;
}

// test for kilometerToMeter()
// console.log(kilometerToMeter(2)); // return 2000
// console.log(kilometerToMeter(0)); // return 0
// console.log(kilometerToMeter()); // return try again
// console.log(kilometerToMeter(-4)); // return try again
// console.log(kilometerToMeter('a')); // return try again
// console.log(kilometerToMeter(.3)); // return 300
// console.log(kilometerToMeter(null)); // return 0
// console.log(kilometerToMeter(Infinity)); // return Infinity
// console.log(kilometerToMeter(2/0)); // return Infinity
// console.log(kilometerToMeter('')); // return 0

// function budgetCalculator : 3 parameters, input number, output number

function budgetCalculator(watch,phone,laptop){

    //input validation (this portion is for assignment's bonus work)
    var watchFraction = watch - Math.floor(watch);     
    var phoneFraction = phone - Math.floor(phone);     
    var laptopFraction = laptop - Math.floor(laptop);

    if(isNaN(watch) || watch < 0 || watchFraction > 0){
        return "Invalid watch unit, please try again. ";
    }
    if(isNaN(phone) || phone < 0 || phoneFraction > 0){
        return "Invalid phone unit, please try again. ";
    }
    if(isNaN(laptop) || laptop < 0 || laptopFraction > 0){
        return "Invalid laptop unit, please try again. ";
    } 
    //input validation end

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
// console.log(budgetCalculator(1,0,1)); //return 550
// console.log(budgetCalculator(-1,0,1)); //return invalid watch
// console.log(budgetCalculator(null,1,1)); //return 600
// console.log(budgetCalculator(1,1)); //return invalid laptop unit
// console.log(budgetCalculator(1,1,1,1)); //return 650
// console.log(budgetCalculator()); //return invalid watch
// console.log(budgetCalculator(0,0,.1)); //return invalid laptop unit
// console.log(budgetCalculator(1,1.4,1)); //return invalid phone unit
// console.log(budgetCalculator('','','')); //return 0

// function hotelCost : 1 parameter, input number, output number

function hotelCost(days){
    //input validation (this portion is for assignment's bonus work)
    if(isNaN(days) || days < 0){
        return "Invalid input, please try again ";
    }
    //fraction of day will be counted as full day (this portion is also for assignment's bonus work)
    days = Math.ceil(days);

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
// console.log(hotelCost(0)); //0
// console.log(hotelCost(1)); //100
// console.log(hotelCost(-6)); //invalid input
// console.log(hotelCost(100)); //5800
// console.log(hotelCost('q')); //invalid input
// console.log(hotelCost(.2)); //100
// console.log(hotelCost()); //invalid input
// console.log(hotelCost(null)); //0
// console.log(hotelCost('')); //0

// function megaFriend : 1 parameter, input array, output string

function megaFriend(nameArray){
    // variable initialization
    var largestName = ""; // nameArray[0]
    var arrLength =  nameArray.length;
    var i, element;

    //get the largestName
    for(i = 0; i < arrLength; i++){
        element = nameArray[i];
        if(element.length > largestName.length){
            largestName = element;
        }
    }

    // return result
    return largestName;
}

// test for megaFriend()
// arr1 = ['rahim','karim','jodu','shefali','jonaki','donaldTrump'];
// arr2 = ['rahim','karim','jodu','shefali','jonaki','donaldTrump','kamala haris'];
// arr3 = ['rahim','karim','jodu','shefali','jonaki','donaldTrump','                     ','kamala haris'];
// arr4 = [];
// arr5 = ['karim'];
// console.log(megaFriend(arr1)); //donaldTrump
// console.log(megaFriend(arr2)); //kamala haris
// console.log(megaFriend(arr3)); //empty data
// console.log(megaFriend(arr4)); //empty data
// console.log(megaFriend(arr5)); //empty data