import { async } from "@firebase/util";
import { Card } from "@material-ui/core";
import {
  PaymentElement,
  useStripe,
  useElements,
  CardElement
} from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from 'react'
import CurrencyFormat from "react-currency-format";
import { Link, Navigate, useNavigate } from 'react-router-dom'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { getBasketTotal } from "../StateProvider/Reducer";
import { useStateValue } from '../StateProvider/StateProvider'
import Subtotal from "../Subtotal/Subtotal";
import './Payment.css'




function Payment() {

  const navigate = useNavigate()

  const [{ basket, user }, dispatch] = useStateValue()
  const sum = basket.reduce((total, item) => total + item.price, 0)

  const [succeeded, setSucceeded] = useState(false)
  const [processing, setProcessing] = useState('')

  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisable] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    // generate the special stripe secret which allows us to charge a customer
    const getClientSecret = async () => {
      const response = await axios({
        method: 'post',
        url: `/payments/create?total=${getBasketTotal(basket) * 100}`
      });
      setClientSecret(response.data.clientSecret);
    }
  }, [basket])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true)

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
      //  paymentIntent = payment confimation
      setSucceeded(true)
      setError(null)
      setProcessing(false)
      navigate('/orders')
    })
  }

  const handleChange = (e) => {
    // lintent for changes in the cardElement
    //  and display any errors as the customer types their card details
    setDisable(e.empty);
    setError(e.error ? e.error.message : "");
  }

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
          <Link to="/checkout"> {basket?.length} items</Link>
          )
        </h1>
        {/*Payment section - delivery address */}
        <div className="payment__section">
          <h3 className="payment__section-title ">{user?.email}</h3>
          <div className="payment__section-address">
            <p>6 Đ. số 3, P. Bình An, Quận 2, Thành phố Hồ Chí Minh </p>
            <p>Các giờ: Đang mở cửa   Thêm giờ đầy đủ </p>
          </div>
        </div>
        {/* Payment section - review items */}
        <div className="payment__section">
          <h3 className="payment__section-title">
            Review items and delivery </h3>
          <div className="payment__section-item">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>

          {/* CHeckoutproduct */}
        </div>
        {/* Payment section -payment method */}
        <div className="payment__section">
          <div className="payment__section-title">
            <h3>Payment method</h3>
          </div>
          <div className="payment__section-cart">
            {/*stripe cart detail */}

            <form id="payment-form" onSubmit={handleSubmit}>

              <CardElement id="payment-element" onChange={handleChange} />
              {/* <PaymentElement /> */}
              <div className="payment__priceContainer">

                <CurrencyFormat
                  renderText={(vaule) => (
                    <>
                      <p>
                        Order total: <strong>{sum}</strong>
                      </p>
                      {/* <small className="subtotal__gift">
                        <input type="checkbox" />
                        <p>This order contains a gift </p>
                      </small> */}

                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy now"}</span>
                </button>

              </div>
              {error && <div>{error}</div>}
              {/* <button disabled={isLoading || !stripe || !elements} id="submit">
                <span id="button-text">
                  {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                </span>
              </button>
              {/* Show any error or success messages */}
              {/* {message && <div id="payment-message">{message}</div>} */}
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Payment