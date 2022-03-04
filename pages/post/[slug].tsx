import fs from "fs";
import matter from "gray-matter";
import { Frontmatter } from "pages";
import { getAllSlugs, getPostBySlug } from "lib/post";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "components/MDXComponent";

type Meta = Frontmatter & {
  slug: string;
  readTime: string;
};

export async function getStaticPaths() {
  // const files = fs.readdirSync("posts");

  // const paths = files.map((fileName) => ({
  //   params: {
  //     slug: fileName.replace(".md", ""),
  //   },
  // }));
  const paths = getAllSlugs();
  console.log("paths", paths);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  console.log("params", params);

  const { slug } = params;
  const { meta, content } = await getPostBySlug(slug);

  return {
    props: {
      meta,
      content,
    },
  };
}

export default function PostPage({
  meta,
  content,
}: {
  meta: Meta;
  content: any;
}) {
  return (
    <div className="prose mx-auto">
      <h1>{meta.title}</h1>
      <MDXRemote {...content} components={MDXComponents} />
    </div>
  );
}
