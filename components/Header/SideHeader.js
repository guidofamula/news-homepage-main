import React from 'react';

const SideHeader = () => {
  return (
    <div className='desktop:mt-3 p-4'>
      <div className='bg-netral-verydarkblue py-4 px-4'>
        <h3 className='text-primary-orange text-lg font-bold'>New</h3>
        <h4 className='text-netral-white py-2 font-semibold'>Hydrogen VS Electric Cars</h4>
        <p className='text-netral-white text-opacity-60 text-sm'>Will hydrogen-fueled cars ever catch up to EVs?</p>
        <div className='my-4 border-lila flex flex-col items-center border-t py-[0.1px] pt-[0.1px] border-netral-white opacity-30'></div>
        <h4 className='text-netral-white py-2 font-semibold'>The Downsides of AI Artistry</h4>
        <p className='text-netral-white text-opacity-60 text-sm'>What are the possible adverse effects of on-demand AI image generation?</p>
        <div className='my-4 border-lila flex flex-col items-center border-t py-[0.1px] pt-[0.1px] border-netral-white opacity-30'></div>
        <h4 className='text-netral-white py-2 font-semibold'>Is VC Funding Drying Up?</h4>
        <p className='text-netral-white text-opacity-60 text-sm'>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
      </div>
    </div>
  );
};

export default SideHeader;
