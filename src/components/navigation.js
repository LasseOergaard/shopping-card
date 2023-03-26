import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
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
            <Link to={"/"}>
              <li className="navigation-link">Home</li>
            </Link>
            <Link to={"/about"}>
              <li className="navigation-link">About</li>
            </Link>
            <div className="navigation-logo">Markando</div>
            <Link to={"/shop"}>
              <li className="navigation-link">Shop</li>
            </Link>
            <Link to={"/shop"}>
              <li className="navigation-link">News</li>
            </Link>
          </ul>
        </div>
      </nav>
    );
  }
}
