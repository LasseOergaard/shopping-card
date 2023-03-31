import React, { Component } from "react";
import { Link } from "react-router-dom";
import picture1 from "../images/picture1.webp";
import picture2 from "../images/picture2.webp";
import EX89Shoes from "./subcomponents/EX89";


export default class Home extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="home">
        <div className="spring-discount">
          <div className="spring-discount-top">
            <div className="spring-discount-top-left">
              <div className="spring-text">
                <div className="spring-text1">Spring Sale Is Here</div>
                <div className="spring-text2">
                  Save up to 50% on new clothing
                </div>
                <Link to={"/shop"}>
                  <div className="spring-text3">Save now →</div>
                </Link>
              </div>
            </div>
            <div className="spring-discount-top-right">
              <img className="spring-discount-img" src={picture1} alt="" />
            </div>
          </div>
          <div className="spring-discount-bottom">
            <div className="spring-discount-bottom1">Discover Sales:</div>
            <Link to={"/stop"}>
              <div className="spring-discount-bottom2">Shop</div>
            </Link>
          </div>
        </div>

        <div className="ex">
        <div className="ex-top">
            <div className="ex-top-left">
              <div className="ex-text">
                <div className="ex-text1">EX89™</div>
                <div className="ex-text2">
                  Play Your Games
                </div>
                <div className="ex-text3">
                  Nothing feels better than to show your confidence.
                </div>
                <Link to={"/shop"}>
                  <div className="ex-text4">Buy now →</div>
                </Link>
              </div>
            </div>
            <div className="ex-top-right">
              <img className="ex-img" src={picture2} alt="" />
            </div>
          </div>
          <div className="ex-bottom">
            <EX89Shoes shoes={this.props.shoes}/>
          </div>
        </div>
      </div>
    );
  }
}
