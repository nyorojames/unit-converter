const convertBtn = document.getElementById("convert-btn")
const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-el")
const lengthEl1 = document.getElementById("length-el1")
const lenghtEl2 = document.getElementById("length-el2")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter ` 
    
    lengthEl1.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons |
    ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters `

    lenghtEl2.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds |
    ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilos `
})

