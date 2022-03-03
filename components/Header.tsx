import Link from "next/link";
// @ts-ignore
import resume from "assets/resume.pdf";
import { StyledLink } from "./StyledLink";

export function Header() {
  return (
    <div className="mx-auto w-full">
      <div className="items-center bg-white flex max-w-7xl mx-auto px-8 py-0 h-24">
        <StyledLink href="/">
          <span className="hidden md:flex">neldeles</span>
          <span className="md:hidden">nd</span>
        </StyledLink>
        {/* <StyledLink>blog</StyledLink>
        <StyledLink>tags</StyledLink>
        <StyledLink>contact</StyledLink>
        <StyledLink>resume</StyledLink> */}
      </div>
    </div>
  );
}
