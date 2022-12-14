import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../public/images/logo.svg';

const BrandLogo = () => {
  return (
    <div className='px-4'>
      <Link href='/'>
        <Image className='block py-6 desktop:ml-2 w-10' src={logo} alt='Website logo' />
      </Link>
    </div>
  );
};

export default BrandLogo;
