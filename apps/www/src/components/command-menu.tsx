"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { createContext } from "@radix-ui/react-context";
import {
  ArrowTopRightIcon,
  Half2Icon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { AccessibleIcon, Box, Dialog, IconButton, Kbd } from "@radix-ui/themes";
import { Command, CommandGroup } from "cmdk";
import { useTheme } from "next-themes";

import type { AppRoute } from "~/lib/routes";
import type { Icon } from "./icons";
import { Icons } from "./icons";

const [MenuProvider, useMenuContext] = createContext<{
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>("CommandMenu");

export const CommandMenuProvider = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <MenuProvider open={open} setOpen={setOpen}>
      {children}
    </MenuProvider>
  );
};

export const useCommandMenu = () => useMenuContext("CommandMenu");

interface CommandMenuProps {
  routes?: AppRoute[];
}

export function CommandMenu({
  routes = undefined,
}: CommandMenuProps): React.JSX.Element {
  const commandMenu = useCommandMenu();
  const router = useRouter();
  const nextThemes = useTheme();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      commandMenu.setOpen(false);
      command();
    },
    [commandMenu],
  );

  /*
   * Toggle Command Menu with Command + K keyboard shortcut
   */
  const handleCommandMenuToggle = React.useCallback(() => {
    commandMenu.setOpen((open) => !open);
  }, [commandMenu]);

  const onCommandMenuShortcut = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdK = event.key === "k" && (event.metaKey || event.altKey);
      if (isCmdK) {
        event.preventDefault();
        if (!event.repeat) {
          handleCommandMenuToggle();
        }
      }
    },
    [handleCommandMenuToggle],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", onCommandMenuShortcut);
    return () => document.removeEventListener("keydown", onCommandMenuShortcut);
  }, [onCommandMenuShortcut]);

  /*
   * Toggle Theme with Command + D keyboard shortcut
   */
  const handleThemeToggle = React.useCallback(() => {
    const newTheme = nextThemes.resolvedTheme === "dark" ? "light" : "dark";
    nextThemes.setTheme(
      newTheme === nextThemes.systemTheme ? "system" : newTheme,
    );
  }, [nextThemes]);

  const onThemeToggleShortcut = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdD = event.key === "d" && (event.metaKey || event.altKey);
      if (isCmdD) {
        event.preventDefault();
        if (!event.repeat) {
          handleThemeToggle();
        }
      }
    },
    [handleThemeToggle],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", onThemeToggleShortcut);
    return () => document.removeEventListener("keydown", onThemeToggleShortcut);
  }, [onThemeToggleShortcut]);

  return (
    <Dialog.Root open={commandMenu.open} onOpenChange={commandMenu.setOpen}>
      <Dialog.Trigger>
        <IconButton size="3" variant="ghost" color="gray">
          <AccessibleIcon label="Open Command Menu">
            <MagnifyingGlassIcon width="16" height="16" />
          </AccessibleIcon>
        </IconButton>
      </Dialog.Trigger>
      {/* Inline styles necessary here to override styles defined by RT */}
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
                  value="Theme Keyboard Shortcut: Toggle Theme System Light Dark"
                  onSelect={() => runCommand(() => handleThemeToggle())}
                >
                  <Half2Icon
                    width="16"
                    height="16"
                    style={{
                      display: "var(--system-theme-icon-display)",
                      transform: "rotate(45deg)",
                    }}
                  />
                  <SunIcon
                    width="16"
                    height="16"
                    style={{ display: "var(--light-theme-icon-display)" }}
                  />
                  <MoonIcon
                    width="16"
                    height="16"
                    style={{ display: "var(--dark-theme-icon-display)" }}
                  />
                  Toggle Theme
                  <CommandShortcut>⌘&thinsp;D</CommandShortcut>
                </Command.Item>

                <Command.Item
                  value="CmdK Command Menu Keyboard Shortcut: Toggle CmdK Command Menu"
                  onSelect={() =>
                    runCommand(() => {
                      // do nothing
                    })
                  }
                >
                  <MagnifyingGlassIcon />
                  Toggle Search
                  <CommandShortcut>⌘&thinsp;K</CommandShortcut>
                </Command.Item>
              </CommandGroup>

              {routes?.map((section, index) =>
                section.pages.length > 0 ? (
                  <Command.Group
                    key={section.label ?? index}
                    heading={section.label}
                  >
                    {section.pages.map((page) => {
                      const ItemIcon: Icon | undefined =
                        page.icon && Icons[page.icon];
                      return (
                        <Command.Item
                          key={page.slug}
                          value={`${section.label}: ${page.title}`}
                          data-disabled={page.disabled}
                          onSelect={() => {
                            runCommand(() => router.push(page.slug));
                          }}
                        >
                          {ItemIcon && <ItemIcon />}
                          {page.title}
                          {page.slug.startsWith("http") && (
                            <ArrowTopRightIcon />
                          )}
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

const CommandShortcut = ({ children }: React.PropsWithChildren) => (
  <Kbd cmdk-kbd="">{children}</Kbd>
);
