import React from 'react';
import './Carousel.css';


const Carousel = () => {
  return (
    <Carousel className='carousel-container' centerMode={true} centerSlidePercentage showStatus={false} showThumbs={false}  autoPlay={true} infiniteLoop={true} >
      <div>
        <img src={vite} />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src={react} />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src={css} />
        <p className="legend">Legend 3</p>
      </div>
      <div>
        <img src={auth0} />
        <p className="legend">Legend 4</p>
      </div>
      <div>
        <img src={sanity} />
        <p className="legend">Legend 5</p>
      </div>
      <div>
        <img src={expressJs} />
        <p className="legend">Legend 6</p>
      </div>
      <div>
        <img src={stripe} />
        <p className="legend">Legend 7</p>
      </div>
    </Carousel>
  );
};

export default Carousel;