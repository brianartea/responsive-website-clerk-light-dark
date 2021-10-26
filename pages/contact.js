import Navbar from "../components/Navbar";
import Head from "next/head";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div>
      <Head>
        <title>Devs Contact</title>
        <meta
          name="description"
          content="React, NextJS, CSS, Tailwind CSS, for beginners"
        />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>
      <Navbar />
      <div className="py-32 text-center zed">
        <h1 className="text-4xl font-semibold text-gray-700 dark:text-gray-300">
          Contact
        </h1>
      </div>
    </div>
  );
}

export default Contact;
