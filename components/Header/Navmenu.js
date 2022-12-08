import React, { useState } from 'react';
import Image from 'next/image';
import Navlink from './Navlink';
import hamburger from '../../public/images/icon-menu.svg';
import hamburgerClose from '../../public/images/icon-menu-close.svg';
import { linknavbar } from '../../constants';

const Navmenu = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav>
      <Navlink />
      <div className='mobile:hidden flex flex-1 justify-end items-center'>
        <Image src={toggle ? hamburgerClose : hamburger} alt='menu' className='z-10 m-4 w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle((prev) => !prev)} />
        <div className={`${toggle ? 'flex' : 'hidden'} bg-netral-white absolute -top-full min-h-screen left-28 mx-1 min-w-full rounded-xl sidebar`}>
          <ul className='list-none flex flex-col justify-center items-start flex-1'>
            {linknavbar.map((link) => (
              <li id={link.id} className='group'>
                <a className='mx-8 flex py-2 text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-orange ' href={link.linkSite}>
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navmenu;
