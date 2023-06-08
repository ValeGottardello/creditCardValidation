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
      console.log(target.value)
        if ((/^[A-Za-z]+$/).test(target.value)) {
          result = {...result, [target.name] : target.value}
        } else {
          result = {error : "Invalid Card Name"}
        }
    }
  


    if (target.name === "cardDate") {
      let [month, year] = target.value.slice(0,2)
      console.log(month, year)
      if (typeof [month, year] === "number") {
        console.log(target.value)
        const currentDate = new Date()
        const currentYear = currentDate.getFullYear() % 100
        const nextThreeYears = currentYear + 3 

        if (Number(month) <= 12 && Number(month) > 0) {
          result = {...result, "month" : month}
        } else if (Number(year) > currentYear && Number(year) < nextThreeYears) {
          result = {...result, "year" : year}
        } else {
          result = {error : "Invalid Date"}
        }

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