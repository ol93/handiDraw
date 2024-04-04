import React, {useState, useEffect} from 'react'
import './Contact.css'
import logo from '../IconsHanddrawn/logo.png';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import { Carousel } from 'react-responsive-carousel';
import vite from '../assets/techIcons/Vite.png';
import react from '../assets/techIcons/React.png';
import css from '../assets/techIcons/CSS.png';
import auth0 from '../assets/techIcons/Auth0.png';
import sanity from '../assets/techIcons/Sanity.png';
import expressJs from '../assets/techIcons/ExpressJs.png';
import stripe from '../assets/techIcons/Stripe.png';



const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const [renderModal, setRenderModal] = useState("");
  
  const handleClick = (image, name, description, link) => {
      setModalData({ image, name, description, link });
      setModalOpen(true);
      
  };

  useEffect(() => {
    if (modalOpen) {

      setTimeout(() => setRenderModal(true), 100);
    } else {
      setTimeout(() => setRenderModal(false), 1000); 
    }
  }, [modalOpen]);

 
  

  return (
    <div className="c-contact">



    <div className='c-title'><img src={logo} alt="" /><h1>Contact</h1></div>
    <div className="c-contact-text">
      <p>If you have any questions or comments, or wonder if I could build something for you? Feel free to reach out!
        More of my portfolio can be found<a href="https://github.com/ol93/" target='_blank'> here </a>
      </p>
      <p>My email is: <a href="mailto:qk5P3@example.com" target='_blank'>o.devwork@gmail.com</a></p>
      <p>The techstack I used for this project:</p>
    </div>
   
    {renderModal && (
    <div className={`modal ${modalOpen ? 'modal-open' : ''}`}>
      <div className="modal-container">
        
        <h2>{modalData.name}</h2>
        
        
        <button onClick={() => setModalOpen(false)}>Close</button>
    </div></div>
)}
    
    <Carousel className='carousel-container' onClickItem={handleClick} swipeable={false}  showIndicators={false} width={300}centerMode={true} centerSlidePercentage={20} showThumbs={false} showStatus={false} autoPlay={false} infiniteLoop={false} showArrows={true} dynamicHeight={true} >
    <div className>
        <img className='carousel-image' src={vite} />
        <p>Vite</p>
        <p>Vite is a frontend tool that is used for building fast and optimized web applications</p> 
        <a href="https://vitejs.dev/" target="_blank">Visit Website</a>
       </div>
    
  <div>
    <img className='carousel-image' src={react} />
    <p>React</p>
        <p>React is a free and open-source front-end JavaScript library for building user interfaces based on components.</p> 
        <a href="https://react.dev/" target="_blank">Visit Website</a>
       </div>
  <div>
    <img className='carousel-image' src={css} />
    <p>CSS</p>
        <p>CSS is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML</p> 
        <a href="https://tailwindcss.com/" target="_blank">Visit Website</a>
       </div>
  <div>
    <img className='carousel-image' src={auth0} />
    <p>Auth0</p>
        <p>Auth0 is a platform companies and web developers use to verify a user's identity before giving them access to websites and applications.</p> 
        <a href="https://auth0.com/" target="_blank">Visit Website</a>
       </div>
  <div>
    <img className='carousel-image' src={sanity} />
    <p>Sanity</p>
        <p>With Sanity you can manage your text, images, and other media with APIs.</p> 
        <a href="https://www.sanity.io/" target="_blank">Visit Website</a>
       </div>
  <div>
    <img className='carousel-image' src={expressJs} />
    <p>ExpressJs</p>
        <p>Express is a node js web application framework that provides broad features for building web and mobile applications.</p> 
        <a href="https://expressjs.com/" target="_blank">Visit Website</a>
       </div>
  <div>
    <img className='carousel-image' src={stripe} />
    <p>Stripe</p>
        <p>Stripe is an online payment processing and credit card processing platform for businesses.</p> 
        <a href="https://stripe.com" target="_blank">Visit Website</a>
       </div>
</Carousel>
   
    </div>
  )
}

export default Contact