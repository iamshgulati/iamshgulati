import React from "react";

import { cn } from "~/lib/classnames";
import styles from "./box-link.module.css";

type BoxLinkProps = React.PropsWithChildren<React.ComponentPropsWithoutRef<"a">> & {
	ariaLabel: string;
};

export const BoxLink = React.forwardRef<HTMLAnchorElement, BoxLinkProps>(function BoxLink(
	{ ariaLabel, className = undefined, ...props },
	forwardedRef,
): React.JSX.Element {
	return (
		<a
			aria-label={ariaLabel}
			ref={forwardedRef}
			className={cn(className, styles.BoxLink)}
			{...props}
		/>
	);
});
