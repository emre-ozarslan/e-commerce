import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckRampBox } from '@fortawesome/free-solid-svg-icons'
import { faTruck } from '@fortawesome/free-solid-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '../App.css'

function About() {
  return (
    <div className="container text-center mt-5">
      <h1>About</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet obcaecati eos voluptatibus, placeat aspernatur quidem reiciendis quibusdam, magni autem itaque nemo quo dicta eaque harum deleniti, quam ipsam. Blanditiis, cum?
        Assumenda adipisci, modi nesciunt magnam dolore saepe vel eveniet ut voluptate dicta dolorum et, nihil, molestias quidem. Alias, earum similique iste assumenda, modi neque omnis in error ipsum commodi ducimus!
        Pariatur dolorem veritatis odit earum quos consectetur dignissimos aspernatur reprehenderit eum ipsum distinctio accusamus nulla sed rerum molestiae in veniam, facilis, voluptate minima itaque optio quis! Distinctio fuga ullam soluta!
        Quas tenetur reiciendis ex ut culpa quos repellat fuga consequuntur, suscipit illum sit vero eos nobis, hic dicta. Facilis odio maiores inventore voluptatum doloremque sapiente expedita sed facere qui amet.
        Beatae asperiores id sint pariatur, autem iure quia cumque quaerat praesentium deserunt quam ipsa totam tempora nam sit. Iusto debitis nostrum laborum rem unde praesentium blanditiis beatae voluptas aperiam optio.</p>

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

      <div className="vision d-flex align-items-center">
        <div className="content p-5">
          <h1>Our Vision</h1>
          <p className='fs-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis magnam molestias, cum pariatur veritatis ducimus eveniet dolore nostrum numquam, mollitia ad unde rerum dolor quasi minus nemo libero corporis?
            Assumenda est perferendis vel labore quae hic fugit autem error nihil dolorum commodi quidem laborum, inventore voluptates ab et magnam sit. Tenetur, voluptates! Suscipit dolorum nesciunt autem maxime quaerat veniam.
            Nisi, aliquam. Autem esse ratione, exercitationem sit nulla excepturi explicabo nesciunt veritatis maiores recusandae quidem suscipit vero pariatur obcaecati, ad placeat dolor quo sequi incidunt perspiciatis labore accusamus id quaerat?</p>
        </div>
      </div>
      <div className="mission d-flex align-items-center">
        <div className="content p-5">
          <h1>Our Mission</h1>
          <p className='fs-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam facilis magnam molestias, cum pariatur veritatis ducimus eveniet dolore nostrum numquam, mollitia ad unde rerum dolor quasi minus nemo libero corporis?
            Assumenda est perferendis vel labore quae hic fugit autem error nihil dolorum commodi quidem laborum, inventore voluptates ab et magnam sit. Tenetur, voluptates! Suscipit dolorum nesciunt autem maxime quaerat veniam.
            Nisi, aliquam. Autem esse ratione, exercitationem sit nulla excepturi explicabo nesciunt veritatis maiores recusandae quidem suscipit vero pariatur obcaecati, ad placeat dolor quo sequi incidunt perspiciatis labore accusamus id quaerat?</p>
        </div>


      </div>
      <div className="team">

      </div>
    </div>
  )

}

export default About;
