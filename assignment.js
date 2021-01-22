// https://github.com/piashossain009/JS-Assignment.git



// Kilometer To meter Convert Function

function kilometerToMeter(kmVal) {
    if (kmVal <= 0) {
        return 0;
    } else {
        return kmVal * 1000;
    }
}


// Budget Calculator with three parameter 

function budgetCalculator(watchNum, mblNum, laptopNum) {
    var totalCost = 0;
    if (watchNum <= 0 && mblNum <= 0 && laptopNum <= 0) {
        return 0;
    } else if (watchNum <= 0 && mblNum > 0 && laptopNum > 0) {
        totalWatchCost = watchNum * 0;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } else if (watchNum <= 0 && mblNum <= 0 && laptopNum > 0) {
        totalWatchCost = watchNum * 0;
        totalmblCost = mblNum * 0;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } else if (watchNum <= 0 && mblNum > 0 && laptopNum <= 0) {
        totalWatchCost = watchNum * 0;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 0;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } else if (watchNum > 0 && mblNum <= 0 && laptopNum > 0) {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 0;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } else if (watchNum > 0 && mblNum <= 0 && laptopNum <= 0) {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 0;
        totallaptopCost = laptopNum * 0;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } else if (watchNum > 0 && mblNum > 0 && laptopNum <= 0) {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 0;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;

    } else {
        totalWatchCost = watchNum * 50;
        totalmblCost = mblNum * 100;
        totallaptopCost = laptopNum * 500;
        totalCost = totalWatchCost + totalmblCost + totallaptopCost;
    }
    return totalCost;

}


// Hotel cost function with difference days range 

function hotelCost(days) {
    var cost = 0;
    if (days <= 0) {
        return 0;
    } else if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        var first10days = 10 * 100;
        var remainsdays = days - 10;
        var second10days = remainsdays * 80;
        cost = first10days + second10days;
    } else {
        var first10days = 10 * 100;
        var second10days = 10 * 80;
        var remainsdays = days - 20;
        var restofdays = remainsdays * 50;
        cost = first10days + second10days + restofdays;
    }
    return cost;
}


// Find longest string in array 

function megaFriend(array) {
    var longestStr = "";

    for (var i = 0; i < array.length; i++) {
        var element = array[i];
        if (element.length > longestStr.length) {
            longestStr = element;
        }
    }
    return longestStr;

}