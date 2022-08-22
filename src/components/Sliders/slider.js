import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SlickSlider(){
    const settings = {
      dots: false,
      autoplay: false,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      errow : 4
    };
    return (
      <div style={{height:'34rem'}} className="container">
        <div className='title-box'>
            <h3>New Arrivals</h3>
            <div className='under-line'></div>
        </div>
        <Slider {...settings}>
        <div className='open-model'><img src='https://img.wattpad.com/cover/289526735-100-k174253.jpg' alt="Credit to Joshua Earle on Unsplash"/><p className='book-details'>MISTRESS OF FLAME</p></div>
        
        <div className='open-model'><img src='https://img.wattpad.com/cover/208777238-352-k836343.jpg' alt="Credit to Alisa Anton on Unsplash"/><p className='book-details'>SAVING MY MATE</p></div>
        
        <div className='open-model'><img src='https://img.wattpad.com/cover/218397324-352-k239985.jpg' alt="Credit to Igor Ovsyannykov on Unsplash"/><p className='book-details'>MY FIGHTER MAN</p></div>
       
        <div className='open-model'><img src='https://img.wattpad.com/cover/141384284-352-k94402.jpg' alt="Credit to Pierre Châtel-Innocenti on Unsplash"/><p className='book-details'>MEANT TO BE</p></div>
        
        <div className='open-model'><img src='https://img.wattpad.com/cover/234299031-352-k563676.jpg' alt="Credit to Richard Nolan on Unsplash"/><p className='book-details'>SEED OF ICHOR</p></div>
        
        <div className='open-model'><img src='https://img.wattpad.com/cover/310591694-352-k510045.jpg' alt="Credit to Cristina Gottardi on Unsplash"/><p className='book-details'>ACROSS THE POUND</p></div>
        </Slider>
      </div>
    );
}

export default SlickSlider;