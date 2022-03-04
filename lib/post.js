import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";

const prettyCodeOptions = {
  theme: "dracula",
  onVisitLine(node) {
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("line--highlighted");
  },
  onVisitHighlightedWord(node) {
    node.properties.className = ["line--highlighted", "word"];
  },
};

const rootDirectory = path.join(process.cwd(), "posts");

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(".md", "");
  const filePath = path.join(rootDirectory, `${realSlug}.md`);
  const fileName = fs.readFileSync(filePath, { encoding: "utf8" });

  const { data: frontmatter, content } = matter(fileName);
  const readTime = readingTime(content).text;
  const mdxSource = await serialize(content, {
    mdxOptions: {
      rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypePrettyCode, prettyCodeOptions],
      ],
    },
  });

  const post = {
    meta: {
      ...frontmatter,
      slug: realSlug,
      readTime,
    },
    content: mdxSource,
  };

  return post;
};

export const getPostMeta = (slug) => {
  const realSlug = slug.replace(/\.md$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.md`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { data: frontmatter, content } = matter(fileContent);
  const readTime = readingTime(content).text;

  const meta = {
    frontmatter,
    slug: realSlug,
    readTime,
  };

  return meta;
};

export const getAllPostsMeta = () => {
  const files = fs.readdirSync(rootDirectory);
  const notes = files.map((fileName) => getPostMeta(fileName));

  return notes;
};

export const getAllSlugs = () => {
  const files = fs.readdirSync(rootDirectory);
  const slugs = files.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(".md", ""),
      },
    };
  });
  return slugs;
};
