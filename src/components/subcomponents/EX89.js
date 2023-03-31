/* Images */
import shoe1 from "../../images/shoe1.webp";
import shoe2 from "../../images/shoe2.webp";
import shoe3 from "../../images/shoe3.webp";
import shoe4 from "../../images/shoe4.webp";

/* Libraries */
import React, { Component } from "react";

/* Other */
import { Link } from "react-router-dom";


export default class EX89Shoes extends Component {
  constructor(props) {
    super(props);
  }
  

  render() {
    return (
      <div className="EX89-shoes">
        <ul className="shoe-grid">
          {this.props.shoes.map((shoe) => {
            return (
              <Link key={shoe.id} to={`/shop/${shoe.id}`}>
              <li>
                <img className="shoe-image" src={shoe.ImageUrl} alt="" />
                <div>
                  <div className="shoe-name">{shoe.ShoeName}</div>
                  <div className="shoe-model">{shoe.ShoeModel}</div>
                  <div className="shoe-price">${shoe.price}</div>
                </div>
              </li>
              </Link>
              
            )
          })}
        </ul>
        <div className="asics-shoutout">
          <button>＋ Follow</button>
          <div>ASICS</div>
        </div>
      </div>
    );
  }
}

