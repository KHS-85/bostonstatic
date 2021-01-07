import React from 'react';

import image1 from '../images/slider1.jpg';
import image2 from '../images/slider2.jpg';
import image3 from '../images/slider3.png';

const SliderPage = () => {

    const sliders = [
        { key: '1', image: image1 },
        { key: '2', image: image2 },
        { key: '3', image: image3 }
      ]

    const slidermap = sliders.map(slider => {

        return (

            <div class="carousel-item" key={slider.key}>
                <img class="d-block w-100 sliderimg" src={slider.image} alt="slide" />
            </div>

        )

    })


    return (

        <div>
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">

                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100 sliderimg" src="/slider1.jpg" alt="First slide" />
                    </div>
                    {slidermap}
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}





export default SliderPage
