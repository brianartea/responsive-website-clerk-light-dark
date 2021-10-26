import Link from "next/link";

function Card(props) {
  return (
    <div className="max-w-xs mx-auto overflow-hidden box-shadow-two bg-white rounded-lg dark:bg-gray-900 dark:box-shadow-dark">
      <img
        className="object-cover w-full h-28"
        src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />

      <div className="py-5 text-center">
        <Link href="/react">
          <a className="block text-2xl font-bold text-gray-800 dark:text-gray-400">
            John Doe
          </a>
        </Link>

        <span className="text-sm text-gray-700 dark:text-gray-400">
          <Link href="/react">
            <a>Software Engineer</a>
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Card;
