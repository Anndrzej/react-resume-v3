import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavLinks = () => {
  const router = useRouter();
  const CustomLink = ({ href, title, className = "" }) => {
    return (
      <Link href={href} className={`${className} relative group`}>
        {title}
        <span
          className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
            router.asPath === href ? "w-full" : "w-0"
          }`}
        ></span>
      </Link>
    );
  };
  return (
    <nav>
      <CustomLink href="/" title="Home" className="mr-4" />
      <CustomLink href="/about" title="About" className="mx-4" />
      <CustomLink href="/projects" title="Projects" className="mx-4" />
      <CustomLink href="/articles" title="Articles" className="ml-4" />
    </nav>
  );
};

export default NavLinks;
