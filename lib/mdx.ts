import { readFile } from "fs/promises";
import { glob } from "glob";
import matter from "gray-matter";

import type { Frontmatter } from "~/types/frontmatter";

const ROOT_DIR = process.cwd();
const SOURCE_DIR = "/public";

export const getAllFrontmatter = async ({
  contentDir = "",
}: {
  contentDir?: string;
}): Promise<Frontmatter[]> => {
  const mdxFilePathPattern = `${ROOT_DIR}${SOURCE_DIR}${contentDir}/**/*.mdx`;
  const mdxFilePaths = glob.sync(mdxFilePathPattern);

  // Resolve all frontmatter promises so we can perform filtering and sorting
  let allFrontmatter: Frontmatter[] = await Promise.all(
    mdxFilePaths.map(async (mdxFilePath) => {
      const mdxFile = await readFile(mdxFilePath, "utf8");
      const { data }: matter.GrayMatterFile<string> = matter(mdxFile);
      return {
        ...(data as Frontmatter),
        slug: mdxFilePath
          .replace(`${ROOT_DIR}`, "")
          .replace(`${SOURCE_DIR}`, "")
          .replace("/index.mdx", ""),
        slugAsParams: mdxFilePath
          .replace(`${ROOT_DIR}`, "")
          .replace(`${SOURCE_DIR}`, "")
          .replace(`${contentDir}`, "")
          .replace("/index.mdx", "")
          .split("/")
          .slice(1)
          .join("/"),
      } as Frontmatter;
    }),
  );

  // Filter out items where any part of slug starts with '_'
  allFrontmatter = allFrontmatter.filter(
    (frontmatter: Frontmatter) =>
      !frontmatter.slug.split("/").some((s) => s.startsWith("_")),
  );

  // Sort items by publishedAt in descending order
  allFrontmatter = allFrontmatter.sort(
    (a: Frontmatter, b: Frontmatter) =>
      Number(new Date(b.publishedAt ?? new Date())) -
      Number(new Date(a.publishedAt ?? new Date())),
  );

  return allFrontmatter;
};

export const getMatter = async ({
  slug,
}: {
  slug: string;
}): Promise<matter.GrayMatterFile<string>> => {
  const filename = `./public${slug}/index.mdx`;
  const mdxFile = await readFile(filename, "utf8");
  return matter(mdxFile);
};
