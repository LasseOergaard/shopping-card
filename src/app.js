/* Libraries */
import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import uniqid from "uniqid";

/* Components */
import Cart from "./components/cart";
import Footer from "./components/footer";
import Home from "./components/home";
import ItemPreview from "./components/itemPreview";
import Navigation from "./components/navigation";
import Shop from "./components/shop";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemToAdd: {},
      cart: [],
      cartTotal: 0,
    };

    this.requireSize = this.requireSize.bind(this);
    this.removeRequire = this.removeRequire.bind(this);
    this.checkSize = this.checkSize.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  requireSize() {
    let chooseSizeButton = document.querySelector(".choose-size-button");
    let sizings = document.querySelector(".sizings");
    chooseSizeButton.classList.remove("choose-size-button-inactive");
    chooseSizeButton.classList.add("choose-size-button-active");
    chooseSizeButton.classList.add("require-size");
    sizings.classList.remove("sizings-inactive");
    sizings.classList.add("sizings-active");
  }

  removeRequire() {
    let chooseSizeButton = document.querySelector(".choose-size-button");
    chooseSizeButton.classList.remove("require-size");
  }

  checkSize() {
    if (
      document.querySelector(".choose-size-button-text").innerText ===
      "Choose Size"
    ) {
      return false;
    } else {
      return true;
    }
  }

  async addToCart(item, size) {
    if (this.checkSize()) {
      await this.setState({
        itemToAdd: {
          ShoeName: item.ShoeName,
          ShoeModel: item.ShoeModel,
          ImageUrl: item.ImageUrl,
          id: item.id,
          price: item.price,
          Size: size,
          uniqueId: uniqid(),
        },
      });
      this.setState({
        cart: [...this.state.cart, this.state.itemToAdd],
      });
    } else {
      this.requireSize();
    }

    this.setState({
      cartTotal: this.state.cartTotal + item.price,
    });
  }

  async removeFromCart(e, priceToRemove) {
    this.setState({
      cart: this.state.cart.filter((item) => {
        return item.uniqueId !== e.target.id;
      }),
      cartTotal: this.state.cartTotal - priceToRemove,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Navigation cartLength={this.state.cart.length} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route
            path="/shop/:id"
            element={<ItemPreview handleAddToCart={this.addToCart} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cart={this.state.cart}
                removeFromCart={this.removeFromCart}
                cartTotal={this.state.cartTotal}
              />
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}
