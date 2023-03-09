import React from "react";
import './productCard.scss'
export default function ProductCard(props) {
  return (
      <div className="container">
        <a className="product-card" href="">
          <div className="cardImages">
            <img className="product-card__image" src={props.item.productImage} />
            <img className="product-card__image-hover" src={props.item.productImagehover} />
            <div className="badges-container">
              <div className="white-tile-badge">
                NEW!
              </div>
              {props.item.save && (<div className="pink-title-badge">
                Save {props.item.saveValue}
              </div>)}
            </div>
            <a href="" className="quick-view" title='quick-view'>
              <div>Quick View</div>
            </a>
          </div>
        </a>
        <div className="title_body">
          <div className="product-title">{props.item.title}</div>
          <div className="product-description">{props.item.description}</div>
          <button className='btn'>
            <span className='add-to-cart-msg'> Add to Bag </span>
            <div className="price">{props.item.price}</div>
          </button>
        </div>
      </div>
  );
}
