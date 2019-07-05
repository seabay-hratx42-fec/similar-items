import React from 'react';
import Slider from 'react-slick';
import '../style.css'

const Carousel = (props) => {
  console.log(props.items)
  let twelveItems = props.items.slice(0,12)
  const itemList = twelveItems.map((item) => {
    return (
    <div>
      <img src={item.item_image} height={200}></img>
      <h3>{item.item_name}</h3>
      <h3>$ {item.item_price}</h3>
    </div>
    )
  })
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows:true
  };
  return (
    <Slider {...settings}>
      {itemList}
    </Slider>
  );
}

export default Carousel;