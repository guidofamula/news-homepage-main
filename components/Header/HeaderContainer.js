import React from "react";

import { BrandLogo, FeaturedPost, Navmenu, SideHeader } from "./indexHeader";

const HeaderContainer = () => {
  return (
    <div>
      <div className='w-full relative'>
        <div className='flex items-center justify-between desktop:absolute desktop:pt-5 desktop:-mt-24 desktop:justify-between bg-netral-white fixed top-0 left-0 right-0'>
          <BrandLogo />
          <Navmenu />
        </div>
      </div>
      <div className='desktop:flex desktop:mt-16 mt-24 desktop:flex-row'>
        <FeaturedPost />
        <SideHeader />
      </div>
    </div>
  );
};

export default HeaderContainer;
