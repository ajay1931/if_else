// shop
// 1000 10% 
// 2000 20%
// 3000 30%
// >3000 50%

// total price

// input : total price 3500
// Paid Amount: 1750

var price=2500
var discount=0
var discountPrice=0
if(price>=1 && price<=1000){
     discount=10;
}
else if(price<=2000){
    discount=20;
}
else if(price<=3000){
    discount=30;
}
else if(price>3000){
    discount=50;
}
discountPrice=price*discount/100;
discountPrice=price-discountPrice
console.log(discountPrice);

