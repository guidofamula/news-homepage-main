import React from 'react';

import { BrandLogo, FeaturedPost, Navmenu, SideHeader } from './indexHeader';

const HeaderContainer = () => {
  return (
    <div>
      <div className='w-full'>
        <div className='relative flex items-center justify-between'>
          <BrandLogo />
          <Navmenu />
        </div>
      </div>
      <div className='desktop:flex desktop:flex-row'>
        <FeaturedPost />
        <SideHeader />
      </div>
    </div>
  );
};

export default HeaderContainer;
