// Here we will calculate the sales and discount of the product
function discount(sumGross){
    console.log(sumGross);
    /// here first we need to check whether the discount is selected or not
    if(form["realDiscount"].value){
        /// here we need to check wheather the 
        // Discount is in percentage or in number
        if(form["modeOfDiscount"].value=="Number"){
            /// Here we need to add the the discount in Numbers
            let resultSum=sumGross-(form["realDiscount"].value);
            // Here we have the discount of the product in a number
            let discountNumber=document.getElementById("discountNumber");
            discountNumber.innerHTML=form["realDiscount"].value;
            console.log("After Discount"+ resultSum);
            let grosstotalAmount=document.getElementById("grosstotal");
            grosstotalAmount.innerHTML=resultSum;
        }
        else{
            /// Here the discount is in the % format then we need to calculate the percentage of the total
            let discontPercentage=form["realDiscount"].value;
            let preDiscountValue=(sumGross*discontPercentage)/100;
            let grosstotalAmount=document.getElementById("grosstotal");
            grosstotalAmount.innerHTML=sumGross-preDiscountValue;
            let discountNumber=document.getElementById("discountNumber");
            discountNumber.innerHTML=form["realDiscount"].value +"%";
        }
    }
    else{
        let grosstotalAmount=document.getElementById("grosstotal");
            grosstotalAmount.innerHTML=sumGross;
    }
}

// Here we have to add the GST amount and rate
function allThetaxes(sumGross){
    // here we will add the SGST and CGST Amount
    let CGSTAmount=((sumGross*2.5)/100);
    console.log((CGSTAmount).toFixed(2));
    // These values to be added in the given feilds
    let CGSTValue=document.getElementById("CGSTValue");
    CGSTValue.innerHTML=CGSTAmount.toFixed(2);
    let SGSTValue=document.getElementById("SGSTValue");
    SGSTValue.innerHTML=CGSTAmount.toFixed(2);
}