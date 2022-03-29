import React from 'react'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../StateProvider/StateProvider'
import Subtotal from '../Subtotal/Subtotal'
import "./Checkout.css"

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()

  console.log(basket)
  return (

    <div className="checkout__container">
      <div className="checkout">
        <div className="checkout__left">
          <div className="checkout__img">
            <img
              src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg" />
          </div>
          <div>
            <h3>Hello : {user?.email}</h3>
            <h2 className="checkout__title"> Your shopping Basket</h2>
            <div className="checkout__item">

              {basket.map((item, index) => (
                < CheckoutProduct key={index}
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>




          </div>
        </div>
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  )
}

export default Checkout