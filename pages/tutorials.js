import Navbar from "../components/Navbar";
import Head from "next/head";
//import Link from "next/link";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import Post from "../components/Post";
import { sortByDate } from "../utils";

function Tutorials({ posts }) {
  return (
    <div>
      <Head>
        <title>Devs Tutorials</title>
        <meta
          name="description"
          content="React, NextJS, CSS, Tailwind CSS, for beginners"
        />
        <link rel="icon" href="/lightning-bolt.svg" />
      </Head>
      <Navbar />
      <div className="py-32 text-center ml-3 mr-3">
        <h2 className="text-4xl font-semibold text-gray-700 dark:text-gray-300 mb-16">
          Tutorials
        </h2>
        {/* Cards */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 justify-between mb-10">
          {posts.map((post, index) => (
            <Post key={index} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tutorials;

export async function getStaticProps() {
  // Get files from posts dir
  const files = fs.readdirSync(path.join("posts"));
  // Get slug and frontmatter from posts
  const posts = files.map((filename) => {
    // Create slug
    const slug = filename.replace(".md", "");

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
