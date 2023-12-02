import fs from "fs";
import path from "path";
import glob from "glob";
import matter from "gray-matter";

import type { Page } from "./routes";

export type Frontmatter = Page & {
  slugAsParams: string;
  publishedAt?: string;
  image?: string;
  by?: "shubham";
  category?: string;
  tags?: string[];
};

export type ProjectFrontmatter = Frontmatter & {
  summary?: string;
  link?: string;
  sourceCodeLink?: string;
};

const ROOT_PATH = process.cwd();

export const getFrontmatter = (
  dataPath: string,
  fromPath: string,
): Frontmatter[] => {
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
