import fs from "fs";
import matter from "gray-matter";
import { Frontmatter } from "pages";
import { getAllSlugs, getPostBySlug } from "lib/post";
import { MDXRemote } from "next-mdx-remote";
import { MDXComponents } from "components/MDXComponent";
import { Tag } from "@components/Tag";

type Meta = Frontmatter & {
  slug: string;
  readTime: string;
  formattedTags: string[];
  formattedDate: string;
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
  const { slug } = params;
  const { meta, content } = await getPostBySlug(slug);

  console.log("meta", meta);

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
    <div className="relative py-16 bg-white">
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-pink-600 font-semibold tracking-wide uppercase">
              {meta.date}
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              {meta.title}
            </span>
            <span className="text-center mt-2 text-sm block">
              {meta.formattedTags.map((tag: string) => {
                return <Tag key={tag} tag={tag} />;
              })}
            </span>
          </h1>
          {meta.description != null && (
            <p className="mt-8 text-xl text-gray-500 leading-8">
              {meta.description}
            </p>
          )}
          <hr className="mt-6" />
        </div>
        <div className="mt-6 prose prose-pink prose-lg text-gray-500 break-words mx-auto">
          <MDXRemote {...content} components={MDXComponents} />
        </div>
      </div>
    </div>
  );
  // return (
  //   <div className="prose mx-auto">
  //     <h1>{meta.title}</h1>
  //     <MDXRemote {...content} components={MDXComponents} />
  //   </div>
  // );
}
