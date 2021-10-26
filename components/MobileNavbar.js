import Link from "next/link";

function MobileNavbar() {
  return (
    <div className="flex justify-items-start z-50">
      <div className="absolute z-50 w-[100%] bg-gray-300 top-[81px] left-0">
        <Link href="/tutorials">
          <a className="block py-4 text-xl text-gray-800 bg-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 cursor-pointer">
            Tutorials
          </a>
        </Link>
        <Link href="/videos">
          <a className="block py-4 text-xl text-gray-800 bg-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 cursor-pointer">
            Videos
          </a>
        </Link>
        <Link href="/featured">
          <a className="block py-4 text-xl text-gray-800 bg-gray-200 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-gray-100 dark:bg-gray-900 dark:hover:bg-gray-700 cursor-pointer">
            Featured
          </a>
        </Link>
      </div>
    </div>
  );
}

export default MobileNavbar;
