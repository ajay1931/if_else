var basicSalary = 22000
var hra = 0
var da = 0
var grossSalary = 0
if (basicSalary <= 10000) {
    hra = basicSalary * 20 / 100
    da = basicSalary * 80 / 100
}
else if (basicSalary < 20000) {
    hra = basicSalary * 25 / 100
    da = basicSalary * 90 / 100
}
else if (basicSalary > 20001) {
    hra = basicSalary * 30 / 100
    da = basicSalary * 95 / 100
}
grossSalary = basicSalary + hra + da
console.log("grossSalary:" + grossSalary)