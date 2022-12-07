import React from 'react';
import Image from 'next/image';
import { ImageWeb3Desktop } from '../../public/indexImages';

const FeaturedPost = () => {
  return (
    <div className='desktop:box-border mobile:h-[520px] w-[350px] desktop:p-4 desktop:w-[650px] desktop:h-[500px]'>
      <Image src={ImageWeb3Desktop} className='h-[200px] w-[300px] mx-auto rounded-md desktop:w-[600px] desktop:h-[350px]' />
      <div className='desktop:flex p-4'>
        <h1 className='text-5xl desktop:flex-initial desktop:w-[365px] font-extrabold left-5'>The Bright Future of Web 3.0?</h1>
        <p className='desktop:flex-col desktop:flex-initial desktop:w-[350px] desktop:mt-1 desktop:font-light desktop:text-sm'>
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
          <div className='px-4 w-32 mt-3 flex flex-wrap-reverse text-center py-2 bg-primary-red uppercase text-sm font-medium text-netral-white hover:opacity-80'>Read More</div>
        </p>
      </div>
    </div>
  );
};

export default FeaturedPost;
