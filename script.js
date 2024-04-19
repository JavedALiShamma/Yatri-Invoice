/// here we have to catch all the data which we have Entered
let form=document.getElementById("main-form");
let key=1;
let sale={}
form.addEventListener("submit",function(e){
    e.preventDefault();
    sale[key]={
        ModeName:form["modelName"].value,
        Color:form["color-name"].value,
    }
    key++;
    console.log(sale);
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
   /// -->> Here we are adding HSNA number
   let HSNANumber=document.getElementById("HSNANumber")
    HSNANumber.innerHTML=form["HSNASAC"].value;


    // Here we are adding name and the father's name of the customer
    let customerName=document.getElementById("nameCustomer");
    customerName.innerHTML=form["customer-name"].value +" ";
    // here we will add father's name also
    let fatherName=document.getElementById("nameFather");
    fatherName.innerHTML=form["customerFather"].value;

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
    ///Here we will check other batteries are present or not
    if(form["batteryNumber1"].value){
        // If we have the value of the other battery i.e battery 1
        let battery1=document.getElementById("battery1");
        battery1.innerHTML=form["batteryNumber1"].value;
    }
    if(form["batteryNumber2"].value){
        // If we have the value of the other battery i.e battery 1
        let battery1=document.getElementById("battery2");
        battery1.innerHTML=form["batteryNumber2"].value;
    }
    if(form["batteryNumber3"].value){
        // If we have the value of the other battery i.e battery 1
        let battery1=document.getElementById("battery3");
        battery1.innerHTML=form["batteryNumber3"].value;
    }
    if(form["batteryNumber4"].value){
        // If we have the value of the other battery i.e battery 1
        let battery1=document.getElementById("battery4");
        battery1.innerHTML=form["batteryNumber4"].value;
    }

    //// here we need to add all the elemnts in the given table
    let srNo=1;
    // Here we need to calculate the gross total
    let grosstotal=[];
    grosstotal.push(totalAmount);
    let sumGross=0;
    for(let i=0;i<grosstotal.length;i++){
        sumGross+=grosstotal[i];
    }
    discount(sumGross);
    // Here we are trying to redirect to another page
    
    
    // Here we have the gross total now we can add the gross total of the elements
    allThetaxes(sumGross);
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
    // // Here we are toggling both the section again
    // let printContent=document.getElementById("print-content");
    // printContent.classList.toggle("display-off");
    // let formSection=document.getElementById("form-section");
    // formSection.classList.toggle("display-off");
    // let mainContainer=document.getElementById("main-container");
    // mainContainer.classList.toggle("display-off");

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
// Here we need to see whether the information is saved or not 

