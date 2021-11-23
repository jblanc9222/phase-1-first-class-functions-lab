// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers){
        return drivers.slice (0,2)
}
const returnLastTwoDrivers = function (drivers){
        return drivers.slice (2,4)
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(num1){
    return function fareMultiplier(fare){
        return num1 * fare
    } 
}
const fareDoubler = function fareDoubler(fare){
    return fare * 2
}
const fareTripler = function fareTripler(fare){
    return fare * 3
}
function selectDifferentDrivers(arrayOfDrivers, drivers){
           return drivers(arrayOfDrivers)

}