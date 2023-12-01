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

import type { AllAppRouteProps, AllContentRouteProps } from "~/types";
import styles from "./command-menu.module.css";
import type { Icon } from "./icons";
import { Icons } from "./icons";

interface CommandMenuProps {
  allContentRoutes?: AllContentRouteProps;
  allAppRoutes?: AllAppRouteProps;
}

export function CommandMenu({
  allContentRoutes = undefined,
  allAppRoutes = undefined,
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

            {allAppRoutes?.professional.pages.length ? (
              <Command.Group heading={allAppRoutes.professional.label}>
                {allAppRoutes.professional.pages.map((page) => {
                  const ItemIcon: Icon = Icons[page.icon ?? "FileIcon"];
                  return (
                    <Command.Item
                      key={page.slug}
                      value={`Professional Site Pages: ${page.title}`}
                      data-disabled={page.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(page.slug));
                      }}
                    >
                      <ItemIcon />
                      {page.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {allAppRoutes?.personal.pages.length ? (
              <Command.Group heading={allAppRoutes.personal.label}>
                {allAppRoutes.personal.pages.map((page) => {
                  const PageIcon: Icon | undefined =
                    page.icon && Icons[page.icon];
                  return (
                    <Command.Item
                      key={page.slug}
                      value={`Personal Site Pages: ${page.title}`}
                      data-disabled={page.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(page.slug));
                      }}
                    >
                      {PageIcon && <PageIcon />}
                      {page.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {allAppRoutes?.social.pages.length ? (
              <Command.Group heading={allAppRoutes.social.label}>
                {allAppRoutes.social.pages.map((pages) => {
                  const PageIcon: Icon | undefined =
                    pages.icon && Icons[pages.icon];
                  return (
                    <Command.Item
                      key={pages.slug}
                      value={`Social Media Network Links: ${pages.title}`}
                      data-disabled={pages.disabled}
                      // TODO: Find a way to open social links in new tab instead.
                      onSelect={() => {
                        runCommand(() => router.push(pages.slug));
                      }}
                    >
                      {PageIcon && <PageIcon />}
                      {pages.title}
                      <ArrowTopRightIcon />
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {allContentRoutes?.blogPosts.pages.length ? (
              <Command.Group heading={allContentRoutes.blogPosts.label}>
                {allContentRoutes.blogPosts.pages.map((page) => {
                  const PageIcon: Icon | undefined =
                    page.icon && Icons[page.icon];
                  return (
                    <Command.Item
                      key={page.slug}
                      value={`Blog Posts: ${page.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(page.slug));
                      }}
                    >
                      {PageIcon && <PageIcon />}
                      {page.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {allContentRoutes?.projects.pages.length ? (
              <Command.Group heading={allContentRoutes.projects.label}>
                {allContentRoutes.projects.pages.map((page) => {
                  const PageIcon: Icon | undefined =
                    page.icon && Icons[page.icon];
                  return (
                    <Command.Item
                      key={page.slug}
                      value={`Projects: ${page.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(page.slug));
                      }}
                    >
                      {PageIcon && <PageIcon />}
                      {page.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {allContentRoutes?.thoughts.pages.length ? (
              <Command.Group heading={allContentRoutes.thoughts.label}>
                {allContentRoutes.thoughts.pages.map((page) => {
                  const PageIcon: Icon | undefined =
                    page.icon && Icons[page.icon];
                  return (
                    <Command.Item
                      key={page.slug}
                      value={`Thoughts: ${page.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(page.slug));
                      }}
                    >
                      {PageIcon && <PageIcon />}
                      {page.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {allAppRoutes?.legal.pages.length ? (
              <Command.Group heading={allAppRoutes.legal.label}>
                {allAppRoutes.legal.pages.map((page) => {
                  const PageIcon: Icon | undefined =
                    page.icon && Icons[page.icon];
                  return (
                    <Command.Item
                      key={page.slug}
                      value={`Legal Site Pages: ${page.title}`}
                      data-disabled={page.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(page.slug));
                      }}
                    >
                      {PageIcon && <PageIcon />}
                      {page.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}
          </Command.List>
        </Command>
      </Dialog.Content>
    </Dialog.Root>
  );
}

const CommandShortcut = ({ children }: React.PropsWithChildren) => (
  <Kbd cmdk-kbd="">{children}</Kbd>
);
