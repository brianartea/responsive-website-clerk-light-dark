import Link from "next/link";
import { LightningBoltIcon } from "@heroicons/react/solid";

function Footer() {
  return (
    <footer className="absolute left-0 bottom-0 w-full mx-auto bg-gray-50 border-t-[1px] border-gray-300 dark:bg-gray-900 dark:border-b-[1px] dark:border-gray-700">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <div className="flex">
            {/* logo */}
            <div className="py-2 px-3 mt-2 mb-2">
              <Link href="/">
                <a className="flex items-center py-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                  <LightningBoltIcon className="h-4 w-4" />

                  <span className="text-normal font-bold">Devs&nbsp;</span>
                  <span className="text-sm font-normal">
                    ©{new Date().getFullYear()} All rights reserved.
                  </span>
                </a>
              </Link>
            </div>

            {/* primary nav */}
          </div>

          {/* secondary nav */}
          <div className="flex items-center justify-end space-x-4 mr-10">
            <Link href="/docs">
              <a className="text-gray-600 hover:text-white hover:bg-blue-500 py-2 px-3 mt-2 mb-2 rounded-lg dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800">
                Docs
              </a>
            </Link>
            <Link href="/support">
              <a className="text-gray-600 hover:text-white hover:bg-blue-500 py-2 px-3 mt-2 mb-2 rounded-lg dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800">
                Support
              </a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-600 hover:text-white hover:bg-blue-500 py-2 px-3 mt-2 mb-2 rounded-lg dark:text-gray-400 dark:hover:text-gray-300 dark:hover:bg-gray-800">
                Contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
