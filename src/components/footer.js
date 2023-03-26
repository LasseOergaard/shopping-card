import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="1">
          <div className="footer-title">Help & Contact</div>
          <div>All help</div>
          <div>Order</div>
          <div>Order with creditcard</div>
          <div>Return</div>
          <div>Signup</div>
        </div>

        <div className="2">
          <div>Payment & security</div>
          <div>Delivery</div>
          <div>How to Return</div>
          <div>Sign up for newsletter</div>
        </div>

        <div className="3">
          <div className="footer-title">Discount & Gifcards</div>
          <div>Giftcards</div>
          <div>Redeem giftcard</div>
          <div>Questions about gidtcards?</div>
          <div>Giftcards as a business</div>
        </div>

        <div className="4">
          <div className="footer-title">About us</div>
          <div>Website</div>
          <div>Jobs & Careers</div>
          <div>Press</div>
          <div>Investors</div>
        </div>

        <div className="5">
          <div className="footer-title">Fast Delivery</div>
          <div className="fast-delivery">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="6">
          <div className="footer-title">Payment Options</div>
          <div className="payment-options">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        <div className="7">
          <div className="footer-title">Your Benefits</div>
          <div>Free delivery</div>
          <div>Free Return</div>
          <div>100 days right of return</div>
        </div>

        <div className="8">
          <div className="footer-title">Service</div>
          <div>Connected retail</div>
          <div>Marketing services</div>
          <div>Zircle</div>
          <div>More information</div>
        </div>
      </div>
    );
  }
}
