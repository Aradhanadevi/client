import React from 'react'
import { MainCaroselData } from "./MainCaroselData";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarosel = () => {
    const items = MainCaroselData.map((iteme=> 
        <img 
            className="cursor-pointer" 
            src={iteme.image} 
            alt="Sorry no image here"
            role='presentation'
            />
        ))
  return (

    <div>
        <AliceCarousel 
        items={items}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
        />
    </div>
  )
}

export default MainCarosel