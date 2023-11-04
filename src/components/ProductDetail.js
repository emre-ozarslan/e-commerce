import React from 'react'
import '../App.css'
import { useParams } from 'react-router-dom'
import ProductData from './ProductData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Carousel } from 'react-bootstrap'

function ProductDetail() {
    const { id } = useParams()
    const singleProduct = ProductData.find(product => product.id == id)

    return (
        <>
            <div class="detail mt-5 mb-5">
                <div class="card">
                    <div class="row g-0">
                        <div class="col-md-6 border-end">
                            <div class="d-flex flex-column justify-content-center">
                                <div class="main_image h-100">
                                    <Carousel fade className='w-100'>
                                        <Carousel.Item className='d-flex justify-content-center'>
                                            <img src={singleProduct.image[0]} id="main_product_image" alt={singleProduct.name} style={{ maxWidth: "400px" }} />
                                        </Carousel.Item>
                                        <Carousel.Item className='d-flex justify-content-center'>
                                            <img src={singleProduct.image[1]} id="main_product_image" alt={singleProduct.name} style={{ maxWidth: "400px" }} />
                                        </Carousel.Item>
                                    </Carousel>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="p-3 right-side">
                                <div class="d-flex justify-content-between align-items-center">
                                    <h3>{singleProduct.name}</h3> <span class="heart"><FontAwesomeIcon icon={faHeart} size="lg" /></span>
                                </div>
                                <h3 className='d-flex align-items-center justify-content-between text-dark'>₺{singleProduct.price}<span className='fs-6'>441 reviews</span></h3>
                                <div class="mt-2 pr-3 content">
                                    <p className='fs-6'>{singleProduct.description}</p>
                                </div>
                                <div className="features">
                                    <ul>
                                        <li>{singleProduct.features[0]}</li>
                                        <li>{singleProduct.features[1]}</li>
                                        <li>{singleProduct.features[2]}</li>
                                        <li>{singleProduct.features[3]}</li>
                                        <li>{singleProduct.features[4]}</li>
                                    </ul>
                                </div>
                            </div>

                            <div class="buttons d-flex flex-row gap-3 justify-content-center">
                                <button class="btn btn-outline-dark">Buy Now</button>
                                <button class="btn btn-dark">Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetail