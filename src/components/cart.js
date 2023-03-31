import React from "react";
import moment from "moment";
import Shop from "./shop";
import { Link } from "react-router-dom";

export default class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.cart.length === 0) {
      return (
        <div className="cart">
          {" "}
          <div className="empty">
            Your cart is waiting to be filled.
            <Link to={"/shop"} element={<Shop />}>
              <div className="explore">Keep Exploring</div>
            </Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="cart">
          <div className="cart-top">
            <div className="your-cart">
              <div className="product-list">
                <div className="product-list-title">{`Your Cart ( ${this.props.cart.length})`}</div>
                <div className="sent-by-markando">Will be sent by Markando</div>
                <div className="cart-products">
                  {this.props.cart.map((item) => {
                    return (
                      <div key={item.uniqueId} className="cart-product">
                        <div className="cart-product-top">
                          <div className="cart-product-image">
                            <img src={item.ImageUrl} alt="" />
                          </div>
                          <div className="cart-product-info">
                            <div className="cart-product-info1">
                              {item.ShoeName}
                            </div>
                            <div className="cart-product-info2">
                              {item.ShoeModel}
                            </div>
                            <div className="cart-product-info3">
                              Size: {item.Size}
                            </div>
                            <div className="cart-product-info4">
                              Sold By <em>ASICS</em>
                            </div>
                          </div>
                        </div>
                        <div className="cart-product-bottom">
                          <div>
                            <button
                              onClick={(e) => {
                                this.props.removeFromCart(e, item.price);
                              }}
                              className="remove-item-button"
                            >
                              <i className="fa-regular fa-trash-can"></i>
                              <div id={item.uniqueId}>Remove Item</div>
                            </button>
                          </div>
                          <div></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="estimated-delivery-time">
                <div className="estimated-delivery-time-title">
                  Estimated time of delivery
                </div>
                <div className="estimated-delivery-time-dates">
                  {moment().add(3, "days").format("MMM Do")} -{" "}
                  {moment().add(5, "days").format("MMM Do")}
                </div>
              </div>
              <div className="we-accept">
                <div className="we-accept-title">We accept</div>
                <div className="we-accept-this">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            </div>
            <div className="checkout">
              <div className="total-price">
                <div className="total-price-title">Total price</div>
                <div className="total-price-subtotal">
                  <div>Subtotal</div>
                  <div>${this.props.cartTotal}</div>
                </div>
                <div className="total-price-delivery">
                  <div>Delivery</div>
                  <div>$0</div>
                </div>
                <div className="total-price-total">
                  <div>Total {"(incl. tax)"}</div>
                  <div>${this.props.cartTotal}</div>
                </div>

                <div>
                  <button onClick={() => {
                    alert("This is not a real webshop")}
                  } className="total-price-button">TO CHECKOUT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
