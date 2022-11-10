import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const SliderBanner = () => {
  const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 bg-white mb-5">
      <Slider {...settings}>
        <div className="bg-blue-700 w-full  h-full flex justify-center items-center">
          <img
            className="w-full h-full"
            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2022052644899.jpg"
            alt=""
          />
        </div>
        <div className="bg-blue-700 w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full"
            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2022032417436.jpg"
            alt=""
          />
        </div>
        <div className="bg-blue-700 w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full"
            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2022022673568.jpg"
            alt=""
          />
        </div>
        <div className="bg-blue-700 w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full"
            src="https://bc-img.s3.ap-south-1.amazonaws.com/web_banners/2022042943007.jpg"
            alt=""
          />
        </div>
        <div className="bg-blue-700 w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full"
            src="https://cdn.shopify.com/s/files/1/0287/9612/5316/files/2rev_website_banner_2.jpg?v=1648293637"
            alt=""
          />
        </div>
        <div className="bg-blue-700 w-full h-full flex justify-center items-center">
          <img
            className="w-full h-full"
            src="https://cdn.shopify.com/s/files/1/0287/9612/5316/files/used_teen_fiction_books.jpg?v=1617396591"
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
