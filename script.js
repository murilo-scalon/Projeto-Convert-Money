const convertButton = document.querySelector("#convert-button") 
const convertFor = document.querySelector("#select-for")



function convertValues() {
    const inputValue = document.querySelector("#input-value").value
    const currencyConvertValue = document.querySelector(".paragraph-end-value") // valor a ser convertido
    const currencyConverted = document.querySelector(".paragraph-end") //valor convertido
    

    const dolarToday = 5.20
    const euroToday = 6.20

   
    if(convertFor.value == "dolar"){ 
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
        style:"currency",
        currency:"USD"
    }).format(inputValue/dolarToday) 
    }

    if(convertFor.value == "euro"){
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
        style:"currency",
        currency:"EUR"
    }).format(inputValue / euroToday)   
    }

     if(convertFor == "libra"){
          currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
        style:"currency",
        currency:"GBP"
    }).format(inputValue / euroToday)
    }

     if(convertFor == "bitcoin"){
        
    }
    
     if(convertFor == "real"){
        
    }


    currencyConvertValue.innerHTML = new Intl.NumberFormat("pt-BR", {
        style:"currency",
        currency:"BRL"
    }).format(inputValue)

    


}
function  changeCurrencyTo(){
    const titleCurrencyTo = document.querySelector(".title-currency-to")
    const imgCurrencyConverted = document.querySelector(".img-currency-converted")

    if(convertFor.value == "dolar") {
        titleCurrencyTo.innerHTML = "US$ Dólar"
        imgCurrencyConverted.src = "./assets/estados-unidos (1) 1.png"
    }

    if(convertFor.value == "euro") {
        titleCurrencyTo.innerHTML = "€ Euro"
        imgCurrencyConverted.src = "./assets/euro.png"
    }

    if(convertFor.value == "libra") {
        titleCurrencyTo.innerHTML = "£ Libra"
        imgCurrencyConverted.src = "./assets/libra 1.png"
    }

    if(convertFor.value == "bitcoin") {
        titleCurrencyTo.innerHTML = "₿ Bitcoin"
        imgCurrencyConverted.src = "./assets/bitcoin 1.png"
    }

    if(convertFor.value == "real") {
        titleCurrencyTo.innerHTML = "R$ Real"
        imgCurrencyConverted.src = "./assets/brasil 2.png"
    }
    
    convertValues()
}

convertFor.addEventListener("change", changeCurrencyTo)
convertButton.addEventListener("click", convertValues)



