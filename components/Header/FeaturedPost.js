import React from "react";
import Image from "next/image";
import { ImageWeb3Desktop } from "../../public/indexImages";

const FeaturedPost = ({ prop }) => {
  return (
    <div className='mobile:h-[520px] w-[350px] desktop:p-4 desktop:w-[650px] desktop:h-[500px]'>
      <Image
        alt='The bright desktop wallpaper'
        src={ImageWeb3Desktop}
        className='h-[200px] w-[300px] mx-auto desktop:w-[550px] desktop:h-[280px] desktop:ml-3'
      />
      <div className='desktop:flex p-4'>
        <h1 className='text-5xl desktop:flex-initial desktop:w-[365px] font-extrabold left-5'>
          The Bright Future of Web 3.0?
        </h1>
        <div className='mt-2 desktop:flex-col desktop:flex-initial desktop:w-[360px] desktop:mt-1 font-light desktop:text-[13px] desktop:mr-9'>
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
          <div className='cursor-pointer hover:bg-netral-verydarkblue px-4 w-32 mt-4 flex flex-wrap-reverse text-center py-2 bg-primary-red uppercase desktop:mt-5 text-sm font-medium text-netral-white'>
            <div className='mx-auto'>Read More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
