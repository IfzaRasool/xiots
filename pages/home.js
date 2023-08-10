import React from 'react';
import Image from 'next/image';
import HeroImg from '/assets/hero.png';
import HeroImg2 from '/assets/hero2.png';
import HeroImg3 from '/assets/hero3.png';
import HeroImg5 from '/assets/hero4.png';
import HeroImg4 from '/assets/border.png';
import London from '/assets/landon.png';
import Marchin from '/assets/marchin.png';
import Toronto from '/assets/toronto.png';
import videoImg from '/assets/videoimg.png'

const Hero = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center text-white">
        <Image src={HeroImg} alt="Background Image" className="h-[870px]" />
        <div className="absolute inset-0 bg-opacity-70  bg-gray-900 ">
          <div className="grid grid-cols-2 items-center">
            <div className="col-span-2 sm:col-span-1 mx-6 order-2 sm:order-1">
              <div className="text-gray-200 text-lg font-normal leading-relaxed">
                Free changes for life.
              </div>
              <div className="text-[53.80px] font-black capitalize leading-[64.56px]">
                Hand-Made Website for
                <br />
                Your Business
              </div>
              <button class="hidden sm:flex justify-center items-center bg-yellow text-white  py-2 px-10 mt- ">
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
            <div className="col-span-2 sm:col-span-1 text-white order-1 sm:order-2">
              <Image src={HeroImg2} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* new  row*/}
      <div className="my-14 py-10 bg-white border-b border-black border-opacity-10 justify-around items-center gap-[21px] flex flex-col sm:flex-row">
        {/* best price */}
        <div className="flex gap-5">
          <svg
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="dollar-sign">
              <path
                id="Vector"
                d="M32 2.66663V61.3333"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M45.3333 13.3334H25.3333C22.858 13.3334 20.484 14.3167 18.7337 16.067C16.9833 17.8174 16 20.1914 16 22.6667C16 25.1421 16.9833 27.516 18.7337 29.2664C20.484 31.0167 22.858 32 25.3333 32H38.6667C41.142 32 43.516 32.9834 45.2663 34.7337C47.0167 36.484 48 38.858 48 41.3334C48 43.8087 47.0167 46.1827 45.2663 47.933C43.516 49.6834 41.142 50.6667 38.6667 50.6667H16"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <div className="">
            <div className="text-neutral-700 text-lg font-medium leading-snug">
              Best Price Guaranteed
            </div>
            <div className="text-neutral-500 text-[15px] font-normal leading-normal">
              A more recently with desktop
              <br />
              softy like aldus page maker.
            </div>
          </div>
        </div>
        {/* customer care */}
        <div className="flex gap-5">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="headphones">
              <path
                id="Vector"
                d="M8.75 48V32C8.75 25.6348 11.2786 19.5303 15.7794 15.0294C20.2803 10.5286 26.3848 8 32.75 8C39.1152 8 45.2197 10.5286 49.7206 15.0294C54.2214 19.5303 56.75 25.6348 56.75 32V48"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M56.75 50.6667C56.75 52.0812 56.1881 53.4377 55.1879 54.4379C54.1877 55.4381 52.8312 56 51.4167 56H48.75C47.3355 56 45.979 55.4381 44.9788 54.4379C43.9786 53.4377 43.4167 52.0812 43.4167 50.6667V42.6667C43.4167 41.2522 43.9786 39.8957 44.9788 38.8955C45.979 37.8953 47.3355 37.3334 48.75 37.3334H56.75V50.6667ZM8.75 50.6667C8.75 52.0812 9.3119 53.4377 10.3121 54.4379C11.3123 55.4381 12.6688 56 14.0833 56H16.75C18.1645 56 19.521 55.4381 20.5212 54.4379C21.5214 53.4377 22.0833 52.0812 22.0833 50.6667V42.6667C22.0833 41.2522 21.5214 39.8957 20.5212 38.8955C19.521 37.8953 18.1645 37.3334 16.75 37.3334H8.75V50.6667Z"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>

          <div>
            <div className="text-neutral-700 text-lg font-medium leading-snug">
              24/7 Customer Care
            </div>
            <div className="text-neutral-500 text-[15px] font-normal leading-normal">
              A more recently with desktop
              <br />
              softy like aldus page maker.
            </div>
          </div>
        </div>
        {/* home picks */}
        <div className="flex gap-5">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="home">
              <path
                id="Vector"
                d="M8.5 24L32.5 5.33337L56.5 24V53.3334C56.5 54.7479 55.9381 56.1044 54.9379 57.1046C53.9377 58.1048 52.5812 58.6667 51.1667 58.6667H13.8333C12.4188 58.6667 11.0623 58.1048 10.0621 57.1046C9.0619 56.1044 8.5 54.7479 8.5 53.3334V24Z"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M24.5 58.6667V32H40.5V58.6667"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <div>
            <div className="text-neutral-700 text-lg font-medium leading-snug">
              Home Pickups
            </div>
            <div className="text-neutral-500 text-[15px] font-normal leading-normal">
              A more recently with desktop
              <br />
              softy like aldus page maker.
            </div>
          </div>
        </div>
        {/* easy booking  */}
        <div className="flex gap-5">
          <svg
            width="65"
            height="64"
            viewBox="0 0 65 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="calendar">
              <path
                id="Vector"
                d="M50.9167 10.6666H13.5833C10.6378 10.6666 8.25 13.0544 8.25 16V53.3333C8.25 56.2788 10.6378 58.6666 13.5833 58.6666H50.9167C53.8622 58.6666 56.25 56.2788 56.25 53.3333V16C56.25 13.0544 53.8622 10.6666 50.9167 10.6666Z"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M42.9167 5.33337V16"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M21.5833 5.33337V16"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M8.25 26.6666H56.25"
                stroke="#FECE01"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
          <div>
            <div className="text-neutral-700 text-lg font-medium leading-snug">
              Easy Bookings
            </div>
            <div className="text-neutral-500 text-[15px] font-normal leading-normal">
              A more recently with desktop
              <br />
              softy like aldus page maker.
            </div>
          </div>
        </div>
      </div>

      {/* beskope software section */}
      <div className='container'>
        <div className=" grid grid-cols-2  items-center">
          <div className="col-span-2 sm:col-span-1 mx-6 order-1 sm:order-1">
            <div className="text-neutral-800 text-base font-bold capitalize leading-normal tracking-wide">
              Like always. Like never before.
            </div>
            <div className="text-neutral-700 text-[28px] font-bold capitalize leading-[35px] tracking-wide">
              Bespoke Software & Digital Transformation.
            </div>
            <div className="text-neutral-500 text-[15px] font-normal leading-[25px]">
              By automating processes and tasks, businesses can reduce costs and
              improve productivity.
              <br />
              Additionally, custom software tailored to the specific needs of a
              business can give them a<br />
              significant advantage over their competitors.
            </div>
            <div className="text-neutral-500 text-[15px] font-normal leading-[25px]">
              Our software development agency has a team of experienced and
              skilled professionalswho can <br />
              create custom software solutions for your business. We understand
              the unique requirements
              <br />
              of each business and create tailor-made solutions that can help
              them achieve their goals.
            </div>
            <button class="flex justify-center items-center bg-yellow text-white  py-2 px-10 ">
              <span className="mx-2">Get A Quote</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.22998 0.25C12.5112 0.25 15.98 3.71875 15.98 8C15.98 12.2812 12.5112 15.75 8.22998 15.75C3.94873 15.75 0.47998 12.2812 0.47998 8C0.47998 3.71875 3.94873 0.25 8.22998 0.25ZM7.32373 4.75L9.66748 7H3.97998C3.54248 7 3.22998 7.34375 3.22998 7.75V8.25C3.22998 8.6875 3.54248 9 3.97998 9H9.66748L7.32373 11.2812C7.01123 11.5625 7.01123 12.0625 7.29248 12.3438L7.63623 12.6875C7.94873 12.9688 8.41748 12.9688 8.69873 12.6875L12.855 8.53125C13.1362 8.25 13.1362 7.78125 12.855 7.5L8.69873 3.34375C8.41748 3.03125 7.94873 3.03125 7.63623 3.34375L7.29248 3.6875C7.01123 3.96875 7.01123 4.46875 7.32373 4.75Z"
                  fill="white"
                />
              </svg>
            </button>
            {/* reviews */}

            <div className="w-[681px] pr-[124px] pt-[50px] justify-start items-start gap-[89.16px] inline-flex sm:flex-row flex-col">
              <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                <div className="px-[38.64px] justify-center items-start inline-flex">
                  <div className="h-[75px] pl-[22.94px] pr-[24.06px] pt-[13px] pb-[7px] bg-neutral-50 rounded-[37.50px] border border-neutral-200 justify-start items-start flex">
                    <div className="text-center text-yellow-400 text-[28px] font-normal leading-[55px]">
                      <svg
                        width="28"
                        height="29"
                        viewBox="0 0 28 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.58 0.9375C21.0722 0.9375 27.1425 7.00781 27.1425 14.5C27.1425 21.9922 21.0722 28.0625 13.58 28.0625C6.08783 28.0625 0.0175171 21.9922 0.0175171 14.5C0.0175171 7.00781 6.08783 0.9375 13.58 0.9375ZM13.58 25.4375C19.5956 25.4375 24.5175 20.5703 24.5175 14.5C24.5175 8.48438 19.5956 3.5625 13.58 3.5625C7.5097 3.5625 2.64252 8.48438 2.64252 14.5C2.64252 20.5703 7.5097 25.4375 13.58 25.4375ZM18.1738 17.6172C18.6113 17.0703 19.4316 17.0156 19.9785 17.4531C20.58 17.8906 20.6347 18.7656 20.1425 19.3125C18.5019 21.2812 16.0956 22.375 13.58 22.375C11.0097 22.375 8.60345 21.2812 6.96283 19.3125C6.47064 18.7656 6.58002 17.8906 7.12689 17.4531C7.67377 17.0156 8.49408 17.0703 8.98627 17.6172C10.08 18.9844 11.7753 19.75 13.58 19.75C15.33 19.75 17.0253 18.9844 18.1738 17.6172ZM7.45502 12.0391L6.96283 12.9688C6.85345 13.1875 6.6347 13.2422 6.41595 13.1875C6.25189 13.1328 6.08783 12.9688 6.14252 12.75C6.30658 10.4531 7.89252 8.8125 9.20502 8.8125C10.4628 8.8125 12.0488 10.4531 12.2675 12.75C12.2675 12.9688 12.1035 13.1328 11.9394 13.1875C11.7753 13.2422 11.5566 13.1875 11.4472 12.9688L10.9003 12.0391C10.4628 11.3281 9.86127 10.8906 9.20502 10.8906C8.49408 10.8906 7.89252 11.3281 7.45502 12.0391ZM17.955 8.8125C19.2128 8.8125 20.7988 10.4531 21.0175 12.75C21.0175 12.9688 20.8535 13.1328 20.6894 13.1875C20.5253 13.2422 20.3066 13.1875 20.1972 12.9688L19.6503 12.0391C19.2128 11.3281 18.6113 10.8906 17.955 10.8906C17.2441 10.8906 16.6425 11.3281 16.205 12.0391L15.7128 12.9688C15.6035 13.1875 15.3847 13.2422 15.166 13.1875C15.0019 13.1328 14.8378 12.9688 14.8925 12.75C15.0566 10.4531 16.6425 8.8125 17.955 8.8125Z"
                          fill="#FECE01"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-4 pr-4 py-1 bg-white rounded border border-neutral-200 justify-start items-start flex">
                    <div className="text-neutral-700 text-2xl font-semibold leading-9">
                      500
                    </div>
                  </div>
                </div>
                <div className="text-neutral-500 text-base font-semibold capitalize leading-relaxed tracking-wide">
                  Happy Customers
                </div>
                <div className="w-[50px] h-[3px] bg-yellow-400" />
              </div>
              <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                <div className="px-[13.78px] justify-center items-start inline-flex">
                  <div className="h-[75px] px-[23.50px] pt-[13px] pb-[7px] bg-neutral-50 rounded-[37.50px] border border-neutral-200 justify-start items-start flex">
                    <div className="text-center text-yellow-400 text-[28px] font-black leading-[55px]">
                      <svg
                        width="29"
                        height="21"
                        viewBox="0 0 29 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M28.0091 6.125C28.4466 6.125 28.7747 6.5625 28.6653 6.94531L28.3372 8.25781C28.2825 8.58594 28.0091 8.75 27.7356 8.75H26.5872C27.3528 9.40625 27.845 10.3359 27.845 11.375V14C27.845 14.9297 27.4622 15.6953 26.97 16.2969V19.25C26.97 20.2344 26.1497 21 25.22 21H23.47C22.4856 21 21.72 20.2344 21.72 19.25V17.5H7.72V19.25C7.72 20.2344 6.89969 21 5.97 21H4.22C3.23563 21 2.47 20.2344 2.47 19.25V16.2969C1.92313 15.6953 1.595 14.9297 1.595 14V11.375C1.595 10.3359 2.0325 9.40625 2.79813 8.75H1.70438C1.37625 8.75 1.10281 8.58594 1.04813 8.25781L0.720001 6.94531C0.610626 6.5625 0.938751 6.125 1.37625 6.125H4.60281L5.5325 3.88281C6.46219 1.53125 8.70438 0 11.22 0H18.1653C20.6809 0 22.9231 1.53125 23.8528 3.88281L24.7825 6.125H28.0091ZM8.75906 5.19531L7.72 7.875H21.72L20.6263 5.19531C20.1888 4.15625 19.2591 3.5 18.1653 3.5H11.22C10.1263 3.5 9.19656 4.15625 8.75906 5.19531ZM5.97 14C7.00906 14 8.595 14.1641 8.595 13.125C8.595 12.0859 7.00906 10.5 5.97 10.5C4.87625 10.5 4.22 11.2109 4.22 12.25C4.22 13.3438 4.87625 14 5.97 14ZM23.47 14C24.5091 14 25.22 13.3438 25.22 12.25C25.22 11.2109 24.5091 10.5 23.47 10.5C22.3763 10.5 20.845 12.0859 20.845 13.125C20.845 14.1641 22.3763 14 23.47 14Z"
                          fill="#FECE01"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-4 pr-[15.17px] py-1 bg-white rounded border border-neutral-200 justify-start items-start flex">
                    <div className="text-neutral-700 text-2xl font-semibold leading-9">
                      200
                    </div>
                  </div>
                </div>
                <div className="text-neutral-500 text-base font-semibold capitalize leading-relaxed tracking-wide">
                  Luxury Cars
                </div>
                <div className="w-[50px] h-[3px] bg-yellow-400" />
              </div>
              <div className="flex-col justify-start items-start gap-[15px] inline-flex">
                <div className="px-[24.42px] justify-center items-start inline-flex">
                  <div className="h-[75px] px-5 pt-[13px] pb-[7px] bg-neutral-50 rounded-[37.50px] border border-neutral-200 justify-start items-start flex">
                    <div className="text-center text-yellow-400 text-[28px] font-black leading-[55px]">
                      <svg
                        width="36"
                        height="29"
                        viewBox="0 0 36 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M33.9394 20.9531L35.3613 21.7734C35.5253 21.8281 35.58 22.0469 35.5253 22.2109C35.1425 23.4141 34.5409 24.4531 33.7206 25.3828C33.6113 25.4922 33.3925 25.5469 33.2284 25.4375L31.8066 24.6172C31.205 25.1094 30.5488 25.5469 29.7831 25.7656V27.4062C29.7831 27.625 29.6738 27.7891 29.5097 27.7891C28.3066 28.0625 27.1034 28.0625 25.8456 27.7891C25.6816 27.7891 25.5722 27.625 25.5722 27.4062V25.7656C24.8066 25.5469 24.1503 25.1094 23.5488 24.6172L22.1269 25.4375C21.9628 25.5469 21.7441 25.4922 21.6347 25.3828C20.8144 24.4531 20.1581 23.4141 19.83 22.2109C19.7753 22.0469 19.83 21.8281 19.9941 21.7734L21.4159 20.9531C21.2519 20.1875 21.2519 19.3672 21.4159 18.6016L19.9941 17.7812C19.83 17.7266 19.7753 17.5078 19.83 17.3438C20.1581 16.1406 20.8144 15.1016 21.6347 14.1719C21.7441 14.0625 21.9628 14.0078 22.1269 14.1172L23.5488 14.9375C24.1503 14.4453 24.8066 14.0078 25.5722 13.7891V12.1484C25.5722 11.9297 25.6816 11.7656 25.8456 11.7656C27.0488 11.4922 28.2519 11.4922 29.5097 11.7656C29.6738 11.7656 29.7831 11.9297 29.7831 12.1484V13.7891C30.5488 14.0078 31.205 14.4453 31.8066 14.9375L33.2284 14.1172C33.3925 14.0078 33.6113 14.0625 33.7206 14.1719C34.5409 15.1016 35.1425 16.1406 35.5253 17.3438C35.58 17.5078 35.5253 17.7266 35.3613 17.7812L33.9394 18.6016C34.1034 19.3672 34.1034 20.1875 33.9394 20.9531ZM27.705 22.4297C29.1269 22.4297 30.33 21.2266 30.33 19.75C30.33 18.3281 29.1269 17.125 27.705 17.125C26.2284 17.125 25.0253 18.3281 25.0253 19.75C25.0253 21.2266 26.2284 22.4297 27.705 22.4297ZM12.83 14.5C8.94719 14.5 5.83 11.3828 5.83 7.5C5.83 3.67188 8.94719 0.5 12.83 0.5C16.6581 0.5 19.83 3.67188 19.83 7.5C19.83 11.3828 16.6581 14.5 12.83 14.5ZM23.8222 26.9141V27.4062C23.8222 27.625 23.8769 27.8438 23.9316 28.0625C23.4941 28.3359 23.0019 28.5 22.455 28.5H3.205C1.72844 28.5 0.580002 27.3516 0.580002 25.875V23.6328C0.580002 19.5859 3.86125 16.25 7.90813 16.25H8.83781C10.0409 16.8516 11.4081 17.125 12.83 17.125C14.2519 17.125 15.5644 16.8516 16.7675 16.25H17.6972C17.9159 16.25 18.1347 16.3047 18.3534 16.3594C18.2988 16.5234 18.1894 16.6328 18.1347 16.7969C17.8613 17.7812 18.2441 18.8203 19.1191 19.3125L19.5566 19.5859C19.5566 19.6953 19.5566 19.8594 19.5566 19.9688L19.1191 20.2422C18.2441 20.7344 17.8613 21.7734 18.1347 22.7578C18.5722 24.125 19.3378 25.4922 20.3769 26.5312C20.7597 26.9688 21.3613 27.2422 21.9081 27.2422C22.2909 27.2422 22.6738 27.1328 23.0019 26.9688L23.4394 26.6953C23.5488 26.75 23.6581 26.8594 23.8222 26.9141Z"
                          fill="#FECE01"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="pl-4 pr-[15.17px] py-1 bg-white rounded border border-neutral-200 justify-start items-start flex">
                    <div className="text-neutral-700 text-2xl font-semibold leading-9">
                      150
                    </div>
                  </div>
                </div>
                <div className="text-neutral-500 text-base font-semibold capitalize leading-relaxed tracking-wide">
                  Expert Drivers
                </div>
                <div className="w-[50px] h-[3px] bg-yellow-400" />
              </div>
            </div>
          </div>
          <div className="col-span-2 sm:col-span-1 text-white order-2 sm:order-2">
            <div className="w-500 sm:w-200 h-auto relative">
              <Image
                className="w-500 sm:w-200 h-auto"
                src={videoImg}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* deals on booking */}

      <div className="h-[774px] relative bg-cover bg-center text-white">
        <Image src={HeroImg5} alt="Background Image" className="h-[870px] bg-opacity-25" />

        <div className="w-full h-[870px] left-0 top-0 absolute  bg-gray-800 bg-opacity-80 ">
          <div className="w-[1320px] h-[554px] left-[52.50px] top-[110px] absolute">
            <div className="h-[138px] left-[315px] top-0 absolute flex-col justify-start items-start gap-2.5 inline-flex">
              <div className="w-[690px] h-20 relative">
                <div className="left-[158.38px] top-0 absolute text-center text-white text-[40px] font-semibold capitalize leading-[48px]">
                  Deals on Booking
                </div>
                <Image
                  className="w-[43px] h-[22px] left-[323.50px] top-[58px] absolute"
                  src={HeroImg4}
                  alt=""
                />
              </div>
              <div className="w-[690px] pl-[5.86px] pr-[5.14px] justify-start items-start inline-flex">
                <div className="text-center text-zinc-300 text-[15px] font-normal leading-normal">
                  Lorem Ipsum passages, and more recently with desktop
                  publishing software and applications like
                  <br />
                  aldus pageMaker which has different variations.
                </div>
              </div>
            </div>
            <div className="w-[1320px] h-[346px] left-0 top-[208px] absolute grid grid-cols-3 items-center">
              <div className="w-[440px] h-[346px] left-0 top-0 absolute order-2 sm:order-1">
                <div className="w-[416px] px-[50px] left-[12px] top-0 absolute justify-center items-start inline-flex">
                  <Image
                    className="w-[316px] h-[316px] relative rounded-[158px] border border-white"
                    src={London}
                    alt=""
                  />
                  <div className="w-[166.39px] h-[158px] left-[124.80px] top-[79px] absolute bg-black bg-opacity-40 rounded-[81.10px] shadow" />
                  <div className="w-[219.02px] pl-[25px] pr-[25.01px] pt-[30px] pb-5 left-[192.81px] top-[214.15px] absolute origin-top-left rotate-[-4.70deg] bg-gray-900 bg-opacity-90 flex-col justify-start items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-[22px] font-medium leading-snug">
                      London
                    </div>
                    <div className="w-[169.02px] h-[29px] relative">
                      <div className="left-[2px] top-[0.99px] absolute text-center text-stone-300 text-base font-normal leading-7">
                        Starts from{' '}
                      </div>
                      <div className="left-[86.91px] top-[-0px] absolute text-center text-white text-lg font-bold leading-7">
                        $190/day
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] h-[346px] left-[440px] top-0 absolute order-3 sm:order-">
                <div className="w-[416px] px-[50px] left-[12px] top-0 absolute justify-center items-start inline-flex">
                  <Image
                    className="w-[316px] h-[316px] relative rounded-[158px] border border-white"
                    src={Marchin}
                    alt=""
                  />
                  <div className="w-[166.39px] h-[158px] left-[124.80px] top-[79px] absolute bg-black bg-opacity-40 rounded-[81.10px] shadow" />
                  <div className="w-[219.02px] h-[111px] left-[192.81px] top-[214.15px] absolute origin-top-left rotate-[-4.70deg] bg-gray-900 bg-opacity-90">
                    <div className="left-[28.67px] top-[30px] absolute text-center text-white text-[22px] font-medium leading-snug">
                      Marcin Nowak
                    </div>
                    <div className="w-[169.02px] h-[29px] left-[25px] top-[62.01px] absolute">
                      <div className="left-[2px] top-[0.99px] absolute text-center text-stone-300 text-base font-normal leading-7">
                        Starts from{' '}
                      </div>
                      <div className="left-[86.91px] top-[-0px] absolute text-center text-white text-lg font-bold leading-7">
                        $260/day
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[440px] h-[346px] left-[880px] top-0 absolute order-1 sm:order-1">
                <div className="w-[416px] px-[50px] left-[12px] top-0 absolute justify-center items-start inline-flex">
                  <Image
                    className="w-[316px] h-[316px] relative rounded-[158px] border border-white"
                    src={Toronto}
                    alt=""
                  />
                  <div className="w-[166.39px] h-[158px] left-[124.80px] top-[79px] absolute bg-black bg-opacity-40 rounded-[81.10px] shadow" />
                  <div className="w-[219.02px] h-[111px] left-[192.81px] top-[214.15px] absolute origin-top-left rotate-[-4.70deg] bg-gray-900 bg-opacity-90">
                    <div className="left-[66.45px] top-[30px] absolute text-center text-white text-[22px] font-medium leading-snug">
                      Toronto
                    </div>
                    <div className="w-[169.02px] h-[29px] left-[25px] top-[62.01px] absolute">
                      <div className="left-[2px] top-[0.99px] absolute text-center text-stone-300 text-base font-normal leading-7">
                        Starts from{' '}
                      </div>
                      <div className="left-[86.91px] top-[-0px] absolute text-center text-white text-lg font-bold leading-7">
                        $350/day
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
  );
};

export default Hero;
