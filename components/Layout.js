import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
import styles from "../styles/Layout.module.css";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={description}
          name="keywords"
          content={keywords}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="max-w-5xl mx-auto px-10 mt-10">{children}</div>
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Devs ReactJS, NextJS, CSS, Tailwind CSS",
  description:
    "Learning to program websites with React, NextJS, CSS and Tailwind CSS",
  keywords: "html5, css, reactjs, nextjs, tailwind css",
};
