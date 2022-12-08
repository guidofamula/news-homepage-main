import React from 'react';
import { listarticle } from '../../constants';
import Image from 'next/image';

const ArticlePosts = () => {
  return (
    <div className='desktop:flex  desktop:w-auto desktop:flex-row desktop:mx-2 desktop:px-2'>
      {listarticle.map((list) => (
        <div key={list.id} className='flex desktop:mx-auto desktop:w-full'>
          <div className='min-h-full pt-2 min-w-fit'>
            <Image alt={list.title} className=' h-[180px] desktop:h-auto w-[120px] p-4' src={list.image} />
          </div>
          <div className='mt-5 pr-2'>
            <h1 className='text-[38px] text-netral-verydarkblue desktop:-mt-2 text-opacity-30'>{list.number}</h1>
            <h2 className='text-[18px] desktop:text-[15px] font-bold cursor-pointer text-netral-verydarkblue hover:text-primary-red'>{list.title}</h2>
            <p className='mt-2 leading-normal text-netral-verydarkblue text-opacity-60 desktop:text-[12px]  text-[16px]'>{list.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlePosts;
