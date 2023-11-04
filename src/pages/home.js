import React from 'react'
import CarouselFadeExample from '../components/Carousel';
import Product from '../components/Product';
import PhoneCategory from './phones';
import Services from '../components/Services';



function Home() {
  return (
    <>
      <CarouselFadeExample />
      <PhoneCategory/>
      <Services/>
      <Product />
      <div className="banks d-flex justify-content-center">
        <img src="img/banks.jpg" alt="" style={{ width: "100%"}} />
      </div>
    </>
  )
};

export default Home;