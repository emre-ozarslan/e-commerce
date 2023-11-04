import React, {useState} from 'react'
import ProductData from '../components/ProductData'
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
import { Link } from 'react-router-dom'

function SearchPage() {
    const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="templateContainer">
        <div className="searchInput_Container d-flex justify-content-center m-5">
            <Form.Control
              type="search"
              style={{fontSize:'20px', width:'500px'}}
              placeholder="Type the product you want to search for"
              className="me-2 rounded-5 mt-5 p-3"
              aria-label="Search"
              onChange={(event) =>{
                setSearchTerm(event.target.value)
            }}
            />
        </div>
        
        <div className="prod row w-100 d-flex align-items-center justify-content-center m-0 p-5">
        <h1 className='text-center'>All Products</h1>
            {
                ProductData
                    .filter((val)=>{
                        if (searchTerm === ""){
                            return val;
                        }else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }else if(val.category.toLowerCase().includes(searchTerm.toLowerCase())){
                            return val;
                        }
                    })
                    .map((val)=>{
                        return(
                                <div key={val.id} className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="product-grid">
                                        <div className="product-image">
                                            <Link to={`product/${val.id}`} className="image">
                                                <img className="pic-1" src={val.image[0]} />
                                                <img className="pic-2" src={val.image[1]} />
                                            </Link>
                                        </div>
                                        <div className="product-content">
                                            <h3 className="title"><a className='text-decoration-none fs-6' href="#">{val.name}</a></h3>
                                            <div className="price fs-4">₺{val.price}</div>
                                            <div className="product-button-group ">
                                                <a className="product-like-icon bg-transparent" href="#"><FontAwesomeIcon icon={faHeart} size="lg" /></a>
                                                <a className="add-to-cart text-decoration-none d-flex align-items-center justify-content-center" style={{fontSize:"10px"}} href="#"><FontAwesomeIcon className='me-2 cart-icon' icon={faCartShopping} size="lg" />ADD TO CART</a>
                                                <Link className="product-compare-icon bg-transparent" to={`/product/${val.id}`}><FontAwesomeIcon icon={faEye} size="lg" /></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        )
                    })
            }
        </div>
    </div>
  )
}

export default SearchPage