
// Controlling Plus & Minus Button 
function controlBookingOption(bookingClass, isIncrease){
    const selectBookingClass = document.getElementById(bookingClass + 'Count');
    const seatCount = parseInt(selectBookingClass.value);
    let newSeatCount = seatCount;
    if(isIncrease == true){
        newSeatCount = seatCount + 1;
    }
    if(isIncrease == false && newSeatCount > 0){
        newSeatCount = seatCount - 1;
    }
    selectBookingClass.value = newSeatCount;
    let seatPriceTotal = 0;
    if(bookingClass == 'firstClass'){
        seatPriceTotal = newSeatCount * 150;
    }
    if(bookingClass == 'economyClass'){
        seatPriceTotal = newSeatCount * 100;
    }
    totalPriceCalculate();  //Return From Total Price calculation
  
}
//Total Price Range Calculation
function totalPriceCalculate(){

    // Subtotal Calculation
    const firstClassCount = parseInt(document.getElementById("firstClassCount").value);
    const economyClassCount = parseInt(document.getElementById("economyClassCount").value);
    const subtotalSeatPrice = firstClassCount * 150 + economyClassCount * 100;
    document.getElementById("subtotalPrice").innerText = subtotalSeatPrice;

    // Tax Calculation
    const tax = subtotalSeatPrice * 0.1;
    document.getElementById("totalTax").innerText = tax;

    // Grand Total Calculation
    const grandTotal = tax + subtotalSeatPrice;
    document.getElementById("grandTotal").innerText = grandTotal;
}

// Book Now Button Controller
    function bookNowBtn(){
        let grandTotal = document.getElementById("grandTotal").innerText;
        if (grandTotal != 0){
            document.getElementById("bodyContent").style.display = 'none';
            document.getElementById("confirmation").style.display = 'block';
        }
        else{
            alert('Kindly select your room first');
        }
    };
   