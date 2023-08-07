import React from 'react';
import Image from 'next/image';
import HeroImg from '/assets/hero.png';
import HeroImg2 from '/assets/hero2.png';

const Hero = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center text-white">
        <Image src={HeroImg} alt="Background Image" className='h-[870px]'/>
        <div className="absolute inset-0 bg-opacity-70  bg-gray-900 ">
          <div className="container grid grid-cols-2  items-center">
            <div className="col-span-2 sm:col-span-1 mx-6">
              <div className="text-gray-200 text-lg font-normal leading-relaxed">
                Free changes for life.
              </div>
              <div className="text-[53.80px] font-black capitalize leading-[64.56px]">
                Hand-Made Website for
                <br />
                Your Business
              </div>
              <button class="flex justify-center items-center bg-yellow text-white  py-2 px-10 ">
                <svg
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.81 6.53125L2.56 10.7812C2.2475 11.0938 1.77875 11.0938 1.4975 10.7812L0.778748 10.0938C0.497498 9.78125 0.497498 9.3125 0.778748 9.03125L3.81 6.03125L0.778748 3C0.497498 2.71875 0.497498 2.25 0.778748 1.9375L1.4975 1.21875C1.77875 0.9375 2.2475 0.9375 2.56 1.21875L6.81 5.46875C7.09125 5.78125 7.09125 6.25 6.81 6.53125ZM12.81 5.46875C13.0912 5.78125 13.0912 6.25 12.81 6.53125L8.56 10.7812C8.27875 11.0938 7.77875 11.0938 7.4975 10.7812L6.77875 10.0938C6.4975 9.78125 6.4975 9.3125 6.77875 9.03125L9.81 6L6.77875 3C6.4975 2.71875 6.4975 2.21875 6.77875 1.9375L7.4975 1.21875C7.77875 0.9375 8.2475 0.9375 8.56 1.21875L12.81 5.46875Z"
                    fill="white"
                  />
                </svg>
                <span className="mx-2">Book Call</span>
              </button>
            </div>
            <div className="col-span-2 sm:col-span-1 text-white">
              <Image src={HeroImg2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
