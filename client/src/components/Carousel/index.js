import React, { useEffect } from 'react';
import Flickity from "react-flickity-component";
import './style.css';
import "./flickity.css";


const flickityOptions = {
    autoPlay: 8500,
}

function Carousel(props) {

const products = props.products;

const dummyData = [{
    image: "https://i.ebayimg.com/images/g/4NgAAOSwkLhaOha8/s-l500.jpg", 
    name: "Kettle"
},

{
    image: "https://i.ebayimg.com/images/g/4NgAAOSwkLhaOha8/s-l500.jpg", 
    name: "Kettle"
},

{
    image: "https://i.ebayimg.com/images/g/4NgAAOSwkLhaOha8/s-l500.jpg", 
    name: "Kettle"
},

{
    image: "https://i.ebayimg.com/images/g/4NgAAOSwkLhaOha8/s-l500.jpg", 
    name: "Kettle"
},

{
    image: "https://i.ebayimg.com/images/g/4NgAAOSwkLhaOha8/s-l500.jpg", 
    name: "Kettle"
},

]

        return (
          <Flickity 
          className={'carousel'} 
          elementType={'div'} 
          options={flickityOptions} 
        >
          <div className={"carousel-cell"}>
          <img src={""} alt="" className={"carouselImg"} />
          </div>

          <div className={"carousel-cell"}>
          <img src={""} alt="" className={"carouselImg"} />
          </div>

          <div className={"carousel-cell"}>
          <img src={""} alt="" className={"carouselImg"} />
          </div>

          <div className={"carousel-cell"}>
          <img src={""} alt="" className={"carouselImg"} />
          </div>

          <div className={"carousel-cell"}>
          <img src={""} alt="" className={"carouselImg"} />
          </div>

          <div className={"carousel-cell"}>
          <img src={""} alt="" className={"carouselImg"} />
          </div>

        </Flickity>
  );
}
export default Carousel;