export const initialState = {
  basket: [],
  user: null
};

export const getBasketTotal = (basket) => {
  basket?.reduce((amount, item) => item.price + amount, 0)
}


const reducer = (state, action) => {
  console.log(state.basket)
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state, /* cập nhật lại tất cả trạng thái của state*/
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      const newbasket = [...state.basket]
      console.log(newbasket)
      newbasket.splice(action.payload, 1)
      // cach 2 
      //
      const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can remove product (id: ${action.id}) as its not in basket!`)
      }
      return {
        ...state,
        basket: newbasket
      }
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    default:
      return state;

  }
};



export default reducer;