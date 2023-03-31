import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Shop extends Component {


  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="shop">
        <ul className="shoe-grid">
          {this.props.shoes.map(shoe => {
            return (
              <Link key={shoe.id} to={`/shop/${shoe.id}`}>
              <li>
                <img className="shoe-image" src={shoe.ImageUrl} alt="" />
                <div>
                  <div className="shoe-name-shop">{shoe.ShoeName}</div>
                  <div className="shoe-model-shop">{shoe.ShoeModel}</div>
                  <div className="shoe-price-shop">${shoe.price}</div>
                </div>
              </li>
              </Link>
            )
          })}
        </ul>
      </div>
    );
  }
}
