import React from 'react'
import "./CheckoutProduct.css"
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider/StateProvider';

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue()

  const removeFromBasket = (id) => {
    // const newBasket = [...basket];

    // newBasket.filter((item) => (item.id !== id))
    dispatch({
      type: "REMOVE_FROM_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
    // return newBasket
  }
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>  $ </small>
          <strong>{price}</strong>
        </p>
        <p className="checkoutProduct__rating">
          {Array(rating).fill().map((_, i) => (<p><StarIcon /></p>))}
        </p>
        <button onClick={() => removeFromBasket(id)} className="checkoutProduct__btn">Remove from the Basket</button>
      </div>

    </div>
  )
}

export default CheckoutProduct