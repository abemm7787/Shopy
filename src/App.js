import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import axios from "axios";
import PlantList from "./components/PlantList";
import ShoppingCart from "./components/ShoppingCart";
import CheckoutForm from "./components/CheckoutForm";
import "antd/dist/antd.css";
import { FaGit, FaGithub, FaGitHub, FaCartPlus } from "react-icons/fa";
import { AiOutlineHome } from "react-icons/ai";
import Landing from "./components/Landing"
import "./App.css";

function App() {
  // array of plants that have been added to the cart
  const [cart, setCart] = useState([]);
  console.log(cart)
  // add a plant to the cart
  const addToCart = (plant) => {
    setCart([...cart, plant]);
  };

  // remove a plant from the cart
  const removeFromCart = (plant) => {
    setCart(cart.filter((p) => p.id !== plant.id));
  };






  let message
  if (cart.length === 4) {
    message = <div className="testcolor2"> Exceed Max Limit </div>

    console.log(this.state.box)
  }


  else {
    message = <div className="testcolor"> Welecome Guest</div>
  }

  return (
    <div className="Shopy">
      <Router>
<div>
{cart.length >= 5 && <h1 className="testcolor2"> Exceed Max Limit </h1>}


</div>



        <NavLink exact to="/">
          <AiOutlineHome
            style={{ color: "blue", size: "50px" }}
            className="homeButton"
          >
            <a href="/" className="homeButton">
              Home
            </a>
          </AiOutlineHome>
        </NavLink>

        <nav className="container">
          <div class="text-box">
            <NavLink to="/cart">
              <a href="/cart" class="btn ">
                Cart
                <h3 data-testid="cart-badge2" className="cart-badge">
                  <FaCartPlus className="fa-button-carts " />
                  {cart.length > 0 && cart.length}
                </h3>
              </a>
            </NavLink>
          </div>

          <h1>
            Shopy <span role="img"></span>
          </h1>


        </nav>

        <Route
          exact
          path="/"
          render={() => <PlantList addToCart={addToCart} />}
        />

        <Route
          path="/cart"

          render={(props) => (
            <ShoppingCart
              {...props}
              cart={cart}
              removeFromCart={removeFromCart}
            />



          )}
        />
        <Route path="/checkout" component={CheckoutForm} />


        <Route path="/landing" component={Landing} />

      </Router>
    </div>
  );
}

export default App;