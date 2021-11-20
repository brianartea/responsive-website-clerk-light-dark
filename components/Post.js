import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="max-w-2xl rounded-lg mr-3 ml-3 p-5 border-2 border-gray-400 dark:bg-gray-900 mb-8 dark:border-2 dark:border-gray-600 dark:hover:border-gray-400 transform transition-all hover:scale-105">
      <img
        src={post.frontmatter.cover_image}
        alt=""
        className="mb-4 dark:border-2 dark:border-gray-600"
      />

      <div className="dark:bg-gray-800 dark:text-gray-400 text-sm px-5 py-1 rounded-lg ">
        Posted on {post.frontmatter.date}
      </div>

      <h3 className="text-xl font-bold">{post.frontmatter.title}</h3>

      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/tutorials/${post.slug}`}>
        <a className="btn">Read More</a>
      </Link>
    </div>
  );
}
