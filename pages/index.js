import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import { HeaderContainer, BodyContainer } from "../components/index";

export default function Home() {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
        <title>Frontend Mentor | News homepage</title>
      </Head>
      <div>
        <HeaderContainer />
        <BodyContainer />
      </div>
    </>
  );
}
