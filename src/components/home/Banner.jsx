import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { bannerImgOne, bannerImgTwo, bannerImgThree, bannerImgFour, bannerImgFive } from '../../assets/index';


const Banner = () => {
    return (
        <div className='relative'>
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={3000}
            >
                <div>
                    <img src={bannerImgOne} alt='banner img' />
                </div>
                <div>
                    <img src={bannerImgTwo} alt='banner img' />
                </div>
                <div>
                    <img src={bannerImgThree} alt='banner img' />
                </div>
                <div>
                    <img src={bannerImgFour} alt='banner img' />
                </div>
                <div>
                    <img src={bannerImgFive} alt='banner img' />
                </div>

            </Carousel>
            <div className='w-full h-40 bg-gradient-to-t from-gray-100 to-transparent absolute bottom-0 z-20'>
            </div>
        </div>
    );
};

export default Banner;