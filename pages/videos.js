import Navbar from "../components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { LightningBoltIcon } from "@heroicons/react/solid";
import Footer from "../components/Footer";

function Videos() {
  return (
    <div>
      <Head>
        <title>Devs Video Categories</title>
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>
      <Navbar />
      <div className="my-32 text-center">
        <h1 className="mb-10 text-4xl font-semibold text-gray-800 dark:text-gray-300">
          Video Categories
        </h1>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center justify-center mt-7 md:grid md:grid-cols-2 md:items-center md:justify-center md:mx-auto md:ml-6 lg:grid lg:grid-cols-3 lg:items-center lg:justify-center lg:mx-auto">
            <div className="iframe-container mt-4 mb-8">
              <iframe
                className="mt-2"
                width="360"
                height="215"
                src={"https://www.youtube.com/embed/KlCK69DZCKI"}
                title="Create React App Explained"
                allow="fullscreen"
              >
                <a
                  className=""
                  href={"https://www.youtube.com/embed/KlCK69DZCKI"}
                >
                  <Image
                    src={"https://www.youtube.com/embed/KlCK69DZCKI"}
                    alt="Create React App Explained"
                    layout="responsive"
                    height={1080}
                    width={1920}
                  />
                </a>
              </iframe>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Create React App Explained
              </h2>
            </div>
            <div className="iframe-container mt-4 mb-8">
              <iframe
                className="mt-2"
                width="360"
                height="215"
                src="https://www.youtube.com/embed/kHJSNFU7H4U"
                title="Learn How To Use Props"
                allow="fullscreen"
              >
                <a
                  className=""
                  href="https://www.youtube.com/embed/kHJSNFU7H4U"
                >
                  <Image
                    src="https://www.youtube.com/embed/kHJSNFU7H4U"
                    alt="Learn How To Use Props"
                    layout="responsive"
                    height={1080}
                    width={1920}
                  />
                </a>
              </iframe>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Learn How To Use Props
              </h2>
            </div>
            <div className="iframe-container mt-4 mb-8">
              <iframe
                className="mt-2"
                width="360"
                height="215"
                src="https://www.youtube.com/embed/kkuq0gTGRFQ"
                title="Learn How To Use State"
                allow="fullscreen"
              >
                <a
                  className=""
                  href="https://www.youtube.com/embed/kkuq0gTGRFQ"
                >
                  <Image
                    src="https://www.youtube.com/embed/kkuq0gTGRFQ"
                    alt="Learn How To Use State"
                    layout="responsive"
                    height={1080}
                    width={1920}
                  />
                </a>
              </iframe>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Learn How To useState
              </h2>
            </div>
            <div className="iframe-container mt-4  mb-8">
              <iframe
                className="mt-2"
                width="360"
                height="215"
                src="https://www.youtube.com/embed/UVhIMwHDS7k"
                title="Learn the React useEffect Hook"
                allow="fullscreen"
              >
                <a
                  className=""
                  href="https://www.youtube.com/embed/UVhIMwHDS7k"
                >
                  <Image
                    src="https://www.youtube.com/embed/UVhIMwHDS7k"
                    alt="Learn the React useEffect Hook"
                    layout="responsive"
                    height={1080}
                    width={1920}
                  />
                </a>
              </iframe>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Learn the React useEffect Hook
              </h2>
            </div>
            <div className="iframe-container mb-8 mt-4">
              <iframe
                className="mt-2"
                width="360"
                height="215"
                src="https://www.youtube.com/embed/A63UxsQsEbU"
                title="Next.js Introduction & Setup"
                allow="fullscreen"
              >
                <a
                  className=""
                  href="https://www.youtube.com/embed/A63UxsQsEbU"
                >
                  <Image
                    src="https://www.youtube.com/embed/A63UxsQsEbU"
                    alt="Next.js Introduction & Setup"
                    layout="responsive"
                    height={1080}
                    width={1920}
                  />
                </a>
              </iframe>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Next.js Introduction & Setup
              </h2>
            </div>
            <div className="iframe-container mb-8 mt-4">
              <iframe
                className="mt-2"
                width="360"
                height="215"
                src="https://www.youtube.com/embed/1q5oOZE6o4c"
                title="Dark/Lightmode NextJS Tailwind"
                allow="fullscreen"
              >
                <a
                  className=""
                  href="https://www.youtube.com/embed/1q5oOZE6o4c"
                >
                  <Image
                    src="https://www.youtube.com/embed/1q5oOZE6o4c"
                    alt="Dark/Lightmode NextJS Tailwind"
                    layout="responsive"
                    height={1080}
                    width={1920}
                  />
                </a>
              </iframe>
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                Dark/Lightmode NextJS Tailwind
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Videos;
