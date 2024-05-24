var physics=50
var chemistry=50
var biology=50
var mathematics=50
var computer=50
var total=(physics+chemistry+biology+mathematics+computer)/500*100
var percentage=0
if (total>=90){
    console.log("Grade A")

}
else if(total>=80){
    console.log("Grade B")
}
else if(total>=70){
    console.log("grade C")
}
else if(total>=60){
    console.log("Grade D")
}
else if(total>=40){
    console.log("Grade E")
}
else if(total<40){
    console.log("Grade F")
}
console.log("percentage:"+total)
console.log("physics:"+physics)
console.log("chemistry:"+chemistry)