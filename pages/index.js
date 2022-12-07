import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import { HeaderContainer, BodyContainer } from '../components/index';

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <title>Frontend Mentor | News homepage</title>
      </Head>
      <div className='container mx-auto desktop:py-6 desktop:px-12 desktop:my-5 bg-netral-white shadow-lg'>
        <HeaderContainer />
        <BodyContainer />
      </div>
    </>
  );
}
