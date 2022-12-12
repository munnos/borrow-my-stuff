import React, { useState } from "react";
import { Link } from "react-router-dom";
import Flickity from "react-flickity-component";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_LISTED_PRODUCTS } from "../../utils/queries";
import "./style.css";
import "./flickity.css";

const flickityOptions = {
  autoPlay: 3000,
  draggable: false,
  freeScroll: true,
  wrapAround: true,
  groupCells: 2,
  pauseAutoPlayOnHover: true,
  imagesLoaded: true,
  lazyLoad: true,
  initialIndex: 2,
};

function Carousel() {
  const { loading, data } = useQuery(QUERY_ALL_LISTED_PRODUCTS);
  const listedProducts = data?.getAllListedProducts || [];

  return (
    <div>
      <h3 id="title">Recently listed stuff...</h3>
      <Flickity
        className={"carousel"}
        elementType={"div"}
        options={flickityOptions}
      >
        {listedProducts &&
          listedProducts.map(
            (product, index) =>
              index < 9 && (
                <div className={"carousel-cell"} key={product._id}>
                  <Link to={`/listedproduct/${product._id}`}>
                  <img src={product.image} alt="" className={"carouselImg"} />
                  </Link>
                </div>
              )
          )}
      </Flickity>
    </div>
  );
}
export default Carousel;
