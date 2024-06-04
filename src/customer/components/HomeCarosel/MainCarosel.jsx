import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { MainCaroselData } from './MainCaroselData';

const items = MainCaroselData.map((iteme=> 
<img 
    className="cursor-pointer" 
    src={iteme.image} 
    alt="Sorry no image here"
    />
))

const MainCarosel = () => (
    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
    />
);

export default MainCarosel;
