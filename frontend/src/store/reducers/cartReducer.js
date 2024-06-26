export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  const item = action.payload;
  switch (action.type) {
    case "CART_ADD_ITEM":
      const existItem = state.cartItems.find((x) => x.product === item.product);
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.product === existItem.product ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case "CART_REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== item),
      };
    case "CART_SAVE_SHIPPING_ADDRESS":
      return {
        ...state,
        shippingAddress: action.payload,
      };
    case "CART_SAVE_SHIPPING_PAYMENT_METHOD":
      return {
        ...state,
        paymentMethod: action.payload,
      };
    case "CARD_FAIL":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
