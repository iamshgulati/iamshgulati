import React from "react";

import { useCommandMenu } from "~/components/command-menu";

export const useCommandMenuToggle = () => {
	const commandMenu = useCommandMenu();

	const handleCommandMenuToggle = React.useCallback(() => {
		commandMenu.setOpen((open) => !open);
	}, [commandMenu]);

	return { handleCommandMenuToggle };
};
