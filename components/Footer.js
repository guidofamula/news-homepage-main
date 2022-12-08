import React from 'react';
import { challenge } from '../constants';

const Footer = () => {
  return (
    <div className='mt-4'>
      {challenge.map((credit) => (
        <footer className='bg-netral-blue bg-opacity-70 text-center desktop:text-left'>
          <h5 className='text-netral-darkblue text-center p-4 text-[12px]'>
            Challenge by{' '}
            <span className='cursor-pointer hover:text-primary-red desktop:font-semibold'>
              <a target='_blank' href={credit.linkMentor}>
                {credit.challengeBy}
              </a>
            </span>{' '}
            Coded by{' '}
            <span className='cursor-pointer hover:text-primary-red desktop:font-semibold'>
              {' '}
              <a target='_blank' href={credit.linkCoder}>
                {credit.CodedBy}
              </a>
            </span>
          </h5>
        </footer>
      ))}
    </div>
  );
};

export default Footer;
