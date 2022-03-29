import React from 'react'
import "./Product.css"

import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from '../StateProvider/StateProvider';

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();


  const addToBasket = () => {
    // dispatch the item into the data layer 
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }

  return (
    <div className="product">
      <div className="product__info">
        <p> {title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating).fill().map((_, i) => (<p><StarIcon /></p>))}
        </div>
      </div>
      <img
        className="product__img"
        src={image} />
      <button onClick={addToBasket} className="product__btn">Add to bucket</button>
    </div>

  )
}

export default Product