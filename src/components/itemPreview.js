/* Libraries */
import React, { Component } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import shoe1 from "../images/shoe1.webp";
import shoe2 from "../images/shoe2.webp";
import shoe3 from "../images/shoe3.webp";
import shoe4 from "../images/shoe4.webp";

let currentItem;
let shoes = [
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
];

function zoom(e) {
  let offsetX;
  let offsetY;

  var zoomer = e.target;
  console.log(e.target);
  if (e.offsetX) {
    offsetX = e.offsetX;
  } else {
    console.log(e);
    offsetX = e.pageX;
  }

  if (e.offsetY) {
    offsetY = e.offsetY;
  } else {
    offsetY = e.pageY;
  }

  let x = (offsetX / zoomer.offsetWidth) * 100;
  let y = (offsetY / zoomer.offsetHeight) * 100;
  zoomer.style.backgroundPosition = x + "% " + y + "%";
}

function getItem(id) {
  shoes.forEach((shoe) => {
    if (shoe.id === id) {
      currentItem = shoe;
    }
  });
}

export default function ItemPreview() {
  const searchParams = useParams();
  getItem(searchParams.id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="item-preview">
      <div className="current">
        <div className="current-side">
          <div className="current-side-image"></div>
          <div className="current-side-image"></div>
          <div className="current-side-image"></div>
          <div className="current-side-image"></div>
        </div>
        <div className="contain">
          <img
            className="current-item-image"
            src={currentItem.ImageUrl}
            alt="#"
          />
        </div>
      </div>
      <div className="current-item-info">
        <div className="current-item-name">{currentItem.ShoeName}</div>
        <div className="current-item-model">{currentItem.ShoeModel}</div>
        <div className="current-item-price">${currentItem.price}</div>
      </div>
    </div>
  );
}
