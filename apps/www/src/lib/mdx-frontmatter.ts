import fs from "fs";
import path from "path";
import glob from "glob";
import matter from "gray-matter";

import type { Frontmatter, ProjectFrontmatter } from "~/types/frontmatter";

const ROOT_PATH = process.cwd();
const DATA_PATH = path.join(ROOT_PATH, "src/app/(content)");

const getFrontmatter = (
  fromPath: string,
): Frontmatter[] | ProjectFrontmatter[] => {
  const PATH = path.join(DATA_PATH, fromPath);
  const paths = glob.sync(`${PATH}/**/*.mdx`);

  return paths
    .map((filePath: string) => {
      const source = fs.readFileSync(path.join(filePath), "utf8");
      const { data }: matter.GrayMatterFile<string> = matter(source);

      return {
        ...(data as Frontmatter | ProjectFrontmatter),
        slug: filePath.replace(`${DATA_PATH}`, "").replace("/page.mdx", ""),
        slugAsParams: filePath
          .replace(`${DATA_PATH}`, "")
          .replace("/page.mdx", "")
          .split("/")
          .slice(1)
          .join("/"),
      } as Frontmatter | ProjectFrontmatter;
    })
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt ?? Date.now())) -
        Number(new Date(a.publishedAt ?? Date.now())),
    );
};

export const AllFrontmatter = {
  blogPosts: getFrontmatter("/blog") ?? [],
  projects: getFrontmatter("/projects") ?? [],
  thoughts: getFrontmatter("/thoughts") ?? [],
};
