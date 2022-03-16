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
  console.log("tags", tags);

  return (
    <div className="mx-auto max-w-prose">
      <ul className="flex flex-wrap justify-around">
        {Object.keys(tags).map((key: string) => {
          return (
            <li key={key} className="mt-6 flex-grow flex-basis[25%]">
              <Link href={`/tags/${key}/`}>
                <a className="underline font-medium hover:bg-pink-600 hover:text-white hover:cursor-pointer">
                  {key} ({tags[key]})
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
