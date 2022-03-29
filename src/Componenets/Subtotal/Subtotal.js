import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from "react-currency-format"
import { useStateValue } from '../StateProvider/StateProvider'
import { getBasketTotal } from '../StateProvider/Reducer'
import { useNavigate } from 'react-router-dom'

function Subtotal() {
  const navigate = useNavigate()
  const [{ basket }, dispatch] = useStateValue()
  const sum = basket.reduce((total, item) => total + item.price, 0)
  return (
    <div className="subtotal">

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal( {basket.length} items )):  <strong>{sum}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              <p>This order contains a gift </p>
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button onClick={e => navigate('/payment')} className="subtotal__btn">Procecced to Checkout</button>
    </div>
  )
}

export default Subtotal