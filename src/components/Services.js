import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function Services() {
  return (
    <div className="services p-2 bg-dark text-white">
        <div className="subjects p-3 mt-2">
          <div className="contents d-flex text-center row">
            <div className="col-xl-2 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faTruckRampBox} size="lg" style={{ color: "#ffffff", }} />
              <p>FREE SHIPPING</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faTruck} size="lg" style={{ color: "#ffffff", }} />
              <p>STANDARD DELIVERY</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faTruckFast} size="lg" style={{ color: "#ffffff", }} />
              <p>FAST DELIVERY</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faStore} size="lg" style={{ color: "#ffffff", }} />
              <p>DELIVERED FROM STORE</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{ color: "#ffffff", }} />
              <p>EASY REFUND</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6">
              <FontAwesomeIcon icon={faPhone} size="lg" style={{ color: "#ffffff", }} />
              <p>ORDER BY PHONE</p>
            </div>
          </div>
        </div>
      </div>
  )
}

export default Services