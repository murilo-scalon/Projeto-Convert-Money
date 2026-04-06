const convertButton = document.querySelector("#convert-button")
const convertFor = document.querySelector("#select-for") //select moeda que vai converter
const convertFrom = document.querySelector("#select-from") // select moeda referência

function convertValues() {
    const inputValue = document.querySelector("#input-value").value
    const currencyConvertValue = document.querySelector(".paragraph-end-value") // valor a ser convertido
    const currencyConverted = document.querySelector(".paragraph-end") //valor convertido


    const dolarToday = 5.20
    const euroToday = 6.20
    const libraToday = 0.15
    const ieneToday = 0.34
    const bitcointoday = 357.941
    const realToday = 1.00



    if (convertFor.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)
    }     

    if (convertFor.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (convertFor.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (convertFor.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValue / ieneToday)
    }

    if (convertFor.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realToday)
    }

    if (convertFor.value == "bitcoin") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue / bitcointoday)

    }
}
   

function changeCurrencyTo() {
    const titleCurrencyTo = document.querySelector(".title-currency-to")
    const imgCurrencyConverted = document.querySelector(".img-currency-converted")

    if (convertFor.value == "dolar") {
        titleCurrencyTo.innerHTML = "US$ Dólar"
        imgCurrencyConverted.src = "./assets/estados-unidos (1) 1.png"
    }

    if (convertFor.value == "euro") {
        titleCurrencyTo.innerHTML = "€ Euro"
        imgCurrencyConverted.src = "./assets/euro.png"
    }

    if (convertFor.value == "libra") {
        titleCurrencyTo.innerHTML = "£ Libra"
        imgCurrencyConverted.src = "./assets/libra 1.png"
    }

    if (convertFor.value == "iene") {
        titleCurrencyTo.innerHTML = "¥ Iene"
        imgCurrencyConverted.src = "./assets/iene.png"
    }

    if (convertFor.value == "real") {
        titleCurrencyTo.innerHTML = "R$ Real"
        imgCurrencyConverted.src = "./assets/brasil 2.png"
    }

    if (convertFor.value == "bitcoin") {
        titleCurrencyTo.innerHTML = "₿ Bitcoin"
        imgCurrencyConverted.src = "./assets/bitcoin 1.png"
    }

    convertValues()
}



convertFor.addEventListener("change", changeCurrencyTo)
convertButton.addEventListener("click", convertValues)

