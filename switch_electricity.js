var unit = 150
var charge = 0
var total = 0
var surcharge = 0
var bill = 0
if (unit <= 50) {
    total = unit * charge
}
else if (unit <= 150) {
    total = 25 + ((unit - 50) * 0.75)
}
else if (unit <= 250) {
    total = 100 + ((unit - 150) * 1.20)
}
else if (unit > 250) {
    total = 220 + ((unit - 250) * 1.50)
}
surcharge = total * 20 / 100
bill = total + surcharge
console.log("the electricity charge:" + bill)