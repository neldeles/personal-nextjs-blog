import { getAllTags } from "lib/post";
import kebabCase from "lodash/kebabCase";
import Link from "next/link";

export async function getStaticProps() {
  const tags = getAllTags();

  return {
    props: {
      tags,
    },
  };
}

export default function TagsList({ tags }: { tags: any }) {
  console.log("tags", tags);

  return (
    <div className="mx-auto max-w-prose">
      <h1 className="mt-2 mb-1.5 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Tags
      </h1>
      <ul className="flex flex-wrap justify-around">
        {Object.keys(tags).map((key: string) => (
          <li key={key} className="mt-6 flex-grow flex-basis[25%]">
            <Link href={`/tags/${kebabCase(key)}/`}>
              <a className="underline font-medium hover:bg-pink-600 hover:text-white hover:cursor-pointer">
                {key} ({tags[key]})
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}