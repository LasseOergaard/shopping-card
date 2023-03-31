import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <nav className="navigation">
        <div className="nav-top">
          <div>
            EVERYBODY'S FAVORITE <em>BRANDS</em>
          </div>
          <div>
            <em>FREE</em> RETURNING AND DELIVERY
          </div>
          <div>
            <em>100 DAYS</em> RIGHT TO RETURN
          </div>
        </div>
        <div>
          <ul className="navigation-links">
            <div className="navigation-logo">Markando</div>
            <Link to={"/"}>
              <li className="navigation-link">Home</li>
            </Link>
            <Link to={"/shop"}>
              <li className="navigation-link">Shop</li>
            </Link>
            <Link className="relative cart-link" to={"/cart"}>
              <li className="navigation-link">
                <i className="fa-solid fa-bag-shopping"></i>
              </li>
              <div className="cart-length">{this.props.cartLength}</div>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
