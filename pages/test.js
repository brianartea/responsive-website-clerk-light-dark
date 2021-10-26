import Head from "next/head";
import HeroGrid from "../components/HeroGrid";
//import Link from "next/link";
//import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function Test() {
  return (
    <div>
      <Head>
        <title>Devs Homepage</title>
        <meta
          name="description"
          content="Learn - React, NextJS, React Native, CSS, Tailwind CSS, JSX, Props, useState, useEffect, Lightmode/Darkmode"
        />
        <meta
          name="keywords"
          content="learn react, react, learn nextjs, nextjs, learn react native, react native, learn css, css, learn tailwind css, tailwind css, jsx, lightmode, darkmode, useState, useEffect"
        />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>
      <Header />
      <HeroGrid />
    </div>
  );
}
