import glob from "glob";
import type { MDXModule } from "mdx/types";

import type { Frontmatter } from "~/types/frontmatter";

const ROOT_DIR = process.cwd();

export const getAllFrontmatter = async (
  dataDir: string,
  contentDir = "",
): Promise<Frontmatter[]> => {
  const mdxFilePathPattern = `${ROOT_DIR}${dataDir}${contentDir}/**/*.mdx`;
  const mdxFilePaths = glob.sync(mdxFilePathPattern);

  // Resolve all frontmatter promises so we can perform filtering and sorting
  let allFrontmatter: Frontmatter[] = await Promise.all(
    mdxFilePaths.map(async (mdxFilePath) => {
      const modulePath = mdxFilePath
        .replace(`${ROOT_DIR}`, "")
        .replace(`${dataDir}`, "")
        .replace("/page.mdx", "");

      const { metadata } = (await import(
        `/src/data${modulePath}/page.mdx`
      )) as MDXModule;

      return {
        ...(metadata as Frontmatter),
        filePath: mdxFilePath.replace(`${ROOT_DIR}`, ""),
        slug: mdxFilePath
          .replace(`${ROOT_DIR}`, "")
          .replace(`${dataDir}`, "")
          .replace("/page.mdx", ""),
        slugAsParams: mdxFilePath
          .replace(`${ROOT_DIR}`, "")
          .replace(`${dataDir}`, "")
          .replace(`${contentDir}`, "")
          .replace("/page.mdx", "")
          .split("/")
          .slice(1)
          .join("/"),
      } as Frontmatter;
    }),
  );

  // Filter out items where any part of slug starts with '_'
  // This behavior matches Next.js app dir where adding _ disables the route
  allFrontmatter = allFrontmatter.filter(
    (frontmatter: Frontmatter) =>
      !frontmatter.slug.split("/").some((s) => s.startsWith("_")),
  );

  // Filter out items where publishedAt is undefined
  // allFrontmatter = allFrontmatter.filter(
  //   (frontmatter: Frontmatter) =>
  //     frontmatter?.publishedAt ?? (!frontmatter.publishedAt && !isProduction),
  // );

  // Sort items by publishedAt in descending order
  allFrontmatter = allFrontmatter.sort(
    (a: Frontmatter, b: Frontmatter) =>
      Number(new Date(b.publishedAt ?? new Date())) -
      Number(new Date(a.publishedAt ?? new Date())),
  );

  return allFrontmatter;
};
