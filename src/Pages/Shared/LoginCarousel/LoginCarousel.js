import React from 'react';
import img1 from '../../../assets/360_F_100951695_9gGHxblVjfdEDCjcP5jSy29dEktY3kA2.jpg'
import img2 from '../../../assets/516bb367476177.5b3b6eb5173c9.png'
import img3 from '../../../assets/800px_COLOURBOX39802142.jpg'
import img4 from '../../../assets/cartoon-chef-giving-thumbs-up-free-vector.webp'
import img5 from '../../../assets/chef-cook-vector-1428806 (1).jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const LoginCarousel = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    };
    return (
        <div className='w-[400px]'>
            <Slider {...settings}>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
                <div>
                    <img src={img4} alt="" />
                </div>
                <div>
                    <img src={img5} alt="" />
                </div>
                
            </Slider>
        </div>
    );
};

export default LoginCarousel;