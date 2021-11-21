import fs from "fs";
import path from "path";
import matter from "gray-matter";
import marked from "marked";
import Link from "next/link";
import Navbar from "../../components/Navbar";

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div>
      <Navbar />
      <div className="max-w-4xl mx-auto mt-20">
        <div className="card card-page">
          <h1 className="post-title text-4xl text-center dark:text-gray-300">
            {title}
          </h1>
          <div className="dark:text-gray-400 text-center mb-3 rounded-lg p-3">
            Posted on {date}
          </div>
          <img src={cover_image} alt={title} className="" />
          <div className="post-body dark:text-gray-300">
            <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  console.log(paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
