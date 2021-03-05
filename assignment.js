
//https://github.com/mforkan9/Final-Assignment3

// kilometer To Meter
    function kilometerToMeter(kilometer){
            var meter = kilometer * 1000;
            return meter;
    }
    var totalMeter = kilometerToMeter(5)
    console.log(totalMeter)
    //outPut = 5000





//Budget Calculator

    function budgetCalculator(item1, item2, item3){
        //Item-1
        var watch = 50;
        var count1 = watch * item1;
        //Item-2
        var mobile = 100;
        var count2 = mobile * item2;
        //Item-3
        var laptop = 500;
        var count3 = laptop * item3;

        var sum = count1 + count2 + count3;
        return sum;
    }
    var totalBudget = budgetCalculator(2, 2,2)
    console.log(totalBudget)
    //outPut = 1300





//hotel Cost

    function hotelCost( day ){
        var cost = 0;
        if (day <= 10) {
            cost = day * 100;
        }
        else if (day <= 20) {
            var firstPart = 10 * 100;
            var remaining = day - 10;
            var secondPart = remaining * 80;
            cost = firstPart + secondPart;
        }
        else{
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = day - 20;
            var thirdPart = remaining * 50;
            cost = firstPart + secondPart + thirdPart;
        }
        return cost;
    }
    var totalCost = hotelCost(21);
    console.log(totalCost)
    //output = 1850






//Mega Friend
    function megaFriend(arr){
        var long = arr[0];
        for (var i = 0; i < arr.length; i++) {
            var element = arr[i];
                if( long.length < element.length){
                    long = element
                    }
                        }
                        return long
                            }

            var  friend = ["abir","abdullah","robin","abdurrohim","ali"]
            var longWord = megaFriend(friend)
            console.log(longWord)
            //output = abdurrohim