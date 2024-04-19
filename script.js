/// here we have to catch all the data which we have Entered
let form=document.getElementById("main-form");
form.addEventListener("submit",function(e){
    e.preventDefault();
    /// Here we are extracting color of the vehicle 

    let colorName=form.color.value;
    let ProcuctcolorName=document.getElementById("colorname");
    ProcuctcolorName.innerHTML=colorName;
    
    
    if(form.newElement){
        let modelName=form.newElement.value;
        let vehicaleName=document.getElementById("vehicle-name");
        vehicaleName.innerHTML=modelName;
    }else if(!form.newElement){
        let vehicaleName1=document.getElementById("vehicle-name");
        // vehicaleName1.classList.add="display-off";
        let modelName=form.modelName.value;
        let vehicaleName=document.getElementById("vehicle-name");
        vehicaleName.innerHTML=modelName;
    }
    // else{
    //     let modelName=form.modelName.value;
    //     let vehicaleName=document.getElementById("vehicle-name");
    //     vehicaleName.innerHTML=modelName;
    // }
    // Here we need to extract color of the vehicle also


    let price=form.price.value;
    let productPrice=document.getElementById("product-price");
    productPrice.innerHTML=price;
    let quantity1=form.qunatityPro.value;
    let quantitynumber=document.getElementById("quantity-number");
    quantitynumber.innerHTML=quantity1;
    // if(quantity1>1){}
   let totalAmount=price*quantity1;
   let totalAmoutPrice=document.getElementById("total-amount");
   totalAmoutPrice.innerHTML=totalAmount;
   /// -->> here we fill add chessis number


   let chasisNumber=form.chassisNumber.value;
    extractdomy(chasisNumber);

    /// Here we will add motor number and battery number as well
    let motorNumber2=form.motorNumber.value;
    let motorNumber3=document.getElementById("mmotor");
    motorNumber3.innerHTML=motorNumber2;
    
    // Here we will add battery Number also
    // let batteryNumber1=form.batteryNumber.value;
    let formBatterynumber=document.getElementById("battery-number");
    formBatterynumber.innerHTML=form.batteryNumber.value;

    //// here we need to add all the elemnts in the given table
    let srNo=1;
    // Here we need to calculate the gross total
    let grosstotal=[];
    grosstotal.push(totalAmount);
    let sumGross=0;
    for(let i=0;i<grosstotal.length;i++){
        sumGross+=grosstotal[i];
    }
    // Here we have the gross total now we can add the gross total of the elements
    let grosstotalAmount=document.getElementById("grosstotal");
    grosstotalAmount.innerHTML=sumGross;
    let totalAmountAll=document.getElementById("total-amount2");
    totalAmountAll.innerHTML="₹"+sumGross;
    /// Here we need to add the data of coustomer
    let cusAddress=form.customerAddress.value;
    // console.log(cusAddress);
    let customerAddress=document.getElementById("billing-address1");
    customerAddress.innerHTML=cusAddress;
    let pincode=form.pincode.value;
    let pincodeArea=document.getElementById("citypincode");
    pincodeArea.innerHTML=pincode;
    // -----> Mobile number section
    let mobileNumber=form.customerMobile.value;
    extractMobile(mobileNumber);
    //-------> Here we will add mode of transaction 
    let modeOfTransaction=form.modePayment.value;
    extractModeOftransaction(modeOfTransaction);

    // Here we need to hide the form button and present the pdf 
    let formSection=document.getElementById("form-section");
    formSection.classList.toggle("display-off");
    let mainContainer=document.getElementById("main-container");
    mainContainer.classList.toggle("display-off");
   
});
// here we need to add the find this element
let modelName=document.getElementById("modelName");
modelName.addEventListener("click",function(e){
    if(e.target.value=="other")addNewField();
})
function addNewField(){
    let newAddElement=document.getElementById("new-add-element");
    newAddElement.innerHTML=`<label for="newElement"> Product-Name</label>
    <input type="text" name="newElement" id="newModel">`
    // let newModel=document.getElementById("newModel");
    // newModel.addEventListener("change",function(){
    //     // here we need to catch the change
    //     let changes=newModel.innerText;
    //     console.log(changes);

    // })
}   
/// here we need to print
let print=document.getElementById("print");
print.addEventListener("click",function(e){
    window.print();
});
// Here we will extract the mobile number of the customer 
function extractMobile(mobileNumber){
    let mobileCustomer=document.getElementById("customer-mobileNo");
    mobileCustomer.innerHTML=mobileNumber;
}
function extractModeOftransaction(result){
    let modetrans=document.getElementById("modetrans");
    modetrans.innerHTML=result;
}
// chasisumber
function extractdomy(result){
    // here we will use the same pamplet
    let midder=document.getElementById(`chasisNumber`);
    console.log(midder);
    midder.innerHTML=result;
}