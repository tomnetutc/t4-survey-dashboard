"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h2 className="hero__title">
          Welcome to T4 Survey Dashboard
        </h2>

        <p className="hero__subtitle">
        TOMNET/D-STOP Transformative Technologies in Transportation (T4) Survey
        </p>

        <CustomButton
          title="Watch Demo"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/graph.png" alt="hero" fill className="object-contain" />
        </div>

        {/* <div className="hero__image-overlay" /> */}
      </div>
    </div>
  );
};

export default Hero;
