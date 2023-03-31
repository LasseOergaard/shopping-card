/* Libraries */
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import shoe1 from "../images/shoe1.webp";
import shoe2 from "../images/shoe2.webp";
import shoe3 from "../images/shoe3.webp";
import shoe4 from "../images/shoe4.webp";

let currentItem;
let similarItems;
let currentSize;

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

function getItem(id) {
  shoes.forEach((shoe) => {
    if (shoe.id === id) {
      currentItem = shoe;
    }
  });
}

function getSimilarItemsList() {
  similarItems = [currentItem];

  shoes.forEach((shoe) => {
    if (shoe !== currentItem) {
      similarItems.push(shoe);
    }
  });
}

function OpenSize() {
  let chooseSizeButton = document.querySelector(".choose-size-button");
  let sizings = document.querySelector(".sizings");
  chooseSizeButton.classList.toggle("choose-size-button-inactive");
  chooseSizeButton.classList.toggle("choose-size-button-active");
  sizings.classList.toggle("sizings-inactive");
  sizings.classList.toggle("sizings-active");
  removeRequire();
}

function setSize(size) {
  let textToChange = document.querySelector(".choose-size-button-text");
  let chooseSizeButton = document.querySelector(".choose-size-button");
  let sizings = document.querySelector(".sizings");
  chooseSizeButton.classList.toggle("choose-size-button-inactive");
  chooseSizeButton.classList.toggle("choose-size-button-active");
  sizings.classList.toggle("sizings-inactive");
  sizings.classList.toggle("sizings-active");
  textToChange.innerText = `Size ${size}`;
  currentSize = size
  removeRequire();
}

function changeImageOnHover(e, item) {
  let imageToBeChanged = document.querySelector(".current-item-image");
  imageToBeChanged.src = e.target.src;

  /* Change model text */
  let modelText = document.querySelector(".similar-item-model");
  modelText.innerText = item.ShoeModel;
}

function removeImageOnLeave(e, item) {
  let imageToBeChanged = document.querySelector(".current-item-image");
  imageToBeChanged.src = currentItem.ImageUrl;

  /* Change model text */
  let modelText = document.querySelector(".similar-item-model");
  modelText.innerText = currentItem.ShoeModel;
}

function resetSize() {
  let textToChange = document.querySelector(".choose-size-button-text");
  let chooseSizeButton = document.querySelector(".choose-size-button");
  let sizings = document.querySelector(".sizings");
  chooseSizeButton.classList.add("choose-size-button-inactive");
  chooseSizeButton.classList.remove("choose-size-button-active");
  sizings.classList.add("sizings-inactive");
  sizings.classList.remove("sizings-active");
  textToChange.innerText = `Choose Size`;
  removeRequire();
}

function removeRequire() {
  let chooseSizeButton = document.querySelector(".choose-size-button");
  chooseSizeButton.classList.remove("require-size");
}

export default function ItemPreview(props) {
  const searchParams = useParams();
  getItem(searchParams.id);
  getSimilarItemsList();

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
        <div className="similar-items">
          <div className="similar-item-model">
            Model: <b>{currentItem.ShoeModel}</b>
          </div>
          <div className="similar-items-images">
            {similarItems.map((item) => {
              return (
                <Link key={item.id} to={`/shop/${item.id}`}>
                  <img
                    src={item.ImageUrl}
                    alt="#"
                    onMouseEnter={(e) => {
                      changeImageOnHover(e, item);
                    }}
                    onMouseLeave={(e) => {
                      removeImageOnLeave(e, item);
                    }}
                    onClick={() => {
                      resetSize();
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="add-to-cart">
          <div className="choose-size">
            <button
              onClick={OpenSize}
              className="choose-size-button choose-size-button-inactive"
            >
              <div className="choose-size-button-text">Choose Size</div>
              <i className="fa-solid fa-chevron-down"></i>
            </button>
            <div className="sizings sizings-inactive">
              <div
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="size1"
              >
                41
              </div>
              <div
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="size2"
              >
                42
              </div>
              <div
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="size3"
              >
                43
              </div>
              <div
                onClick={(e) => {
                  setSize(e.target.innerText);
                }}
                className="size4"
              >
                44
              </div>
            </div>
          </div>
          <div className="put-in-cart">
            <button
              onClick={() => {
                props.handleAddToCart(currentItem, currentSize)
              }}
              className="put-in-cart-button"
            >
              Add to cart
            </button>
          </div>
        </div>

        <div className="shipping">
          <div className="shipping-row-1">
            Sold by
            <b>
              <a href="https://www.asics.com" target="_blank" rel="noreferrer">
                ASICS
              </a>
            </b>{" "}
            & Markando, Sent by Markando
          </div>
          <div className="shipping-row-2">
            <i className="fa-solid fa-truck"></i>
            <div>
              Delivered between:{" "}
              <b>
                {moment().add(3, "days").format("MMM Do")} -{" "}
                {moment().add(5, "days").format("MMM Do")}
              </b>
            </div>
            <div>Standard Delivery</div>
            <div>
              <b>Free</b>
            </div>
          </div>

          <div className="shipping-row-3">
            <i className="fa-solid fa-rotate-left"></i>
            &nbsp; 100 Days of full right to return
          </div>
        </div>
      </div>
    </div>
  );
}
