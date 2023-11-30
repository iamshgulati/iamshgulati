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

import {
  legalNav,
  personalNav,
  professionalNav,
  socialNav,
} from "~/config/nav";
import type {
  FrontmatterKeyTypes,
  FrontmatterTypes,
} from "~/types/frontmatter";
import styles from "./command-menu.module.css";
import type { Icon } from "./icons";
import { Icons } from "./icons";

interface CommandMenuProps {
  frontmatter?: Record<FrontmatterKeyTypes, FrontmatterTypes>;
}

export function CommandMenu({
  frontmatter = undefined,
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

            {professionalNav.mainNav.length ? (
              <Command.Group heading="Professional">
                {professionalNav.mainNav.map((item) => {
                  const ItemIcon: Icon = Icons[item.icon ?? "FileIcon"];
                  return (
                    <Command.Item
                      key={item.href}
                      value={`Professional Site Pages: ${item.title}`}
                      data-disabled={item.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(item.href));
                      }}
                    >
                      <ItemIcon />
                      {item.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {personalNav.mainNav.length ? (
              <Command.Group heading="Personal">
                {personalNav.mainNav.map((item) => {
                  const ItemIcon: Icon = Icons[item.icon ?? "FileIcon"];
                  return (
                    <Command.Item
                      key={item.href}
                      value={`Personal Site Pages: ${item.title}`}
                      data-disabled={item.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(item.href));
                      }}
                    >
                      <ItemIcon />
                      {item.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {socialNav.mainNav.length ? (
              <Command.Group heading="Social">
                {socialNav.mainNav.map((item) => {
                  const ItemIcon: Icon = Icons[item.icon ?? "AtSymbolIcon"];
                  return (
                    <Command.Item
                      key={item.href}
                      value={`Social Media Network Links: ${item.title}`}
                      data-disabled={item.disabled}
                      // TODO: Find a way to open social links in new tab instead.
                      onSelect={() => {
                        runCommand(() => router.push(item.href));
                      }}
                    >
                      <ItemIcon />
                      {item.title}
                      <ArrowTopRightIcon />
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {frontmatter?.blogPosts.length ? (
              <Command.Group heading="Blog Posts">
                {frontmatter.blogPosts.map((post) => {
                  const ItemIcon: Icon = Icons[post.icon ?? "FileTextIcon"];
                  return (
                    <Command.Item
                      key={post.slug}
                      value={`Blog Posts: ${post.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(post.slug));
                      }}
                    >
                      <ItemIcon />
                      {post.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {frontmatter?.projects.length ? (
              <Command.Group heading="Projects">
                {frontmatter.projects.map((project) => {
                  const ItemIcon: Icon = Icons[project.icon ?? "CubeIcon"];
                  return (
                    <Command.Item
                      key={project.slug}
                      value={`Projects: ${project.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(project.slug));
                      }}
                    >
                      <ItemIcon />
                      {project.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {frontmatter?.thoughts.length ? (
              <Command.Group heading="Thoughts">
                {frontmatter.thoughts.map((thought) => {
                  const ItemIcon: Icon =
                    Icons[thought.icon ?? "CrumpledPaperIcon"];
                  return (
                    <Command.Item
                      key={thought.slug}
                      value={`Thoughts: ${thought.title}`}
                      onSelect={() => {
                        runCommand(() => router.push(thought.slug));
                      }}
                    >
                      <ItemIcon />
                      {thought.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {legalNav.mainNav.length ? (
              <Command.Group heading="Legal">
                {legalNav.mainNav.map((item) => {
                  const ItemIcon: Icon = Icons[item.icon ?? "FileTextIcon"];
                  return (
                    <Command.Item
                      key={item.href}
                      value={`Legal Site Pages: ${item.title}`}
                      data-disabled={item.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(item.href));
                      }}
                    >
                      <ItemIcon />
                      {item.title}
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
