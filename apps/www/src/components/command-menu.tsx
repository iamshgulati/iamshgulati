"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowTopRightIcon,
  Half2Icon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { AccessibleIcon, Dialog, IconButton, Kbd } from "@radix-ui/themes";
import { Command } from "cmdk";
import { useTheme } from "next-themes";

import type { Route } from "~/lib/routes";
import styles from "./command-menu.module.css";
import type { Icon } from "./icons";
import { Icons } from "./icons";

interface CommandMenuProps {
  routes?: Route[];
}

export function CommandMenu({
  routes = undefined,
}: CommandMenuProps): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const { resolvedTheme, systemTheme, setTheme } = useTheme();

  // Toggle CmdK Command Menu with ⌘ + K
  const onCommandMenuShortcut = React.useCallback((event: KeyboardEvent) => {
    const isCmdK = event.key === "k" && (event.metaKey || event.altKey);
    if (isCmdK) {
      event.preventDefault();
      if (!event.repeat) {
        setOpen((open) => !open);
      }
    }
  }, []);

  React.useEffect(() => {
    document.addEventListener("keydown", onCommandMenuShortcut);
    return () => document.removeEventListener("keydown", onCommandMenuShortcut);
  }, [onCommandMenuShortcut]);

  // Toggle theme with ⌘ + D
  const onThemeToggle = React.useCallback(() => {
    const newTheme = resolvedTheme === "dark" ? "light" : "dark";
    setTheme(newTheme === systemTheme ? "system" : newTheme);
  }, [resolvedTheme, setTheme, systemTheme]);

  const onThemeToggleShortcut = React.useCallback(
    (event: KeyboardEvent) => {
      const isCmdD = event.key === "d" && (event.metaKey || event.altKey);
      if (isCmdD) {
        event.preventDefault();
        if (!event.repeat) {
          onThemeToggle();
        }
      }
    },
    [onThemeToggle],
  );

  React.useEffect(() => {
    document.addEventListener("keydown", onThemeToggleShortcut);
    return () => document.removeEventListener("keydown", onThemeToggleShortcut);
  }, [onThemeToggleShortcut]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className={styles.CommandMenuDialogTrigger}>
        <IconButton
          size="3"
          variant="ghost"
          color="gray"
          onClick={() => setOpen(true)}
        >
          <AccessibleIcon label="Command Menu">
            <MagnifyingGlassIcon width="16" height="16" />
          </AccessibleIcon>
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className={styles.CommandMenuDialogContent}>
        <Command loop>
          <Command.Input placeholder="Type a command or search..." />

          <Command.List>
            <Command.Empty>No results found</Command.Empty>

            <Command.Item
              value="Theme: Toggle Theme System Light Dark"
              onSelect={() =>
                runCommand(() => {
                  onThemeToggle();
                })
              }
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
              value="CmdK Command Menu: Toggle CmdK Command Menu"
              onSelect={() =>
                runCommand(() => {
                  // do nothing
                })
              }
            >
              <MagnifyingGlassIcon />
              Toggle Menu
              <CommandShortcut>⌘&thinsp;K</CommandShortcut>
            </Command.Item>

            {routes?.map((section, index) => (
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
                      {page.slug.startsWith("http") && <ArrowTopRightIcon />}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </Dialog.Content>
    </Dialog.Root>
  );
}

const CommandShortcut = ({ children }: React.PropsWithChildren) => (
  <Kbd cmdk-kbd="">{children}</Kbd>
);
