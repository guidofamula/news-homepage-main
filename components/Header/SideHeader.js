import React from 'react';
import { newarticle } from '../../constants';

const SideHeader = () => {
  return (
    <div className='desktop:mt-1 desktop:-ml-16 p-4 desktop:min-h-full desktop:h-[350px]'>
      <div className='bg-netral-verydarkblue desktop:h-[440px] desktop:-mt-1 py-4 px-4'>
        <h3 className='text-primary-orange text-[38px] font-bold'>New</h3>
        {newarticle.map((article) => (
          <div className='group'>
            <h4 className='text-netral-white py-2 desktop:py-3 desktop:text-[18px] font-semibold hover:text-primary-orange cursor-pointer'>{article.title}</h4>
            <p className='text-netral-white text-opacity-60 text-sm desktop:text-[14px]'>{article.excerpt}</p>
            <div className='group-last:border-hidden my-4 flex flex-col items-center border-t py-[0.1px] pt-[0.1px] border-netral-white opacity-30'></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideHeader;
