import { getTagCounts } from "lib/post";
import Link from "next/link";

export async function getStaticProps() {
  const tags = getTagCounts();

  return {
    props: {
      tags,
    },
  };
}

export default function TagsList({ tags }: { tags: any }) {
  return (
    <div className="mt-6 mx-auto max-w-prose">
      <ul className="flex flex-wrap">
        {tags.map((tag: any) => {
          const [tagName, tagCount] = tag;
          return (
            <li key={tagName} className="flex-grow py-2">
              <Link href={`/tags/${tagName}/`}>
                <a className="underline font-medium hover:bg-pink-600 hover:text-white hover:cursor-pointer">
                  {tagName} ({tagCount})
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
