import Link from "next/link";

export default function Post({ post }) {
  return (
    <div className="max-w-2xl rounded-md mr-3 ml-3 p-5 border-2 border-gray-400 dark:bg-gray-900 mb-8 dark:border-2 dark:border-gray-600 dark:hover:border-gray-400 transform transition-all hover:scale-105">
      <Link href={`/tutorials/${post.slug}`}>
        <a>
          <img
            src={post.frontmatter.cover_image}
            alt=""
            className="mb-4 dark:border-2 dark:border-gray-600 rounded-md"
          />
        </a>
      </Link>
      <Link href={`/tutorials/${post.slug}`}>
        <a>
          <div className="dark:text-gray-400 text-sm px-5 py-1">
            Posted on {post.frontmatter.date}
          </div>
        </a>
      </Link>
      <Link href={`/tutorials/${post.slug}`}>
        <a>
          <h3 className="text-xl font-bold">{post.frontmatter.title}</h3>
        </a>
      </Link>
      <Link href={`/tutorials/${post.slug}`}>
        <a>
          <p className="leading-6">{post.frontmatter.excerpt}</p>
        </a>
      </Link>

      <Link href={`/tutorials/${post.slug}`}>
        <a aria-label={`Read ${post.frontmatter.title}`} className="btn">
          Read More
        </a>
      </Link>
    </div>
  );
}
