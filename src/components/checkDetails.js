export default function checkDetails ({ target }) {

    let result = {}

    if (target.name === "cardNumber") {
        if (target.value.split("").length === 16) {
          result = {...result, [target.name] : target.value}
        } else {
          result = {error : "Insert 16 digits"}
        }
    }
    if (target.name === "cardName") {
        let cleanInput = target.value
                                .split("")
                                .map(name => name.trim())
                                .join("")

        if ((/^[A-Za-z]+$/).test(cleanInput)) {
          result = {...result, [target.name] : target.value}
        } else {
          result = {error : "Invalid Card Name"}
        }
    }
  

    if (target.name === "cardDate") {

        const [year, month] = target.value.split("-")  
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear() 
        const currentMonth = currentDate.getMonth() 
        const nextThreeYears = currentYear + 3 

        if ((Number(year) < nextThreeYears && Number(year) > currentYear) || (Number(year) === currentYear && Number(month) > currentMonth && Number(year) < nextThreeYears))  {
          result = {...result, "month" : month, "year" : year}
        } else {
          result = {error : "Invalid Date"}
        }

    }

    if (target.name === "cardCVV") {
        let digits = target.value.split("").length === 3

        if (digits) {
          result = {...result, [target.name] : target.value}
        } else {
          result = {error : "Invalid CVV"}
        }
    }
  
    return result
}