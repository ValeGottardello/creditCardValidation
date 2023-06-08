import React from "react";
import { useState } from "react";

const PaymentValidation = () => {
  const [validCard, setvalidCard] = useState({})
  // const [cardDetails, setcardDetails] = useState({})
  const [error, setError] = useState("")

  const handleChange = ({target}) => {
    setError("")
    if(target.name === "cardNumber") {
      if (target.value.split("").length === 16) {
        setvalidCard({...validCard, [target.name] : target.value})
      } else {
        setError("Invalid Card Number")
      }
    }

    if (target.name === "cardName") {
      if (target.value.test(/^[A-Za-z]+$/)) {
        setvalidCard({...validCard, [target.name] : target.value})
      } else {
        setError("Invalid Card Name")
      }
    }

    if (target.name === "cardDateMonth") {
      if (Number(target.value) < 12 || Number(target.value) > 0 ) {
        setvalidCard({...validCard, [target.name] : target.value})
      } else {
        setError("Invalid Month")
      }
    }

    if (target.name === "cardDateYear") {
      let year = target.value.split("").length === 4
      const currentDate = new Date()
      const currentYear = currentDate.getFullYear()
      if (year && Number(target.value) > currentYear && Number(target.value) < currentYear - 3) {
        setvalidCard({...validCard, [target.name] : target.value})
      } else {
        setError("Invalid Year")
      }
    }

    if (target.name === "cardCVV") {
        let digits = target.value.split("").length === 3
        if (digits) {
          setvalidCard({...validCard, [target.name] : target.value})
        } else {
          setError("Invalid CVV")
        }
    }

    
  }
  const handleSubmit = (evt) => {
    evt.preventDefault()
    // setcardDetails(validCard)
  }
  
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
                <input
                  name="cardNumber"
                  placeholder="Card Number"
                  required
                />
               {error && (
                  <p className="invalid-text">
                    {error}
                  </p>
                )}
              </div>
              <div className="flex-1">
                <input placeholder="Name On Card" type="text" name="cardName"  required />
                {error && (
                  <p>
                    {error}
                  </p>
                )}
              </div>
              <div className="flex-1">
                 <input placeholder="Expiry Month" name="cardDateMonth" required />
                {error && (
                  <p className="invalid-text">
                    {error}
                  </p>
                )}
              </div>
              <div className="flex-1">
                  <input placeholder="Expiry Year" name="cardDateYear"  required/>
                  {error && (
                    <p >
                      {error}
                    </p>
                  )}
              </div>
              <div  className="flex-1">
                  <input placeholder="CVV" name="cardCVV" required />
                  {error && (
                    <p className="invalid-text">
                      {error}
                    </p>
                  )}
              </div>
              <button
                  className="flex-1 justify-self-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                  disabled={!error ? false : true}>
                  Submit
              </button>
            </form>
          </article>
        </section>
      </section>
    </div>
  );
};

export default PaymentValidation;
