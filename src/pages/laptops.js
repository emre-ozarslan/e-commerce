import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from '../components/ProductData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function Laptops() {
  
  const laptopProducts = ProductData.filter(product => product.category === 'laptop');

  return (
    <div className='phones row w-100 d-flex align-items-center justify-content-center m-0 p-5'>
      <h1 className='text-center'>Laptops</h1>
      
        {laptopProducts.map(product => (
          <div key={product.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
          <div className="product-grid">
              <div className="product-image">
                  <Link to={`/product/${product.id}`} className="image">
                      <img className="pic-1" src={product.image[0]} />
                      <img className="pic-2" src={product.image[1]} />
                  </Link>
              </div>
              <div className="product-content">
                  <h3 className="title"><a className='text-decoration-none fs-6' href="#">{product.name}</a></h3>
                  <div className="price fs-4">₺{product.price}</div>
                  <div className="product-button-group ">
                      <a className="product-like-icon bg-transparent" href="#"><FontAwesomeIcon icon={faHeart} size="lg" /></a>
                      <a className="add-to-cart text-decoration-none d-flex align-items-center justify-content-center" style={{fontSize:"10px"}} href="#"><FontAwesomeIcon className='me-2 cart-icon' icon={faCartShopping} size="lg" />ADD TO CART</a>
                      <Link className="product-compare-icon bg-transparent" to={`/product/${product.id}`}><FontAwesomeIcon icon={faEye} size="lg" /></Link>
                  </div>
              </div>
          </div>
      </div>
        ))}
     
    </div>
  );
}

export default Laptops