import fs from "fs";
import matter from "gray-matter";
import { getAllPostsMeta } from "lib/post";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const posts = getAllPostsMeta();

  return {
    props: {
      posts,
    },
  };
}

export type Frontmatter = {
  date: string;
  title: string;
  published: boolean;
  description: string;
  aliases: string[] | null;
  references: string[] | null;
  tags: string[] | string;
};

type Post = {
  slug: string;
  frontmatter: Frontmatter;
  readTime: string;
};

export default function BlogList({ posts }: { posts: Post[] }) {
  console.log("posts", posts);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className="border border-gray-200 m-2 rounded-xl shadow-lg overflow-hidden flex flex-col"
        >
          <Link href={`/post/${slug}`}>
            <a>
              <Image
                width={650}
                height={340}
                alt={frontmatter.title}
                src="/_images/ryo-avatar.jpg"
              />
              <h1 className="p-4">{frontmatter.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
