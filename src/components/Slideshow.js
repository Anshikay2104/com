import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        <div>
          <img src="https://www.devyanitextileexports.com/images/product/2023/10/keya-buy-zaveri-online-wholesaler-latest-collectio-2023-10-10_13_41_12.WhatsApp%20Image%202023-10-09%20at%2011.51.01%20AM%20(1).jpeg" alt="Slide 1" />
        </div>
        <div>
          <img src="https://luxebook.in/wp-content/uploads/2023/04/PP-10.04.214292-min-scaled.jpg" alt="Slide 2" />
        </div>
        <div>
          <img src="https://styl-inc.com/wp-content/uploads/2022/06/Imitation-Jewellery-Stores.jpg" alt="Slide 3" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
