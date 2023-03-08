import React from 'react'
import "./slider.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { productData, responsive } from "../../data";
import ProductCard from '../productCard/Product';
function Slider() {
    const CustomLeftArrow = ({ onClick }) => (
        <i onClick={() => onClick()} className="custom-left-arrow" />
    );
    const CustomRightArrow = ({ onClick }) => {
        return <i className="custom-right-arrow" onClick={() => onClick()} />;
    };
    return (
        <div>
            <h1>NEW ARRIVALS</h1>
            <Carousel className="carousel" customLeftArrow={<CustomLeftArrow />}
                customRightArrow={<CustomRightArrow />} infinite={true} showDots={false} responsive={responsive}>
                {productData.map((item) => (
                    <ProductCard  item={item}
                    />
                ))}
            </Carousel>
        </div>
    )
}

export default Slider
