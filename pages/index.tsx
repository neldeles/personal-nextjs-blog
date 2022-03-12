import fs from "fs";
import matter from "gray-matter";
import { getAllPostsMeta } from "lib/post";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  // const files = fs.readdirSync("posts");

  // const posts = files.map((fileName) => {
  //   const slug = fileName.replace(".md", "");
  //   const readFile = fs.readFileSync(`posts/${fileName}`, "utf-8");
  //   const { data: frontmatter } = matter(readFile);

  //   return {
  //     slug,
  //     frontmatter,
  //   };
  // });

  const posts = getAllPostsMeta();

  return {
    props: {
      posts,
    },
  };
}

export type Frontmatter = {
  date: string;
  title: string;
  published: boolean;
  description: string;
  aliases: string[] | null;
  references: string[] | null;
  tags: string[] | string;
};

type Post = {
  slug: string;
  frontmatter: Frontmatter;
  readTime: string;
};

const supportLinks = [
  {
    name: "Slash-inspired Web App",
    href: "#",
    description:
      "A slash.co inspired web app with Toggl integration. Line up your tasks for the week and run pomodoro timers. Time spent can be synced to your Toggl account.",
  },
  {
    name: "neldeles.com",
    href: "#",
    description:
      "This portfolio/blog website. Built with NextJS and TailwindCSS. Deployed on Netlify.",
  },
  {
    name: "AV Matcher",
    href: "#",
    description:
      "Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.",
  },
];

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <div>
      <section className="flex flex-col justify-center items-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="-mt-24">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 tracking-wide uppercase">
              (☉‿☉✿)
            </h2>
            <p className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hello, I'm Noel.
            </p>
            <p className="max-w-xl mt-5 mx-auto text-lg text-gray-500">
              Previously{" "}
              <a href="https://coins.ph/">
                <span className="text-pink-600 underline underline-offset-2 hover:bg-pink-600 hover:text-white">
                  Head of Customer Protection at coins.ph
                </span>
              </a>
              , and{" "}
              <a href="https://www.ninjavan.co/en-ph">
                <span className="text-pink-600 underline underline-offset-2 hover:bg-pink-600 hover:text-white">
                  Interim Head of Business Intelligence at Ninjavan Philippines
                </span>
              </a>
              . Now a career-shifting fullstack dev hopeful, with a specific
              interest in building data-centric web solutions.
            </p>
          </div>
          <div className="flex justify-center mt-12">
            <a
              href="#projects"
              className="flex items-center text-xl text-pink-600 group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 mr-2 animate-bounce"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
                />
              </svg>
              <p className="group-hover:bg-pink-600 group-hover:text-white">
                View select projects
              </p>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" className="flex flex-col">
        {/* Header */}
        <div className=" bg-pink-500 pb-32 w-full">
          <div className=" max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h2 className="text-xl font-semibold text-white tracking-wide uppercase">
              (˵ ͡° ͜ʖ ͡°˵)
            </h2>
            <h1 className="text-4xl mt-4 font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
              Select Projects
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-white sm:hidden">
              My current tech stack is JavaScript/TypeScript, Next.js/CRA, &
              TailwindCSS.
              <br />
              <br />
              When a project needs a backend I use Django,
              django-rest-framework, and PostgreSQL.
            </p>
            <p className="mt-6 max-w-3xl text-xl text-white hidden sm:block">
              My current tech stack is JavaScript/TypeScript, Next.js/CRA, &
              TailwindCSS. When a project needs a backend I use Django,
              django-rest-framework, and PostgreSQL.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        {
          <section
            className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
            aria-labelledby="contact-heading"
          >
            <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
              {/* <div className="flex flex-wrap flex-initial gap-y-20"> */}
              {supportLinks.map((link) => (
                <div
                  key={link.name}
                  className="flex flex-col bg-white rounded-2xl shadow-xl"
                >
                  <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                    <h3 className="text-xl font-medium text-gray-900">
                      {link.name}
                    </h3>
                    <p className="mt-4 text-base text-gray-500">
                      {link.description}
                    </p>
                  </div>
                  <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                    <a
                      href={link.href}
                      className="text-base font-medium text-pink-600 hover:text-white hover:bg-pink-600"
                    >
                      View project<span aria-hidden="true"> &rarr;</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        }
      </section>
    </div>
  );
}
