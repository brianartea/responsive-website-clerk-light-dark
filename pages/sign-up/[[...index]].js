import { SignUp } from "@clerk/clerk-react";
import Navbar from "../../components/Navbar";
import Head from "next/head";

export default function SignUpPage() {
  return (
    <div>
      <Head>
        <title>Devs Sign-Up</title>
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
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <SignUp path="/sign-up" routing="path" />
    </div>
  );
}
