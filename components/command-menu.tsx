"use client";

import { createContext } from "@radix-ui/react-context";
import { Box, Dialog, IconButton, Kbd } from "@radix-ui/themes";
import { Command, CommandGroup } from "cmdk";
import { useRouter } from "next/navigation";
import React from "react";

import { useCommandMenuToggle } from "~/hooks/useCommandMenuToggle";
import { useKeyboardShortcuts } from "~/hooks/useKeyboardShortcuts";
import { useThemeToggle } from "~/hooks/useThemeToggle";
import type { Route } from "~/lib/routes";
import type { Frontmatter } from "~/types/frontmatter";
import type { Icon } from "./icons";
import { CommandIcon, Icons } from "./icons";
import { ThemeIcon } from "./theme-icon";

const [MenuProvider, useMenuContext] = createContext<{
	open: boolean;
	setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("CommandMenu");

export const CommandMenuProvider = ({
	children = undefined,
}: React.PropsWithChildren): React.JSX.Element => {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<MenuProvider open={open} setOpen={setOpen}>
			{children}
		</MenuProvider>
	);
};

export const useCommandMenu = () => useMenuContext("CommandMenu");

type CommandMenuProps = React.ComponentPropsWithoutRef<typeof IconButton> & {
	routes?: Route[];
	iconProps?: React.ComponentPropsWithoutRef<Icon>;
};

export function CommandMenu({
	routes = undefined,
	iconProps = { width: "16", height: "16" },
	...props
}: CommandMenuProps): React.JSX.Element {
	const commandMenu = useCommandMenu();
	const router = useRouter();

	const { handleCommandMenuToggle } = useCommandMenuToggle();
	const { handleThemeToggle } = useThemeToggle();

	useKeyboardShortcuts({
		handleCommandMenuToggle,
	});

	const runCommand = React.useCallback(
		(command: () => unknown): void => {
			commandMenu.setOpen(false);
			command();
		},
		[commandMenu],
	);

	const openInNewTab = (url: string) => {
		window.open(url, "_blank", "noopener, noreferrer");
	};

	return (
		<Dialog.Root open={commandMenu.open} onOpenChange={commandMenu.setOpen}>
			<Dialog.Trigger>
				<IconButton size="3" variant="ghost" color="gray" highContrast {...props}>
					<CommandIcon
						aria-label="Open Command Menu"
						style={{
							transform: "scale(1.4)",
						}}
						{...iconProps}
					/>
				</IconButton>
			</Dialog.Trigger>
			{/* Inline styles necessary here to override styles defined by Radix Themes */}
			<Box
				asChild
				style={{
					padding: "0",
					borderRadius: "var(--radius-4)",
					boxShadow: "none",
					overflow: "hidden",
				}}
			>
				<Dialog.Content>
					<Command>
						<Command.Input placeholder="Type a command or search..." />

						<Command.List>
							<Command.Empty>No results found</Command.Empty>

							<CommandGroup heading="Keyboard Shortcuts">
								<Command.Item
									value="CmdK Command Menu Keyboard Shortcut: Toggle CmdK Command Menu"
									onSelect={() =>
										runCommand((): void => {
											// do nothing
										})
									}
								>
									<Icons.CommandIcon />
									Command Menu
									<CommandShortcut>⌘&thinsp;K</CommandShortcut>
								</Command.Item>

								<Command.Item
									value="Theme Keyboard Shortcut: Toggle Theme System Light Dark"
									onSelect={() => runCommand(() => handleThemeToggle())}
								>
									<ThemeIcon />
									Theme
									<CommandShortcut>⌘&thinsp;D</CommandShortcut>
								</Command.Item>
							</CommandGroup>

							{routes?.map((section: Route): React.JSX.Element | null =>
								section.pages ? (
									<Command.Group key={section.label} heading={section.label}>
										{section.pages.map((page: Frontmatter) => {
											const ItemIcon: Icon | undefined = page.icon && Icons[page.icon];
											return page.slug.startsWith("http") ? (
												<Command.Item
													key={page.slug}
													value={`${section.label}: ${page.title}`}
													data-disabled={page.disabled}
													onSelect={(): void => {
														runCommand(() => openInNewTab(page.slug));
													}}
												>
													{ItemIcon && <ItemIcon />}
													{page.title}
													<Icons.ArrowTopRightIcon />
												</Command.Item>
											) : (
												<Command.Item
													key={page.slug}
													value={`${section.label}: ${page.title}`}
													data-disabled={page.disabled}
													onSelect={(): void => {
														runCommand(() => router.push(page.slug));
													}}
												>
													{ItemIcon && <ItemIcon />}
													{page.title}
												</Command.Item>
											);
										})}
									</Command.Group>
								) : null,
							)}
						</Command.List>
					</Command>
				</Dialog.Content>
			</Box>
		</Dialog.Root>
	);
}

const CommandShortcut = ({ children = undefined }: React.PropsWithChildren): React.JSX.Element => (
	<Kbd cmdk-kbd="">{children}</Kbd>
);
