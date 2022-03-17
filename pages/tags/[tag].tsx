import { getTagCounts, getPostsByTag, getAllTags } from "lib/post";
import { GetStaticProps } from "next";
import { Params } from "next/dist/server/router";
import Link from "next/link";
import { useRouter } from "next/router";

type Frontmatter = {
  date: string;
  title: string;
  published: boolean;
  description: string;
  aliases: string[] | null;
  references: string[] | null;
  tags: string[] | string;
  formattedTags: string[];
  formattedDate: string;
};

type Post = {
  slug: string;
  frontmatter: Frontmatter;
  readTime: string;
};

export default function PostsByTagPage({
  posts,
  tag,
}: {
  posts: Post[];
  tag: string;
}) {
  return (
    <div className="max-w-prose mx-auto py-16 px-8 md:px-0">
      <h1 className="mb-1.5 block text-lg text-gray-500 leading-8 tracking-tight">
        Posts tagged with &quot;{tag}&quot;
      </h1>
      {posts.map(({ slug, frontmatter }) => (
        <div key={slug}>
          <Link href={`/post/${slug}`}>
            <a>
              <h1 className="mt-2 mb-1.5 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                {frontmatter.title}
              </h1>
            </a>
          </Link>
          <p className="block text-base text-gray-900 font-normal tracking-wide">
            &apos;{frontmatter.formattedDate} —{" "}
            {frontmatter.formattedTags.map((tag) => (
              // TODO: create tag template page
              <Link href={`/tags/${tag}`} key={tag}>
                <a className="underline mr-2 hover:bg-pink-600 hover:text-white hover:cursor-pointer">
                  {tag}
                </a>
              </Link>
            ))}
          </p>
          <p className="mt-4 mb-10 prose prose-indigo text-gray-500 mx-auto">
            {frontmatter.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps({ params }: Params) {
  const posts = await getPostsByTag(params.tag);

  return {
    props: {
      posts,
      tag: params.tag,
    },
  };
}

export async function getStaticPaths() {
  const tags = await getAllTags();

  const paths = tags.map((tag: string) => ({
    params: {
      tag,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}
