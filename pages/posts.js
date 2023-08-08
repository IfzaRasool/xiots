import React from 'react';
import HeroImg7 from '/assets/hero7.png';
import Image from 'next/image';
import PostTable from '../components/posttable';

const Posts = () => {
  return (
    <div>
      <div className="relative bg-cover bg-center text-white">
        <Image src={HeroImg7} alt="Background Image" />
        <div className="absolute inset-0 bg-opacity-70  bg-gray-900">
            <div className='py-[107px]'>
            <div className="text-center text-white text-5xl font-semibold uppercase leading-10">
              Posts
          </div>
          <div className="text-center text-white text-xl font-medium leading-normal">Home » Posts</div>
        </div>
      </div>
      </div>
      <PostTable/>
    </div>
  );
};

export default Posts;
