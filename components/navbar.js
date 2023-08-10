import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="container">
          <div className="flex justify-between ">
            <div className="w-96 h-28 relative">
              <div className="w-80 h-28 left-0 top-0 absolute italic">
                <div className="w-80 h-12 left-[12px] top-[25px] absolute flex-col justify-center items-start inline-flex">
                  <div className="text-center text-neutral-800 text-5xl font-extrabold leading-normal">
                    Logo
                  </div>
                </div>
              </div>
              <div className="hidden lg:flex">
                <div className="w-80 px-3 pb-2 left-[330px] top-0 absolute justify-start items-start inline-flex">
                  <div className="h-28 pr-20 py-8 justify-start items-start gap-3 flex">
                    <div className="h-11 w-11 px-2 py-2 rounded-3xl border border-yellow-400 justify-start items-start flex">
                      <div className="text-center text-yellow-400 text-xl font-black leading-10">
                        <svg
                          width="24"
                          height="19"
                          viewBox="0 0 24 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.9375 5.32031C12.0156 5.24219 12.1328 5.20312 12.25 5.20312C12.3281 5.20312 12.4453 5.24219 12.5234 5.32031L19.75 11.2188V17.625C19.75 17.9766 19.4375 18.25 19.125 18.25H14.7109C14.3984 18.25 14.0859 17.9766 14.0859 17.625V13.875C14.0859 13.5625 13.8125 13.25 13.4609 13.25H10.9609C10.6484 13.25 10.3359 13.5625 10.3359 13.875V17.625C10.3359 17.9766 10.0625 18.25 9.75 18.25H5.375C5.02344 18.25 4.75 17.9766 4.75 17.625V11.2578L11.9375 5.32031ZM23.3047 9.34375C23.4219 9.42188 23.5 9.57812 23.5 9.69531C23.5 9.8125 23.4609 9.92969 23.3828 10.0078L22.3672 11.2188C22.2891 11.3359 22.1719 11.375 22.0156 11.375C21.8984 11.375 21.7812 11.3359 21.7031 11.2578L12.5234 3.71875C12.4453 3.64062 12.3281 3.60156 12.25 3.60156C12.1328 3.60156 12.0156 3.64062 11.9375 3.71875L2.75781 11.2578C2.67969 11.3359 2.5625 11.375 2.44531 11.375C2.28906 11.375 2.17188 11.3359 2.09375 11.2188L1.07812 10.0078C1.03906 9.92969 0.960938 9.8125 0.960938 9.69531C0.960938 9.57812 1.03906 9.42188 1.15625 9.34375L11.0391 1.17969C11.3516 0.945312 11.7812 0.789062 12.25 0.789062C12.6797 0.789062 13.1094 0.945312 13.4219 1.17969L16.9375 4.07031V1.25781C16.9375 0.984375 17.1328 0.789062 17.4062 0.789062H19.5938C19.8281 0.789062 20.0625 0.984375 20.0625 1.25781V6.64844L23.3047 9.34375Z"
                            fill="#FECE01"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-40 flex-col justify-start items-start inline-flex">
                      <div className="text-yellow-400 text-lg font-semibold leading-tight">
                        Address
                      </div>
                      <div className="text-neutral-700 text-base font-normal leading-normal">
                        Example England
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 px-3 pb-2 left-[660px] top-0 absolute justify-start items-start inline-flex">
                  <div className="h-28 pr-20 py-8 justify-start items-start gap-3 flex">
                    <div className="h-11 w-11 px-3 py-3 rounded-3xl border border-yellow-400 justify-start items-start flex">
                      <div className="text-center text-yellow-400 text-xl font-black leading-10">
                        <svg
                          width="20"
                          height="15"
                          viewBox="0 0 20 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19.6094 4.96094C19.7656 4.84375 20 4.96094 20 5.15625V13.125C20 14.1797 19.1406 15 18.125 15H1.875C0.820312 15 0 14.1797 0 13.125V5.15625C0 4.96094 0.195312 4.84375 0.351562 4.96094C1.25 5.66406 2.38281 6.52344 6.36719 9.41406C7.1875 10 8.59375 11.2891 10 11.2891C11.3672 11.2891 12.8125 10 13.5938 9.41406C17.5781 6.52344 18.7109 5.66406 19.6094 4.96094ZM10 10C9.0625 10.0391 7.77344 8.86719 7.10938 8.39844C1.91406 4.64844 1.52344 4.29688 0.351562 3.35938C0.117188 3.20312 0 2.92969 0 2.61719V1.875C0 0.859375 0.820312 0 1.875 0H18.125C19.1406 0 20 0.859375 20 1.875V2.61719C20 2.92969 19.8438 3.20312 19.6094 3.35938C18.4375 4.29688 18.0469 4.64844 12.8516 8.39844C12.1875 8.86719 10.8984 10.0391 10 10Z"
                            fill="#FECE01"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="w-40 flex-col justify-start items-start inline-flex">
                      <div className="text-yellow-400 text-lg font-semibold leading-tight">
                        Email Us
                      </div>
                      <div className="text-neutral-700 text-base font-normal leading-normal">
                        example@booking.com
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-80 h-28 left-[990px] top-0 absolute">
                  <div className="w-80 h-28 left-[12px] top-0 absolute">
                    <div className="w-80 pl-1.5 pr-64 pt-9 left-0 top-0 absolute justify-start items-start inline-flex">
                      <div className="w-14 h-20 left-0 top-0 absolute  bg-slate-700 rounded-bl-3xl rounded-br-3xl shadow" />

                      <div className="w-11 h-11 px-3 py-2 bg-slate-800 rounded-3xl border border-slate-600 justify-start items-start inline-flex">
                        <div className="text-center text-white text-xl font-black leading-10">
                          <svg
                            width="20"
                            height="23"
                            viewBox="0 0 20 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.16797 22.5352C0.582031 16.9922 0.582031 7.92578 6.16797 2.38281C6.42578 2.125 6.76953 2.08203 7.07031 2.25391L9.86328 4.01562C10.0781 4.14453 10.207 4.35938 10.207 4.61719C10.207 4.70312 10.207 4.83203 10.1641 4.91797L8.74609 8.39844C8.66016 8.65625 8.40234 8.82812 8.05859 8.82812H8.01562L5.60938 8.61328C4.70703 11.1055 4.70703 13.8555 5.60938 16.3047L8.01562 16.0898H8.05859C8.40234 16.0898 8.66016 16.2617 8.74609 16.5195L10.1641 20C10.207 20.0859 10.207 20.2148 10.207 20.3008C10.207 20.5586 10.0781 20.7734 9.86328 20.9023L7.07031 22.6641C6.94141 22.75 6.8125 22.75 6.68359 22.75C6.46875 22.75 6.29688 22.707 6.16797 22.5352ZM12.6133 4.875C13.0859 5.73438 13.0859 6.80859 12.6133 7.66797C12.4414 7.96875 12.0547 8.01172 11.7969 7.79688L11.5391 7.53906C11.3672 7.36719 11.3242 7.10938 11.4531 6.89453C11.5391 6.72266 11.582 6.50781 11.582 6.29297C11.582 6.03516 11.5391 5.82031 11.4531 5.64844C11.3242 5.43359 11.3672 5.17578 11.5391 5.00391L11.7969 4.74609C12.0547 4.53125 12.4414 4.57422 12.6133 4.875ZM16.5234 0.964844C19.1445 4.01562 19.1445 8.52734 16.5234 11.5781C16.3516 11.8359 16.0078 11.8359 15.793 11.6211L15.5352 11.4062C15.3633 11.1914 15.3203 10.8906 15.4922 10.6758C17.6406 8.14062 17.6406 4.40234 15.4922 1.86719C15.3203 1.65234 15.3633 1.35156 15.5352 1.13672L15.793 0.921875C16.0078 0.707031 16.3516 0.707031 16.5234 0.964844ZM14.5469 2.89844C16.0938 4.875 16.1367 7.66797 14.5469 9.64453C14.375 9.90234 14.0312 9.94531 13.8164 9.73047L13.5586 9.47266C13.3438 9.30078 13.3438 9 13.4727 8.78516C14.6328 7.32422 14.6328 5.21875 13.4727 3.75781C13.3438 3.54297 13.3438 3.24219 13.5586 3.07031L13.8164 2.8125C14.0312 2.59766 14.375 2.64062 14.5469 2.89844Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="left-[75px] top-[52px] absolute text-slate-800 text-xl font-semibold leading-tight">
                      +1-234-000-2345
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* modile button  */}
            <div className="md:hidden flex items-center">
              <button
                type="submit"
                onClick={() => setOpen(!open)}
                className="mx-3 hover:bg-sky-700 rounded text-3xl cursor-pointer"
              >
                {open ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
          {/* mobile menu */}
          <div className={`md:hidden ${open ? 'visible' : ' hidden'}`}>
            <div className="justify-start items-start gap-3 flex">
              <div className="rounded-3xl border border-yellow-400 justify-start items-start flex">
                <div className="text-center text-yellow-400 text-xl font-black leading-10">
                  <svg
                    width="24"
                    height="19"
                    viewBox="0 0 24 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9375 5.32031C12.0156 5.24219 12.1328 5.20312 12.25 5.20312C12.3281 5.20312 12.4453 5.24219 12.5234 5.32031L19.75 11.2188V17.625C19.75 17.9766 19.4375 18.25 19.125 18.25H14.7109C14.3984 18.25 14.0859 17.9766 14.0859 17.625V13.875C14.0859 13.5625 13.8125 13.25 13.4609 13.25H10.9609C10.6484 13.25 10.3359 13.5625 10.3359 13.875V17.625C10.3359 17.9766 10.0625 18.25 9.75 18.25H5.375C5.02344 18.25 4.75 17.9766 4.75 17.625V11.2578L11.9375 5.32031ZM23.3047 9.34375C23.4219 9.42188 23.5 9.57812 23.5 9.69531C23.5 9.8125 23.4609 9.92969 23.3828 10.0078L22.3672 11.2188C22.2891 11.3359 22.1719 11.375 22.0156 11.375C21.8984 11.375 21.7812 11.3359 21.7031 11.2578L12.5234 3.71875C12.4453 3.64062 12.3281 3.60156 12.25 3.60156C12.1328 3.60156 12.0156 3.64062 11.9375 3.71875L2.75781 11.2578C2.67969 11.3359 2.5625 11.375 2.44531 11.375C2.28906 11.375 2.17188 11.3359 2.09375 11.2188L1.07812 10.0078C1.03906 9.92969 0.960938 9.8125 0.960938 9.69531C0.960938 9.57812 1.03906 9.42188 1.15625 9.34375L11.0391 1.17969C11.3516 0.945312 11.7812 0.789062 12.25 0.789062C12.6797 0.789062 13.1094 0.945312 13.4219 1.17969L16.9375 4.07031V1.25781C16.9375 0.984375 17.1328 0.789062 17.4062 0.789062H19.5938C19.8281 0.789062 20.0625 0.984375 20.0625 1.25781V6.64844L23.3047 9.34375Z"
                      fill="#FECE01"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex-col justify-start items-start inline-flex">
                <div className="text-yellow-400 text-lg font-semibold leading-tight">
                  Address
                </div>
                <div className="text-neutral-700 text-base font-normal leading-normal">
                  Example England
                </div>
              </div>
            </div>
            <div className="justify-start items-start gap-3 flex">
              <div className="h-11 px-3 pt-px pb-0.5 rounded-3xl border border-yellow-400 justify-start items-start flex">
                <div className="text-center text-yellow-400 text-xl font-black leading-10">
                  <svg
                    width="20"
                    height="15"
                    viewBox="0 0 20 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.6094 4.96094C19.7656 4.84375 20 4.96094 20 5.15625V13.125C20 14.1797 19.1406 15 18.125 15H1.875C0.820312 15 0 14.1797 0 13.125V5.15625C0 4.96094 0.195312 4.84375 0.351562 4.96094C1.25 5.66406 2.38281 6.52344 6.36719 9.41406C7.1875 10 8.59375 11.2891 10 11.2891C11.3672 11.2891 12.8125 10 13.5938 9.41406C17.5781 6.52344 18.7109 5.66406 19.6094 4.96094ZM10 10C9.0625 10.0391 7.77344 8.86719 7.10938 8.39844C1.91406 4.64844 1.52344 4.29688 0.351562 3.35938C0.117188 3.20312 0 2.92969 0 2.61719V1.875C0 0.859375 0.820312 0 1.875 0H18.125C19.1406 0 20 0.859375 20 1.875V2.61719C20 2.92969 19.8438 3.20312 19.6094 3.35938C18.4375 4.29688 18.0469 4.64844 12.8516 8.39844C12.1875 8.86719 10.8984 10.0391 10 10Z"
                      fill="#FECE01"
                    />
                  </svg>
                </div>
              </div>
              <div className="w-40 flex-col justify-start items-start inline-flex">
                <div className="text-yellow-400 text-lg font-semibold leading-tight">
                  Email Us
                </div>
                <div className="text-neutral-700 text-base font-normal leading-normal">
                  example@booking.com
                </div>
              </div>
            </div>
            <div className=" justify-start items-start inline-flex">
              <div className="w-11 h-11 px-3.5 py-0.5 bg-slate-800 rounded-3xl border border-slate-600 justify-start items-start inline-flex">
                <div className="text-center text-white text-xl font-black leading-10">
                  <svg
                    width="20"
                    height="23"
                    viewBox="0 0 20 23"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.16797 22.5352C0.582031 16.9922 0.582031 7.92578 6.16797 2.38281C6.42578 2.125 6.76953 2.08203 7.07031 2.25391L9.86328 4.01562C10.0781 4.14453 10.207 4.35938 10.207 4.61719C10.207 4.70312 10.207 4.83203 10.1641 4.91797L8.74609 8.39844C8.66016 8.65625 8.40234 8.82812 8.05859 8.82812H8.01562L5.60938 8.61328C4.70703 11.1055 4.70703 13.8555 5.60938 16.3047L8.01562 16.0898H8.05859C8.40234 16.0898 8.66016 16.2617 8.74609 16.5195L10.1641 20C10.207 20.0859 10.207 20.2148 10.207 20.3008C10.207 20.5586 10.0781 20.7734 9.86328 20.9023L7.07031 22.6641C6.94141 22.75 6.8125 22.75 6.68359 22.75C6.46875 22.75 6.29688 22.707 6.16797 22.5352ZM12.6133 4.875C13.0859 5.73438 13.0859 6.80859 12.6133 7.66797C12.4414 7.96875 12.0547 8.01172 11.7969 7.79688L11.5391 7.53906C11.3672 7.36719 11.3242 7.10938 11.4531 6.89453C11.5391 6.72266 11.582 6.50781 11.582 6.29297C11.582 6.03516 11.5391 5.82031 11.4531 5.64844C11.3242 5.43359 11.3672 5.17578 11.5391 5.00391L11.7969 4.74609C12.0547 4.53125 12.4414 4.57422 12.6133 4.875ZM16.5234 0.964844C19.1445 4.01562 19.1445 8.52734 16.5234 11.5781C16.3516 11.8359 16.0078 11.8359 15.793 11.6211L15.5352 11.4062C15.3633 11.1914 15.3203 10.8906 15.4922 10.6758C17.6406 8.14062 17.6406 4.40234 15.4922 1.86719C15.3203 1.65234 15.3633 1.35156 15.5352 1.13672L15.793 0.921875C16.0078 0.707031 16.3516 0.707031 16.5234 0.964844ZM14.5469 2.89844C16.0938 4.875 16.1367 7.66797 14.5469 9.64453C14.375 9.90234 14.0312 9.94531 13.8164 9.73047L13.5586 9.47266C13.3438 9.30078 13.3438 9 13.4727 8.78516C14.6328 7.32422 14.6328 5.21875 13.4727 3.75781C13.3438 3.54297 13.3438 3.24219 13.5586 3.07031L13.8164 2.8125C14.0312 2.59766 14.375 2.64062 14.5469 2.89844Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute text-slate-800 text-xl font-semibold leading-tight">
              +1-234-000-2345
            </div>
          </div>
        </div>
        {/* home navbar */}
        <div className="bg-primary text-lightgrey">
          <div className="container">
            <div className="hidden md:flex ">
              <Link
                href="/home"
                className="px-2 py-2  hover:text-yellow rounded"
              >
                HOME
              </Link>
              <Link
                href="/posts"
                className="px-2 py-2 hover:text-yellow rounded"
              >
                POSTS
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
