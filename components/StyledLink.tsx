import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { classNames } from "lib/classNames";

export function StyledLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const router = useRouter();
  console.log(router.pathname);

  return (
    <Link href={href}>
      <a
        className={classNames(
          router.pathname == `${href}`
            ? "text-pink-600 font-bold underline decoration-4 underline-offset-4"
            : "text-gray-500 hover:text-gray-900 font-medium",
          "p-4 text-base hover:cursor-pointer"
        )}
      >
        {children}
      </a>
    </Link>
  );
}
