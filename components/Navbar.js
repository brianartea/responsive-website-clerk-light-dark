import { useState, useEffect } from "react";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import useComponentVisible from "./useComponentVisible";
import {
  MoonIcon,
  SunIcon,
  LightningBoltIcon,
  MenuIcon,
} from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <SunIcon
          className="w-7 h-7 ml-4 dark:text-gray-400 dark:hover:text-gray-200"
          role="button"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <MoonIcon
          className="w-7 h-7 ml-4 text-gray-600 hover:text-gray-800"
          role="button"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  return (
    <nav className="fixed top-0 z-50 w-[100%] bg-gray-50 border-b-[1px] border-gray-300 dark:bg-gray-900 dark:border-b-[1px] dark:border-gray-700">
      <div className="max-w-6xl mx-auto mb-2 mt-2 px-4">
        {/* Logo */}

        <div className="flex justify-between">
          <div className="flex">
            <div className="mr-8">
              <Link href="/">
                <a className="flex items-center py-4 pl-2 px-4 text-blue-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  <LightningBoltIcon className="h-7 w-7" />

                  <span className="text-2xl font-bold">Devs</span>
                </a>
              </Link>
            </div>
            {/* Left Nav */}
            <div className="hidden md:flex items-center space-x-2 text-xl text-gray-600 font-semibold">
              <Link href="/tutorials">
                <a className="py-2 px-4 hover:bg-blue-500 hover:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 rounded-md transform duration-200">
                  Tutorials
                </a>
              </Link>
              <Link href="/videos">
                <a className="py-2 px-4 hover:bg-blue-500 hover:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 rounded-md transform duration-200">
                  Videos
                </a>
              </Link>
              <Link href="/featured">
                <a className="py-2 px-4 hover:bg-blue-500 hover:text-white dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 rounded-md transform duration-200">
                  Featured
                </a>
              </Link>
            </div>
          </div>
          {/* Right Nav */}

          <div className="flex items-center">
            <SignedOut>
              <Link href="/sign-in">
                <span className="md:flex items-center cursor-pointer transform transition font-semibold text-xl py-2 rounded-md px-3 hover:bg-gray-300 text-gray-600 hover:text-gray-900 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-gray-300">
                  Sign In
                </span>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton className="ring-blue-600" />
            </SignedIn>
            {/* Mobile button goes here! */}
            <button
              ref={ref}
              onClick={() => setIsComponentVisible(!isComponentVisible)}
            >
              <MenuIcon className="md:hidden w-7 h-7 ml-4 text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-gray-100" />
              {isComponentVisible && <MobileNavbar />}
            </button>
            {renderThemeChanger()}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
