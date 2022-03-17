import Link from "next/link";
// @ts-ignore
import resume from "assets/resume.pdf";
import { StyledLink } from "./StyledLink";

/* This example requires Tailwind CSS v2.0+ */
const navigation = [
  { name: "blog", href: "/blog" },
  { name: "tags", href: "/tags" },
  { name: "contact", href: "#" },
];

export function Header() {
  return (
    <header className="bg-white sticky top-0 w-full h-24 mb-4 sm:mb-0 z-10">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full pt-6 flex items-center justify-between border-b border-pink-600 lg:border-none">
          <div className="flex items-center">
            <StyledLink href="/">neldeles</StyledLink>
            <div className="hidden ml-10 space-x-8 lg:block">
              {navigation.map((link) => (
                <StyledLink key={link.name} href={link.href}>
                  {link.name}
                </StyledLink>
              ))}
            </div>
          </div>
        </div>
        <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden bg-white">
          {navigation.map((link) => (
            <StyledLink key={link.name} href={link.href}>
              {link.name}
            </StyledLink>
          ))}
        </div>
      </nav>
    </header>
  );
}
