import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

function HeroGrid() {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className="p-10 mt-10 md:mt-20 lg:mt-20 lg:ml-5">
      <div className="md:grid md:grid-cols-2 lg:max-w-6xl lg:mx-auto lg:px-4">
        {/* left */}
        <div className="mt-[60px] md:mt-20 md:mr-10 lg:mt-[20px] lg:flex lg:flex-col lg:justify-center lg:ml-6">
          <h6 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-700 dark:text-gray-300">
            Welcome
          </h6>
          <h6 className="italic mt-4 mb-4 font-normal text-2xl md:5xl lg:5xl text-gray-900 dark:text-gray-300">
            To The Developers Community
          </h6>
          <p className="mt-0 text-base leading-relaxed text-gray-900 dark:text-gray-300 lg:mr-32 mb-6">
            Resorces on web development and apps. Videos, written tutorials and
            examples. React, React Native, NextJS, CSS, Tailwind and JavaScript.
          </p>
          <div>
            <Link href="/videos" passHref>
              <button className="text-base transform transition border-[1px] border-gray-900 px-10 py-4 mt-0 mr-5 rounded dark:border-gray-500 dark:hover:border-gray-400 dark:bg-gray-900 dark:hover:bg-black bg-gray-900 hover:bg-blue-600 text-gray-100 hover:text-white dark:hover:text-gray-50">
                VIDEOS
              </button>
            </Link>
            <Link href="/extras" passHref>
              <button className="text-base transform transition border-[1px] border-gray-900 px-10 py-4 mt-0 mr-5 rounded dark:border-gray-500 dark:hover:border-gray-400 dark:bg-gray-900 dark:hover:bg-black bg-gray-900 hover:bg-blue-600 text-gray-100 hover:text-white dark:hover:text-gray-50">
                EXTRAS
              </button>
            </Link>
          </div>
        </div>

        {/* right */}
        <div className="mt-0 md:mt-[20px] lg:mr-0 lg:mt-[60px]">
          {currentTheme === "dark" ? (
            <Image
              width={450}
              height={450}
              className="h-[450px] object-contain"
              src="/undraw_community_re_cyrm.svg"
              alt="hero-image"
            />
          ) : (
            <Image
              width={450}
              height={450}
              className="h-[450px] object-contain"
              src="/undraw_Design_notes_re_eklr.svg"
              alt="light-hero-image"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default HeroGrid;
