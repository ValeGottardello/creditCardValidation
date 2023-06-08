import React, { useEffect, useRef } from "react";
import { useState } from "react";
import checkDetails from "./checkDetails";


const PaymentValidation = () => {
  const [validCard, setvalidCard] = useState({})
  const [cardDetails, setcardDetails] = useState({})
  const [error, setError] = useState("")
  const isFirstInput = useRef(true)

  useEffect(() => {
    // setError("")
    if (isFirstInput.current) {
      isFirstInput.current = validCard == "" 
      return
    }

  },[])

  const handleChange = (event) => {
    setError("")
    if (event.target.value !== "") {
      const checked = checkDetails(event)
      checked.error ? setError(checked.error): setvalidCard(checked)
    }
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    setcardDetails(validCard)
    setError("")
  }

  console.log(validCard, error)
  
  return (
    <div className=" p-6 max-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <section>
        <article>
          <h3 className="text-xl font-medium text-black">Card Details</h3>
          <br />
          <div className="debit-card-body">
            <p className="text-slate-500 debit-card-bank">Bank Name</p>
          </div>
        </article>
        <section>
          <article>
            <form onSubmit={handleSubmit} onChange={handleChange} className="grid grid-cols-2 gap-4 ">
              <div className="flex-1">
                <input name="cardNumber" placeholder="Card Number" required />         
              </div>
              <div className="flex-1">
                <input placeholder="Name On Card" type="text" name="cardName" required />
              </div>
              <div className="flex-1">
                 <input maxLength="5" placeholder="MMAA" name="cardDate" required />
              </div>
              <div  className="flex-1">
                  <input placeholder="CVV" name="cardCVV" required />
              </div>
              <button
                  className="flex-1 justify-self-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={!error ? false : true}>
                  Submit
              </button>
              {error && (
                    <p className="invalid-text text-red-500">
                      {error}
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
