var num1 = 8
var num2 = 8
var num3 = 8
var greater = 0
// if (num1 === num2 && num2 === num3) {
//     console.log("Both number are equal")
// }
// else if (num1 >= num2 && num1 >= num3) {
//     console.log("Greater Number:" + num1)
// }
// else if (num2 >= num1 && num2 >= num3) {
//     console.log("Greater Number:" + num2)
// }
// else if (num3 >= num1 && num3 >= num2) {
//     console.log("Greater Number:" + num3)
// }
if(num1!=num2){
if (num1 > num2) {
    greater=num1
}
else {
    greater=num2
}
if (greater <num3) {
    greater=num3
}
console.log("greater number is "+greater)
}
else {
    console.log("All number are even")
}