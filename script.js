const convertButton = document.querySelector("#convert-button") 

function convertValues(convertValues) {
    const inputValue = document.querySelector("#input-value").value
    const currencyConvertValue = document.querySelector(".paragraph-end-value") // valor a ser convertido
    const currencyConverted = document.querySelector(".paragraph-end") //valor convertido
    
    const dolarToday = 5.20

    const convertValue = inputValue / dolarToday

    currencyConvertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputValue)

    currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(convertValue)

}

convertButton.addEventListener("click", convertValues)



