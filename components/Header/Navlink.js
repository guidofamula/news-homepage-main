import React from 'react';

const Navlink = () => {
  return (
    <ul className='list-none mobile:flex hidden justify-end items-center flex-1 px-2'>
      <li className='group'>
        <a className='mx-3 flex py-2 text-base text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-orange ' href='/'>
          Home
        </a>
      </li>
      <li className='group'>
        <a className='mx-3 flex py-2 text-base text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-orange' href=''>
          New
        </a>
      </li>
      <li className='group'>
        <a className='mx-3 flex py-2 text-base text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-orange' href=''>
          Popular
        </a>
      </li>
      <li className='group'>
        <a className='mx-3 flex py-2 text-base text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-orange' href=''>
          Trending
        </a>
      </li>
      <li className='group'>
        <a className='mx-3 flex py-2 text-base text-netral-verydarkblue transition duration-300 ease-in-out group-hover:text-primary-orange' href=''>
          Categories
        </a>
      </li>
    </ul>
  );
};

export default Navlink;
