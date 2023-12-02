import fs from "fs";
import path from "path";
import glob from "glob";
import matter from "gray-matter";

import type { AllContentRouteProps, Frontmatter } from "~/types";

const ROOT_PATH = process.cwd();

const getFrontmatter = (dataPath: string, fromPath: string): Frontmatter[] => {
  const DATA_PATH = path.join(ROOT_PATH, dataPath);
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths
    .map((filePath: string) => {
      const source = fs.readFileSync(path.join(filePath), "utf8");
      const { data }: matter.GrayMatterFile<string> = matter(source);

      return {
        ...(data as Frontmatter),
        slug: filePath.replace(`${DATA_PATH}`, "").replace("/page.mdx", ""),
        slugAsParams: filePath
          .replace(`${PATH}`, "")
          .replace("/page.mdx", "")
          .split("/")
          .slice(1)
          .join("/"),
      } as Frontmatter;
    })
    .filter((frontmatter) => !frontmatter.slugAsParams.startsWith("_"))
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt ?? Date.now())) -
        Number(new Date(a.publishedAt ?? Date.now())),
    );
};

export const AllContentRoutes: AllContentRouteProps = {
  projects: {
    label: "Projects",
    pages: [...getFrontmatter("src/app/(professional)", "/projects")],
  },
  blogPosts: {
    label: "Blog Posts",
    pages: [...getFrontmatter("src/app/(personal)", "/blog")],
  },
  thoughts: {
    label: "Thoughts",
    pages: [...getFrontmatter("src/app/(personal)", "/thoughts")],
  },
};
