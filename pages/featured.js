import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";
import Card from "../components/Card";

function Featured() {
  return (
    <div>
      <Head>
        <title>Devs Featured</title>
        <meta
          name="description"
          content="React, NextJS, CSS, Tailwind CSS, for beginners"
        />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>
      <Navbar />
      <div className="py-32 text-center">
        <h1 className="text-4xl mb-5 font-semibold text-gray-700 dark:text-gray-300">
          Featured
        </h1>
      </div>
    </div>
  );
}

export default Featured;
