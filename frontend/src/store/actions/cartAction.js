import axios from 'axios';

export const addToCart = (id,qty) => async (dispatch,getState) => {
    try{
        const {data} = await axios.get(`/api/products/${id}`);
        dispatch({
            type:'CART_ADD_ITEM',
            payload: {
                product: data._id,
                name:data.name,
                image: data.image,
                price: data.price,
                countInStock: data.countInStock,
                qty
            }
        })

        localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
    }catch(err){
        dispatch({
            type: 'CARD_FAIL',
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const removeFromCart = (id) => (dispatch,getState)=>{
    dispatch({
        type: 'CART_REMOVE_ITEM',
        payload:id
    });
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}

export const saveShippingAddress = (data) => (dispatch)=>{
    dispatch({
        type: 'CART_SAVE_SHIPPING_ADDRESS',
        payload:data
    });
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}

export const savePaymentMethod = (data) => (dispatch)=>{
    dispatch({
        type: 'CART_SAVE_SHIPPING_PAYMENT_METHOD',
        payload:data
    });
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}