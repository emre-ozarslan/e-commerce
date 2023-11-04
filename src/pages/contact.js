import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import '../App.css'
function Contact() {
  return (
    <>
      <div id="contact" class="contact-area section-padding mb-5">
        <div class="container">
          <div class="section-title text-center">
            <h1 className='mt-5'>Get in Touch</h1>
          </div>
          <div className='map'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48371.11384280771!2d31.614970500000002!3d40.735743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x409d3f16dc8406d1%3A0x83cc363ab54b82e9!2sBolu%2C%20Bolu%20Merkez%2FBolu!5e0!3m2!1str!2str!4v1691845825279!5m2!1str!2str" width="800" height="600" className='w-100 mb-5 rounded-5' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"/>
          </div>
          <div class="row">
            <div class="col-lg-7">
              <div class="contact">
                <form class="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
                  <div class="row">
                    <div class="form-group col-md-6">
                      <input type="text" name="name" class="form-control" placeholder="Name" required="required" />
                    </div>
                    <div class="form-group col-md-6">
                      <input type="email" name="email" class="form-control" placeholder="Email" required="required/" />
                    </div>
                    <div class="form-group col-md-12">
                      <input type="text" name="subject" class="form-control" placeholder="Subject" required="required" />
                    </div>
                    <div class="form-group col-md-12">
                      <textarea rows="6" name="message" class="form-control" placeholder="Your Message" required="required"></textarea>
                    </div>
                    <div class="col-md-12 text-center">
                      <button type="submit" value="Send message" name="submit" id="submitButton" className="bg-dark w-100 mt-3 rounded-5 text-white p-2" title="Submit Your Message!">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="col-lg-5">
              <div class="single_address mt-4 ms-5">
                <FontAwesomeIcon className='i' icon={faLocationDot} size="2xl" style={{ color: "#000", }} />
                <h4>Our Address</h4>
                <p>Bolu, BOL 14012, TR</p>
              </div>
              <div class="single_address ms-5">
                <FontAwesomeIcon className='i' icon={faEnvelope} size="2xl" style={{ color: "#000", }} />
                <h4>Send Your Message</h4>
                <p>nanayshp@example.com</p>
              </div>
              <div class="single_address ms-5">
                <FontAwesomeIcon className='i' icon={faPhone} size="2xl" style={{ color: "#000", }} />
                <h4>Call Us On</h4>
                <p>(+90) 314 314 1414</p>
              </div>
              <div class="single_address ms-5">
                <FontAwesomeIcon className='i' icon={faClock} size="2xl" style={{ color: "#000", }} />
                <h4>Work Time</h4>
                <p>Mon - Fri: 08.00 - 16.00. <br/> Sat: 10.00 - 14.00 <br/> Online: 7/24</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default Contact;