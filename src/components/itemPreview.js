/* Libraries */
import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

let currentItem;
let similarItems;
let currentSize;

export default function ItemPreview(props) {
  const searchParams = useParams();
  getItem(searchParams.id);
  getSimilarItemsList();
  console.log(props);

  function getItem(id) {
    props.shoes.forEach((shoe) => {
      if (shoe.id === id) {
        currentItem = shoe;
      }
    });
  }

  function getSimilarItemsList() {
    similarItems = [currentItem];

    props.shoes.forEach((shoe) => {
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
    currentSize = size;
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
              onClick={() => {
                props.handleAddToCart(currentItem, currentSize);
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
