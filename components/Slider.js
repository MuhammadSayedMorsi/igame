import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
export default function SliderComp() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-4">
      <Slider {...settings}>
        <div className="bg-white flex p-2 rounded-lg mr-4">
          <Image src="/avatar.svg" width={30} height={30} alt="avatar photo" />
          <div className="ml-3">
            <h3 className="text-app-blue font-bold text-lg">Rakia</h3>
            <p className="text-app-grayish-blue text-sm font-normal">
              Your French Cp..
            </p>
          </div>
        </div>
        <div className="bg-white flex p-2 rounded-lg mr-4">
          <Image src="/avatar.svg" width={30} height={30} alt="avatar photo" />
          <div className="ml-3">
            <h3 className="text-app-blue font-bold text-lg">Rakia</h3>
            <p className="text-app-grayish-blue text-sm font-normal">
              Your French Cp..
            </p>
          </div>
        </div>

        <div className="bg-white flex p-2 rounded-lg mr-4">
          <Image src="/avatar.svg" width={30} height={30} alt="avatar photo" />
          <div className="ml-3">
            <h3 className="text-app-blue font-bold text-lg">Rakia</h3>
            <p className="text-app-grayish-blue text-sm font-normal">
              Your French Cp..
            </p>
          </div>
        </div>

        <div className="bg-white flex p-2 rounded-lg mr-4">
          <Image src="/avatar.svg" width={30} height={30} alt="avatar photo" />
          <div className="ml-3">
            <h3 className="text-app-blue font-bold text-lg">Rakia</h3>
            <p className="text-app-grayish-blue text-sm font-normal">
              Your French Cp..
            </p>
          </div>
        </div>

        <div className="bg-white flex p-2 rounded-lg mr-4">
          <Image src="/avatar.svg" width={30} height={30} alt="avatar photo" />
          <div className="ml-3">
            <h3 className="text-app-blue font-bold text-lg">Rakia</h3>
            <p className="text-app-grayish-blue text-sm font-normal">
              Your French Cp..
            </p>
          </div>
        </div>

        <div className="bg-white flex p-2 rounded-lg mr-4">
          <Image src="/avatar.svg" width={30} height={30} alt="avatar photo" />
          <div className="ml-3">
            <h3 className="text-app-blue font-bold text-lg">Rakia</h3>
            <p className="text-app-grayish-blue text-sm font-normal">
              Your French Cp..
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
}
