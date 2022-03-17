import Link from "next/link";

export function Tag({ tag }: { tag: string }) {
  return (
    <Link href={`/tags/${tag}`} key={tag}>
      <a className="underline mr-2 hover:bg-pink-600 hover:text-white hover:cursor-pointer">
        {tag}
      </a>
    </Link>
  );
}
