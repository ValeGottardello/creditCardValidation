import React, { useEffect, useRef } from "react";
import { useState } from "react";
import checkBankName from "./checkBankName.js";
import checkDetails from "./checkDetails";


const PaymentValidation = () => {
  const [validCard, setvalidCard] = useState({})
  const [error, setError] = useState("")
  const [bankName, setbankName] = useState("")
  const isFirstInput = useRef(true)
  const cardSuccessfull = Object.keys(validCard).length === 5
  useEffect(() => {

    if (isFirstInput.current) {
      isFirstInput.current = validCard === "" 
      return
    }

  },[])

  const handleChange = (event) => {
    setError("")

    if (event.target.value === "" && event.target.name === "cardNumber" ) {
      setbankName("")
    }

    if (event.target.value !== "") {
      const checked = checkDetails(event)
      checked.error ? setError(checked.error): setvalidCard(prevState => ({ ...prevState, ...checked }))


      if (event.target.name === "cardNumber" && event.target.value.length <= 4 && bankName === "") {
        setError("")
        const name = checkBankName(event.target.value)
        name.name ? setbankName(name.name) : setError(name) 
      }
    }
  }

  
  return (
    <div className=" p-6 max-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <section>
          <article className="flex-col items-center">
            <h3 className="text-xl font-medium text-black my-5">Card Details</h3>
            <div className="debit-card-body">
                <p className="text-blue-600 debit-card-bank my-5">{bankName ? bankName : "Bank Name"}</p>
            </div>
          </article>
        <section>
          <article>
            <form onChange={handleChange} className="grid grid-cols-2 gap-4 ">
              <div className="flex-1">
                <input name="cardNumber" placeholder="Card Number" required />         
              </div>
              <div className="flex-1">
                <input placeholder="Name On Card" type="text" name="cardName" required />
              </div>
              <div className="flex-1">
                 <input maxLength="5" placeholder="MMAA" type="month" name="cardDate" required />
              </div>
              <div  className="flex-1">
                  <input placeholder="CVV" name="cardCVV" required />
              </div>
              {error && (
                    <p className="invalid-text text-red-500">
                      {error}
                    </p>
                  )}
              {cardSuccessfull && (
                    <p className="invalid-text text-green-600 w-fit">
                      Valid card details
                    </p>
                  )}
            </form>
          </article>
        </section>
      </section>
    </div>
  );
};

export default PaymentValidation;
