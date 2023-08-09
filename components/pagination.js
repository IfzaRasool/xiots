import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PropTypes } from '@mui/material';



const Pagination = ({setCurrentPage}) => {
  const postStore = useSelector((state) => state.data);

  // pagination
  const itemsPerPage = 4;


  // end
  const totalPages = Math.ceil(postStore.length / itemsPerPage);

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <li key={i} onClick={() => setCurrentPage(i)}>
          {i}
        </li>
      );
    }
    return pageNumbers;
  };
  return (
    <div>
      <div className=" h-10 left-[19.50px] top-[400.94px] absolute">
        <div className="px-2.5 left-[290px] top-0 absolute justify-start items-start inline-flex">
          <div className="w-10 h-10 relative bg-neutral-900 rounded-3xl">
            <div className="w-3.5 pr-0.5 py-0.5 left-[13px] top-[10px] absolute justify-start items-start inline-flex">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M6.0625 10.0644L2.25 5.81444L6.0625 1.56444C6.1875 1.4186 6.25 1.25194 6.25 1.06444C6.25 0.856103 6.17708 0.668603 6.03125 0.501936C5.63542 0.231103 5.27083 0.251936 4.9375 0.564436L0.6875 5.28319C0.4375 5.61652 0.4375 5.94985 0.6875 6.28319L4.90625 11.0332C5.23958 11.3457 5.59375 11.3665 5.96875 11.0957C6.30208 10.7832 6.33333 10.4394 6.0625 10.0644ZM6.6875 5.28319C6.4375 5.61652 6.4375 5.94985 6.6875 6.28319L10.9062 11.0332C11.2396 11.3457 11.5938 11.3665 11.9688 11.0957C12.2812 10.7624 12.3021 10.4082 12.0312 10.0332L8.25 5.81444L12.0625 1.56444C12.1875 1.4186 12.25 1.25194 12.25 1.06444C12.25 0.856103 12.1771 0.668603 12.0312 0.501936C11.6562 0.231103 11.3021 0.251936 10.9688 0.564436L6.6875 5.28319Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="pr-2.5 left-[349px] top-0 absolute justify-start items-start inline-flex">
          <div className="h-10 px-4 pt-1 pb-1.5 bg-yellow rounded-3xl justify-center items-start flex">
            <div className="text-center text-white text-base font-normal leading-7">
              {renderPageNumbers()}
            </div>
          </div>
        </div>
        <div className="pr-2.5 left-[398px] top-0 absolute justify-start items-start inline-flex">
          <div className="h-10 px-4 pt-1 pb-1.5 bg-neutral-900 rounded-3xl justify-center items-start flex">
            <div className="text-center text-white text-base font-normal leading-7">
              2
            </div>
          </div>
        </div>
        <div className="pr-2.5 left-[447px] top-0 absolute justify-start items-start inline-flex">
          <div className="h-10 px-4 pt-1 pb-1.5 bg-neutral-900 rounded-3xl justify-center items-start flex">
            <div className="text-center text-white text-base font-normal leading-7">
              3
            </div>
          </div>
        </div>
        <div className="pr-2.5 left-[496px] top-0 absolute justify-start items-start inline-flex">
          <div className="w-10 h-10 relative bg-neutral-900 rounded-3xl">
            <div className="w-3.5 pr-0.5 py-0.5 left-[13px] top-[10px] absolute justify-start items-start inline-flex">
              <svg
                width="13"
                height="12"
                viewBox="0 0 13 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="Vector"
                  d="M6.68862 1.53319L10.5011 5.81444L6.68862 10.0644C6.56362 10.2103 6.50112 10.3769 6.50112 10.5644C6.50112 10.7728 6.57403 10.9603 6.71987 11.1269C7.09487 11.3978 7.44903 11.3769 7.78237 11.0644L12.0011 6.31444C12.2511 5.9811 12.2511 5.64777 12.0011 5.31444L7.78237 0.564436C7.46987 0.251936 7.1157 0.231103 6.71987 0.501936C6.4282 0.856103 6.41778 1.19985 6.68862 1.53319ZM6.06362 6.31444C6.31362 5.9811 6.31362 5.64777 6.06362 5.31444L1.81362 0.564436C1.48028 0.251936 1.12612 0.231103 0.751116 0.501936C0.438616 0.856103 0.417783 1.19985 0.688616 1.53319L4.50112 5.81444L0.688616 10.0644C0.563616 10.2103 0.501116 10.3769 0.501116 10.5644C0.501116 10.7728 0.574033 10.9603 0.719866 11.1269C1.09487 11.3978 1.44903 11.3769 1.78237 11.0644L6.06362 6.31444Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
