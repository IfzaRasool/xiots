import React from 'react';
import Border from '/assets/border2.png';
import Restaurants from '/assets/restaurants.png';
import Camera from '/assets/camera.png';
import Shopping from '/assets/shopping.png';
import Beaches from '/assets/beaches.png';
import Hospitals from '/assets/beaches.png';
import Airports from '/assets/airports.png';
import HeroImg6 from '/assets/hero6.png';

import Image from 'next/image';

const OurService = () => {
  return (
    <>
      <div>
        <div className="w-[1425px] h-[1184px] pl-[53px] pr-[52px] py-[107px] bg-white justify-center items-center inline-flex">
          <div className="grow shrink basis-0 self-stretch flex-col justify-start items-center gap-[70px] inline-flex">
            <div className="h-[138px] flex-col justify-start items-start gap-2.5 flex">
              <div className="pl-[144.33px] pr-[145.67px] flex-col justify-center items-center gap-2.5 flex">
                <div className="text-center text-neutral-700 text-[40px] font-semibold capitalize leading-[48px]">
                  Our Services
                </div>
                <Image className="w-[43px] h-[22px]" src={Border} alt="" />
              </div>
              <div className="w-[550px] pl-[8.14px] pr-[9.86px] justify-start items-start inline-flex">
                <div className="text-center text-neutral-500 text-[15px] font-normal leading-normal">
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software
                  <br />
                  like aldus pageMaker including versions.
                </div>
              </div>
            </div>
            <div className="w-[1320px] h-[762px] relative">
              <div className="w-[440px] px-3 pb-[60px] left-0 top-0 absolute justify-start items-start inline-flex">
                <div className="h-[321px] p-px border border-gray-200 justify-start items-start flex">
                  <div className="w-[414px] flex-col justify-start items-start inline-flex">
                    <div className="w-[414px] h-[125px] pt-[25px] pb-6 bg-zinc-100 justify-center items-center inline-flex">
                      <div className="w-[60px] h-[76px] relative flex-col justify-start items-start flex">
                        <Image
                          className="w-[60px] h-[76px]"
                          src={Restaurants}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-[194px] px-[50px] pt-[55px] pb-[51px] flex-col justify-start items-center gap-2.5 flex">
                      <div className="text-center text-neutral-700 text-[22px] font-medium leading-7">
                        Restaurants
                      </div>
                      <div className="w-[314px] pl-px justify-start items-start inline-flex">
                        <div className="text-center text-neutral-500 text-[15px] font-normal leading-[25px]">
                          A more recently with desktop softy like aldus
                          <br />
                          page maker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] px-3 pb-[60px] left-[440px] top-[-0.51px] absolute justify-start items-start inline-flex">
                <div className="h-[322.01px] p-px border border-gray-200 justify-start items-start flex">
                  <div className="w-[414px] flex-col justify-start items-start inline-flex">
                    <div className="w-[414px] px-[170px] pt-[30px] pb-5 bg-zinc-100 justify-center items-start inline-flex">
                      <div className="w-[75px] h-[76.01px] relative">
                        <Image
                          className="w-[75px] h-[76px]"
                          src={Airports}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-[194px] px-[50px] pt-[55px] pb-[51px] flex-col justify-end items-center gap-2.5 flex">
                      <div className="text-center text-neutral-700 text-[22px] font-medium leading-7">
                        Airports
                      </div>
                      <div className="self-stretch pl-px justify-start items-start inline-flex">
                        <div className="text-center text-neutral-500 text-[15px] font-normal leading-[25px]">
                          A more recently with desktop softy like aldus
                          <br />
                          page maker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] px-3 pb-[60px] left-[880px] top-0 absolute justify-start items-start inline-flex">
                <div className="h-[321px] p-px border border-gray-200 justify-start items-start flex">
                  <div className="w-[414px] flex-col justify-start items-start inline-flex">
                    <div className="w-[414px] px-[175px] pt-[30px] pb-[39px] bg-zinc-100 justify-center items-start inline-flex">
                      <div className="w-16 h-14 relative">
                        <Image className="w-16 h-14" src={Hospitals} alt="" />
                      </div>
                    </div>
                    <div className="h-[194px] px-[50px] pt-[55px] pb-[51px] flex-col justify-end items-center gap-2.5 flex">
                      <div className="text-center text-neutral-700 text-[22px] font-medium leading-7">
                        Hospitals
                      </div>
                      <div className="self-stretch pl-px justify-start items-start inline-flex">
                        <div className="text-center text-neutral-500 text-[15px] font-normal leading-[25px]">
                          A more recently with desktop softy like aldus
                          <br />
                          page maker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] px-3 pb-[60px] left-0 top-[381px] absolute justify-start items-start inline-flex">
                <div className="h-[321px] p-px border border-gray-200 justify-start items-start flex">
                  <div className="w-[414px] flex-col justify-start items-start inline-flex">
                    <div className="w-[414px] px-[163px] py-[30px] bg-zinc-100 justify-center items-start inline-flex">
                      <div className="w-[88px] h-[65px] relative">
                        <Image
                          className="w-[88px] h-[65px]"
                          src={Beaches}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-[194px] px-[50px] pt-[55px] pb-[51px] flex-col justify-start items-center gap-2.5 flex">
                      <div className="text-center text-neutral-700 text-[22px] font-medium leading-7">
                        Beaches
                      </div>
                      <div className="w-[314px] pl-px justify-start items-start inline-flex">
                        <div className="text-center text-neutral-500 text-[15px] font-normal leading-[25px]">
                          A more recently with desktop softy like aldus
                          <br />
                          page maker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] px-3 pb-[60px] left-[440px] top-[381px] absolute justify-start items-start inline-flex">
                <div className="h-[321px] p-px border border-gray-200 justify-start items-start flex">
                  <div className="w-[414px] flex-col justify-start items-start inline-flex">
                    <div className="w-[414px] px-[174.50px] pt-[30px] pb-[43px] bg-zinc-100 justify-center items-start inline-flex">
                      <div className="w-[65px] h-[52px] relative">
                        <Image
                          className="w-[65px] h-[52px]"
                          src={Shopping}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-[194px] px-[50px] pt-[55px] pb-[51px] flex-col justify-start items-center gap-2.5 flex">
                      <div className="text-center text-neutral-700 text-[22px] font-medium leading-7">
                        Shopping Malls
                      </div>
                      <div className="w-[314px] pl-px justify-start items-start inline-flex">
                        <div className="text-center text-neutral-500 text-[15px] font-normal leading-[25px]">
                          A more recently with desktop softy like aldus
                          <br />
                          page maker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] px-3 pb-[60px] left-[880px] top-[381px] absolute justify-start items-start inline-flex">
                <div className="h-[321px] p-px border border-gray-200 justify-start items-start flex">
                  <div className="w-[414px] flex-col justify-start items-start inline-flex">
                    <div className="w-[414px] px-[171px] pt-[30px] pb-11 bg-zinc-100 justify-center items-start inline-flex">
                      <div className="w-[72px] h-[51px] relative">
                        <Image
                          className="w-[72px] h-[51px] "
                          src={Camera}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="h-[194px] px-[50px] pt-[55px] pb-[51px] flex-col justify-end items-center gap-2.5 flex">
                      <div className="text-center text-neutral-700 text-[22px] font-medium leading-7">
                        Wedding Parties
                      </div>
                      <div className="self-stretch pl-px justify-start items-start inline-flex">
                        <div className="text-center text-neutral-500 text-[15px] font-normal leading-[25px]">
                          A more recently with desktop softy like aldus
                          <br />
                          page maker.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* // top footer */}
      <div className="relative bg-cover bg-center text-white">
        <Image src={HeroImg6} alt="Background Image"  />
        <div className="absolute inset-0 bg-opacity-70  bg-gray-900 ">
        <div className="h-[194px] px-[52.50px] py-[70px] justify-start items-start flex">
          <div className="h-[54px] justify-between items-start flex">
            <div className="h-[54px] pl-3 pr-[155px] pb-2 justify-start items-start flex">
              <div className="text-white text-[38px] font-medium capitalize leading-[45.60px]">
                Incredible Destinations at Incredible Deals
              </div>
            </div>
            <button class="flex justify-center items-center bg-yellow text-black  py-2 px-10 ">
              <span className="mx-2">Book Now</span>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.69 0.25C12.9713 0.25 16.44 3.71875 16.44 8C16.44 12.2812 12.9713 15.75 8.69 15.75C4.40875 15.75 0.940002 12.2812 0.940002 8C0.940002 3.71875 4.40875 0.25 8.69 0.25ZM7.78375 4.75L10.1275 7H4.44C4.0025 7 3.69 7.34375 3.69 7.75V8.25C3.69 8.6875 4.0025 9 4.44 9H10.1275L7.78375 11.2812C7.47125 11.5625 7.47125 12.0625 7.7525 12.3438L8.09625 12.6875C8.40875 12.9688 8.8775 12.9688 9.15875 12.6875L13.315 8.53125C13.5963 8.25 13.5963 7.78125 13.315 7.5L9.15875 3.34375C8.8775 3.03125 8.40875 3.03125 8.09625 3.34375L7.7525 3.6875C7.47125 3.96875 7.47125 4.46875 7.78375 4.75Z" fill="#111111"/>
</svg>

            </button>
          </div>
        </div>
        </div>
      </div>

    </>
  );
};

export default OurService;
