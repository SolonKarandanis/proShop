import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from "../store/actions/cartAction";
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";

const PaymentMethod = ({ history }) => {
  const dispatch = useDispatch();
  const { shippingAddress } = useSelector((state) => state.cart);
  if (!shippingAddress) {
    history.push("/shipping");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push("/placeorder");
  };

  return (
    <FormContainer>
      <CheckoutSteps step1 step2 step3 />
      <h1>Payment Method</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="paymentMethod">
          <Form.Label as="legend">Payment Method</Form.Label>
          <Col>
            <Form.Check 
                type="radio"
                label='Paypal or Credit Card'
                id='Paypal'
                name='paymentMethod'
                value={paymentMethod}
                checked
                onChange={(e)=> setPaymentMethod(e.target.value)}/>
            
          </Col>
        </Form.Group>

        <Button type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default PaymentMethod;
