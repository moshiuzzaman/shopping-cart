const fPlusBtn = document.getElementById('fPlusBtn');
fPlusBtn.addEventListener('click', function(){
    value('firstValue', 1);
    plusAmount('firstAmount', 1219);
    plusAmount('subtotal', 1219);
    tax ('tax');
     var subTotal= innerToFloat ('subtotal');
     var sumTax= innerToFloat('tax');
    document.getElementById('total').innerText= subTotal+sumTax;
})

const fMinusBtn= document.getElementById('fMinusBtn');
 fMinusBtn.addEventListener('click', function(){
    value('firstValue', -1);    
    plusAmount('firstAmount', -1219);
    plusAmount('subtotal', -1219);
    tax ('tax');
     var subTotal= innerToFloat ('subtotal');   
     var sumTax= innerToFloat('tax');
    document.getElementById('total').innerText= subTotal+sumTax; 
})

const sPlusBtn= document.getElementById('sPlusBtn');
    sPlusBtn.addEventListener('click', function(){
        value('secondValue',1);
        plusAmount('secondAmount', 59);
        plusAmount('subtotal', 59);
        tax ('tax');
        var subTotal= innerToFloat ('subtotal');   
        var sumTax= innerToFloat('tax');
        document.getElementById('total').innerText= subTotal+sumTax;      
    })

const sMinusBtn= document.getElementById('sMinusBtn');
 sMinusBtn.addEventListener('click', function(){
    value('secondValue', -1);    
    plusAmount('secondAmount', -59);
    plusAmount('subtotal', -59);
    tax ('tax');
     var subTotal= innerToFloat ('subtotal');   
     var sumTax= innerToFloat('tax');
    document.getElementById('total').innerText= subTotal+sumTax; 
})

function value(id, plusOrMinus){
    const value= document.getElementById(id).value;
    const valueFloat= parseFloat(value);
    const newValue= valueFloat+plusOrMinus;
     document.getElementById(id).value=newValue;
}

function plusAmount(id,passAmount,){
    var amountFloat= innerToFloat(id);
    const newAmount= amountFloat+ passAmount;
    document.getElementById(id).innerText=newAmount;
}

function tax (id){
    const subT=document.getElementById('subtotal').innerText;
   const subTFloat =parseFloat(subT);
    const mainTax= (subTFloat*12)/100;
    const finalTax= Math.round(mainTax)
    document.getElementById(id).innerText=finalTax;
}

function innerToFloat(id){
        const firstAmount= document.getElementById(id).innerText;
        const firstAmountFloat=parseFloat(firstAmount);
        return firstAmountFloat;
}