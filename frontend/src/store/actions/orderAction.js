import axios from 'axios';
import { logout } from './userActions'

export const createOrder = (order) => async (dispatch,getState) => {
    const {userLogin:{userInfo}}= getState();
    try{
        dispatch({type: 'ORDER_CREATE_REQUEST'})
        const config ={
            headers:{
                'Content-type':'Application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const {data} = await axios.post(`/api/orders`,
            order,
            config
        );
        dispatch({
            type:'ORDER_CREATE_SUCCESS',
            payload: data
        })
    }catch(err){
        dispatch({
            type: 'ORDER_CREATE_FAIL',
            payload: err.response && err.response.data.message ? err.response.data.message : err.message
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_DETAILS_REQUEST",
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders/${id}`, config)
  
      dispatch({
        type: "ORDER_DETAILS_SUCCESS",
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: "ORDER_DETAILS_FAIL",
        payload: message,
      })
    }
  }
  
  export const payOrder = (orderId, paymentResult) => async (
    dispatch,
    getState
  ) => {
    try {
      dispatch({
        type: "ORDER_PAY_REQUEST",
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/orders/${orderId}/pay`,
        paymentResult,
        config
      )
  
      dispatch({
        type: "ORDER_PAY_SUCCESS",
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: "ORDER_PAY_FAIL",
        payload: message,
      })
    }
  }
  
  export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_DELIVER_REQUEST",
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.put(
        `/api/orders/${order._id}/deliver`,
        {},
        config
      )
  
      dispatch({
        type: "ORDER_DELIVER_SUCCESS",
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: "ORDER_DELIVER_FAIL",
        payload: message,
      })
    }
  }
  
  export const listMyOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_LIST_MY_REQUEST",
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders/myorders`, config)
  
      dispatch({
        type: "ORDER_LIST_MY_SUCCESS",
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: "ORDER_LIST_MY_FAIL",
        payload: message,
      })
    }
  }
  
  export const listOrders = () => async (dispatch, getState) => {
    try {
      dispatch({
        type: "ORDER_LIST_REQUEST",
      })
  
      const {
        userLogin: { userInfo },
      } = getState()
  
      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }
  
      const { data } = await axios.get(`/api/orders`, config)
  
      dispatch({
        type: "ORDER_LIST_SUCCESS",
        payload: data,
      })
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      if (message === 'Not authorized, token failed') {
        dispatch(logout())
      }
      dispatch({
        type: "ORDER_LIST_FAIL",
        payload: message,
      })
    }
  }
