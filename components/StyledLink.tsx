import Link from "next/link";
import React from "react";

export function StyledLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <Link href={href}>
      <a className="p-4 text-base font-medium text-gray-500 hover:text-gray-900 hover:cursor-pointer">
        {children}
      </a>
    </Link>
  );
}
