const convertButton = document.querySelector("#convert-button")//botão mapeado console.log(convertButton)
//convertButton é o nome do mapeamento do botão ou variavel
const selectFor = document.querySelector("#select-for") //valor do select da moeda que vai converter
const selectFrom = document.querySelector("#select-from")//valor do select da moeda que vai converter
//função que será chamada quando clicar no botão


function convertValue() {
    const currencyConverted = document.querySelector(".paragraph-end")//variavel que mostra o valor convertido
    const currencyConvertTo = document.querySelector(".paragraph-end-value")//variavel que vai mostrar o valor que foi digitado no input

    const inputValue = document.querySelector("#input-value").value
    const taxas = {

        "real": { "dolar": 0.20, "euro": 0.17, "libra": 0.15, "iene": 31.10, "real": 1 }, //varialvel do valor que o input precisa dividir ou multiplicar para converter
        "dolar": { "euro": 0.86, "libra": 0.74, "iene": 159.18, "real": 4.98, "dolar": 1 },
        "euro": { "libra": 0.87, "iene": 186.84, "real": 5.84, "dolar": 1.17, "euro": 1 },
        "libra": { "iene": 215.22, "real": 6.73, "dolar": 1.35, "euro": 1.15, "libra": 1 },
        "iene": { "real": 0.032, "dolar": 0.0063, "euro": 0.0054, "libra": 0.0047, "iene": 1 }
    }

    const taxa = taxas[selectFor.value][selectFrom.value]
    const convertedValue = inputValue / taxa

    if (selectFrom.value == "dolar") {
        currencyConvertTo.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }

    if (selectFrom.value == "real") {
        currencyConvertTo.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }


    if (selectFrom.value == "euro") {
        currencyConvertTo.innerHTML = new Intl.NumberFormat("en-EU", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    if (selectFrom.value == "iene") {
        currencyConvertTo.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValue)
        
    }

    if (selectFrom.value == "libra") {
        currencyConvertTo.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        
    }

    if (selectFor.value == "real") {
        currencyConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(convertedValue)

    }

    if (selectFor.value == "euro") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-EU", {
            style: "currency",
            currency: "EUR"
        }).format(convertedValue)
    }

    if (selectFor.value == "iene") {
        currencyConverted.innerHTML = new Intl.NumberFormat("jp-JP", {
            style: "currency",
            currency: "JPY"
        }).format(convertedValue)

    }

    if (selectFor.value == "dolar") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(convertedValue)

    }

    if (selectFor.value == "libra") {
        currencyConverted.innerHTML = new Intl.NumberFormat("en-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
        
    }

}


 

function changeCurrency() {
    const imgCurrencyConvetFrom = document.querySelector(".img-currency-convert-from") // img da moeda que será convertida
    const imgCurrencyConvertTo = document.querySelector(".img-currency-converted") //img da moeda que foi convertida
    const titleCurrencyFrom = document.querySelector(".title-currency-from") // titulo da moeda a converter
    const titleCurrencyTo = document.querySelector(".title-currency-to")// titulo da moeda convertida

    if (selectFrom.value == "dolar") {
        titleCurrencyFrom.innerHTML = "Dólar"
        imgCurrencyConvetFrom.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectFrom.value == "real") {
        titleCurrencyFrom.innerHTML = "Real"
        imgCurrencyConvetFrom.src = "./assets/brasil 2.png"
    }

    if (selectFrom.value == "euro") {
        titleCurrencyFrom.innerHTML = "Euro"
        imgCurrencyConvetFrom.src = "./assets/euro.png"
    }

    if (selectFrom.value == "iene") {
        titleCurrencyFrom.innerHTML = "Iene"
        imgCurrencyConvetFrom.src = "./assets/iene.png"

    }
    
    if (selectFrom.value == "libra") {
        titleCurrencyFrom.innerHTML = "Libra"
        imgCurrencyConvetFrom.src = "./assets/libra 1.png"
    }
    
    if (selectFor.value == "libra") {
        titleCurrencyTo.innerHTML = "Libra"
        imgCurrencyConvertTo.src = "./assets/libra 1.png"
    }

    if (selectFor.value == "real") {
        titleCurrencyTo.innerHTML = "Real"
        imgCurrencyConvertTo.src = "./assets/brasil 2.png"
    }

    if (selectFor.value =="dolar") {
        titleCurrencyTo.innerHTML = "Dólar"
        imgCurrencyConvertTo.src = "./assets/estados-unidos (1) 1.png"
    }

    if (selectFor.value == "euro") {
        titleCurrencyTo.innerHTML = "Euro"
        imgCurrencyConvertTo.src = "./assets/euro.png"
    }

    if (selectFor.value == "iene") {
        titleCurrencyTo.innerHTML = "Iene"
        imgCurrencyConvertTo.src = "./assets/iene.png"
    }

    convertValue()
}


selectFor.addEventListener("change", changeCurrency)
selectFrom.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)//entre "" fica o que está ouvindo e depois da vírgula a função que chama esse