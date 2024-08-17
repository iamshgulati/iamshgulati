import { Link } from "@radix-ui/themes";
import type React from "react";

import { cn } from "~/lib/classnames";
import { extractTextFromChildren } from "~/lib/react";
import { slugify } from "~/lib/slugify";
import { HashIcon } from "./icons";
import styles from "./link-heading.module.css";

export const LinkHeading = ({
	children = undefined,
	className = undefined,
	...props
}: React.PropsWithChildren<Omit<React.ComponentProps<"a">, "color">>): React.JSX.Element => {
	const slug = slugify(extractTextFromChildren(children) ?? "");
	return (
		<Link id={slug} href={`#${slug}`} className={cn(className, styles.LinkHeading)} {...props}>
			<HashIcon aria-hidden />
			{children}
		</Link>
	);
};
