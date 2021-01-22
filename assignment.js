// https://github.com/mkmahfuz/hero3-js-assignment1

// function kilometerToMeter : 1 parameter, input number, output number

function kilometerToMeter(kilometer) {
    //input validation (this portion is for assignment's bonus work)
    if (isNaN(kilometer) || kilometer < 0) {
        return "Invalid input, please try again ";
    }

    // 1 kilometer == 1000 meter
    var meter = kilometer * 1000;
    return meter;
}

// function budgetCalculator : 3 parameters, input number, output number

function budgetCalculator(watch, phone, laptop) {
    //input validation (this portion is for assignment's bonus work)
    var watchFraction = watch - Math.floor(watch);
    var phoneFraction = phone - Math.floor(phone);
    var laptopFraction = laptop - Math.floor(laptop);

    if (isNaN(watch) || watch < 0 || watchFraction > 0) {
        return "Invalid watch unit, please try again. ";
    }
    if (isNaN(phone) || phone < 0 || phoneFraction > 0) {
        return "Invalid phone unit, please try again. ";
    }
    if (isNaN(laptop) || laptop < 0 || laptopFraction > 0) {
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

// function hotelCost : 1 parameter, input number, output number

function hotelCost(days) {
    //input validation (this portion is for assignment's bonus work)
    if (isNaN(days) || days < 0) {
        return "Invalid input, please try again ";
    }
    //fraction of day will be counted as full day (this portion is also for assignment's bonus work)
    days = Math.ceil(days);

    // variable initialization
    const dayOnetoTenPrice = 100, dayEleventoTwentyPrice = 80, dayTwentyonetoMorePrice = 50;
    var totalCost = 0, daysOn2ndSlot = 0, daysOn3rdSlot = 0;

    // condition and costCalculation block start
    if (days <= 10) {
        totalCost = days * dayOnetoTenPrice;
    } else if (days <= 20) {
        daysOn2ndSlot = days - 10;
        totalCost = (10 * dayOnetoTenPrice) + (daysOn2ndSlot * dayEleventoTwentyPrice);
    } else {
        daysOn3rdSlot = days - 20;
        totalCost = (10 * dayOnetoTenPrice) + (10 * dayEleventoTwentyPrice) + (daysOn3rdSlot * dayTwentyonetoMorePrice);
    }
    //end of condition and costCalculation

    // return the result
    return totalCost;
}

// function megaFriend : 1 parameter, input array, output string

function megaFriend(nameArray) {
    //input validation (this portion is for assignment's bonus work)
    if (!Array.isArray(nameArray)) {
        return "Invalid input: Input is not an array";
    }
    if (nameArray.length < 1) {
        return "Invalid input: No element found";
    }
    //input validation end

    // variable initialization
    var largestName = nameArray[0];
    var arrLength = nameArray.length;
    var i, element;

    //get the largestName
    for (i = 0; i < arrLength; i++) {
        element = nameArray[i];

        if (typeof element !== 'string') { return "element not string"; } //input validation : string only.
        element = element.trim(); //trim the too many spaces around

        if (element.length > largestName.length) {
            largestName = element;
        }
    } //end of for loop

    // return result
    return largestName;
}


//I have intentionally deleted my test cases and test data- Thanks.