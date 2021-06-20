import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Container } from "react-bootstrap";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./screens/Home";
import ProductDetails from "./screens/ProductDetails";
import Cart from "./screens/Cart";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Profile from "./screens/Profile";
import Shipping from "./screens/Shipping";
import PaymentMethod from "./screens/PaymentMethod";
import PlaceOrder from "./screens/PlaceOrder";
import Order from "./screens/Order";
import OrderList from "./screens/OrderList";
import UserList from "./screens/UserList";
import UserEdit from "./screens/UserEdit";
import ProductList from "./screens/ProductList";
import ProductEdit from "./screens/ProductEdit";

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route exact path="/" component={Home} />
          <Route path="/search/:keyword" component={Home} />
          <Route path="/page/:pageNumber" component={Home} />
          <Route path="/search/:keyword/page/:pageNumber" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/shipping" component={Shipping} />
          <Route path="/payment" component={PaymentMethod} />
          <Route path="/placeorder" component={PlaceOrder} />
          <Route path="/order/:id" component={Order} />
          <Route path="/register" component={Register} />
          <Route path="/profile" component={Profile} />
          <Route path="/product/:id" component={ProductDetails} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/admin/userlist" component={UserList} />
          <Route path="/admin/user/:id/edit" component={UserEdit} />
          <Route path="/admin/productlist" component={ProductList} />
          <Route path="/admin/product/:id/edit" component={ProductEdit} />
          <Route path="/admin/orderlist" component={OrderList} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
