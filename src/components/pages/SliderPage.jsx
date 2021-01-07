import React from 'react';

import { Carousel } from 'antd';

import image1 from '../images/slider1.jpg';
import image2 from '../images/slider2.jpg';
import image3 from '../images/slider3.png';
import image4 from '../images/slider4.jpg';

const SliderPage = () => {

    return (

        <Carousel autoplay>
            <div>
                <img src={image1} alt="img1" />
            </div>
            <div>
                <img src={image2} alt="img2" />
            </div>
            <div>
                <img src={image3} alt="img3" />
            </div>
            <div>
                <img src={image4} alt="img4" />
            </div>
        </Carousel>
    )
}

export default SliderPage
