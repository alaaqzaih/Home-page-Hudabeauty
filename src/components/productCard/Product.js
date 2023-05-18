import "./productCard.scss";
import ProductDetailsModal from "./ProductDetailsModal";
import React, { useState, useEffect, useContext } from "react";
import Modal from "react-modal";

export default function ProductCard(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal(e) {
    e.preventDefault();

    setIsOpen(!isOpen);
  }

  return (
    <div className="container">
      <a className="product-card" href="" key={props.item.id}>
        <div className="cardImages">
          <img className="product-card__image" src={props.item.productImage} />
          <img
            className="product-card__image-hover"
            src={props.item.productImagehover}
          />
          <div className="badges-container">
            <div className="white-tile-badge">NEW!</div>
            {props.item.save && (
              <div className="pink-title-badge">
                Save {props.item.saveValue}
              </div>
            )}
          </div>
          <a
            href=""
            className="quick-view"
            title="quick-view"
            onClick={toggleModal}
          >
            <div>Quick View</div>
          </a>
        </div>
      </a>
      <div className="title_body">
        <div className="product-title">{props.item.title}</div>
        <div className="product-description">{props.item.description}</div>
        <button className="btn">
          <span className="add-to-cart-msg"> Add to Bag </span>
          <div className="price">{props.item.price}</div>
        </button>
      </div>
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <div className="dialog-body">
          <img
            className="dialogImg"
            src="https://hudabeauty.com/dw/image/v2/BCNC_PRD/on/demandware.static/-/Sites-huda-master-catalog/default/dw4ce6eec9/images/Kayali/Vanilla_Royale/DSCF8207.jpg?sw=300&sh=300"
            alt=""
          />
          <div className="product-details">
            <h2>Vanilla Royale Sugared Patchouli | 64 50ml</h2>
            <div className="price">$100.00</div>
            <div className="points">
              <p>EARN UP TO 100 POINTS!</p>
            </div>
            <hr
              style={{
                background: "Black",
                color: "Black",
                borderColor: "Black",
                height: "0.5px",
              }}
            />
            <h3>50ml</h3>
            <div className="attribute">
              <div className="attr-wrapper">
                <a href="">
                  10ml
                </a>
              </div>
              <div className="attr-wrapper">
                <a href="">
                  50ml
                </a>
              </div>
              <div className="attr-wrapper">
                <a href="">
                 100ml
                </a>
              </div>
            </div>
            <div className="shopping-info">SHOPPING INFO</div>
            <hr
              style={{
                background: "Black",
                color: "Black",
                borderColor: "Black",
                height: "0.5px",
              }}
            />
            <div className="quantity-add">
              <div className="quantity-selctor">
                <div className="minus">
                  -
                </div>
                
              </div>

            </div>
          </div>
        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}
