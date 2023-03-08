import React from "react";
import './productCard.scss'
export default function ProductCard(props) {
  return (
    <section>
      <div className="container">
        <a className="product-card" href="">
          <div className="cardImages">
            <img className="product-card__image" src={props.item.productImage} />
            <img className="product-card__image-hover" src={props.item.productImagehover} />
            <div className="card-badge">
              <div className="badges-container">
                <span className="white-tile-badge">
                  NEW!
                </span>
                { props.item.save && ( <span className="pink-title-badge">
                  Save {props.item.saveValue}
                </span>)}
              </div>
              <a href="" className="quick-view" title='quick-view'>
                <span>Quick View</span>
              </a>
            </div>
          </div>
        </a>
        <div className="title_body">
          <div className="product-title">{props.item.title}</div>
          <div className="product-description">{props.item.description}</div>
          <div className='add-to-cart-container'>
            <button className='btn'>
              <span className='add-to-cart-msg'> Add to Bag </span>
              <div className="price">{props.item.price}</div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
