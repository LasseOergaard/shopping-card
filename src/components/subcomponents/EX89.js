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

    this.state = {
      shoes: [
        {
          ShoeName: "ASICS SportStyle",
          ShoeModel: "EX89 UNISEX - Sneakers - White/Illusion Blue",
          price: 129,
          ImageUrl: shoe1,
          id: "4f57ec044cbc496c849a4a61b52499ed",
        },
        {
          ShoeName: "ASICS SportStyle",
          ShoeModel: "EX89 UNISEX - Sneakers - White/French Green",
          price: 129,
          ImageUrl: shoe2,
          id: "c9b897b4e67e41ad9419b5d8b247f492",
        },
        {
          ShoeName: "ASICS SportStyle",
          ShoeModel: "EX89 UNISEX - Sneakers - White/Cream",
          price: 119,
          ImageUrl: shoe3,
          id: "37305c05a24b43b2a1774e55d3ef1e67",
        },
        {
          ShoeName: "ASICS SportStyle",
          ShoeModel: "EX89 UNISEX - Sneakers - White/Habanero",
          price: 99,
          ImageUrl: shoe4,
          id: "1aab7570f7db4304b5f47ff39f77f840",
        },
      ],
    };
  }
  

  render() {
    return (
      <div className="EX89-shoes">
        <ul className="shoe-grid">
          {this.state.shoes.map((shoe) => {
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

