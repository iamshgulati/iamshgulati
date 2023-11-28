"use client";

import React from "react";
import { useRouter } from "next/navigation";
import {
  Half2Icon,
  MagnifyingGlassIcon,
  MoonIcon,
  SunIcon,
} from "@radix-ui/react-icons";
import { AccessibleIcon, Dialog, IconButton, Text } from "@radix-ui/themes";
import { Command as CommandPrimitive } from "cmdk";
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
import type { Icon } from "./icons";
import { Icons } from "./icons";
import styles from "./search.module.css";
import { updateThemeClasses } from "./theme-effect";

interface SearchProps {
  frontmatter: Record<FrontmatterKeyTypes, FrontmatterTypes>;
}

export function Search({ frontmatter }: SearchProps): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  React.useEffect(() => {
    const down = (event: KeyboardEvent) => {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setOpen((open) => !open);
      }
      if (event.key === "l" && event.ctrlKey) {
        event.preventDefault();
        setTheme("light");
        updateThemeClasses();
      }
      if (event.key === "d" && event.ctrlKey) {
        event.preventDefault();
        setTheme("dark");
        updateThemeClasses();
      }
      if (event.key === "s" && event.ctrlKey) {
        event.preventDefault();
        setTheme("system");
        updateThemeClasses();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setTheme]);

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false);
    command();
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <IconButton
          size="3"
          variant="ghost"
          color="gray"
          onClick={() => setOpen(true)}
        >
          <AccessibleIcon label="Search website">
            <MagnifyingGlassIcon width="20" height="20" />
          </AccessibleIcon>
        </IconButton>
      </Dialog.Trigger>
      <Dialog.Content className={styles.DialogContent}>
        <Command.Root>
          <Command.Input placeholder="Type a command or search..." />

          <Command.List>
            <Command.Empty>No results found</Command.Empty>

            <Command.Group heading="Theme">
              <Command.Item
                value="Theme: Light Theme"
                onSelect={() =>
                  runCommand(() => {
                    setTheme("light");
                    updateThemeClasses();
                  })
                }
              >
                <SunIcon width="16" height="16" />
                Light
                <Command.Shortcut>⌃L</Command.Shortcut>
              </Command.Item>
              <Command.Item
                value="Theme: Dark Theme"
                onSelect={() =>
                  runCommand(() => {
                    setTheme("dark");
                    updateThemeClasses();
                  })
                }
              >
                <MoonIcon width="16" height="16" />
                Dark
                <Command.Shortcut>⌃D</Command.Shortcut>
              </Command.Item>
              <Command.Item
                value="Theme: System Theme"
                onSelect={() =>
                  runCommand(() => {
                    setTheme("system");
                    updateThemeClasses();
                  })
                }
              >
                <Half2Icon
                  width="16"
                  height="16"
                  style={{ transform: "rotate(45deg)" }}
                />
                System
                <Command.Shortcut>⌃S</Command.Shortcut>
              </Command.Item>
            </Command.Group>

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
                        runCommand(() => router.push(item.href as string));
                      }}
                    >
                      <ItemIcon width="16" height="16" />
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
                        runCommand(() => router.push(item.href as string));
                      }}
                    >
                      <ItemIcon width="16" height="16" />
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
                      value={`Social Links: ${item.title}`}
                      data-disabled={item.disabled}
                      onSelect={() => {
                        runCommand(() => router.push(item.href as string));
                      }}
                    >
                      <ItemIcon width="16" height="16" />
                      {item.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {frontmatter.blogPosts.length ? (
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
                      <ItemIcon width="16" height="16" />
                      {post.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {frontmatter.projects.length ? (
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
                      <ItemIcon width="16" height="16" />
                      {project.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}

            {frontmatter.thoughts.length ? (
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
                      <ItemIcon width="16" height="16" />
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
                        runCommand(() => router.push(item.href as string));
                      }}
                    >
                      <ItemIcon width="16" height="16" />
                      {item.title}
                    </Command.Item>
                  );
                })}
              </Command.Group>
            ) : null}
          </Command.List>
        </Command.Root>
      </Dialog.Content>
    </Dialog.Root>
  );
}

const CommandShortcut = ({ children }: React.PropsWithChildren) => (
  <Text
    size="1"
    color="gray"
    style={{
      marginLeft: "auto",
      letterSpacing: "calc(100 * var(--letter-spacing-1))",
    }}
  >
    {children}
  </Text>
);

const Command = {
  Root: CommandPrimitive,
  Dialog: CommandPrimitive.Dialog,
  Empty: CommandPrimitive.Empty,
  Group: CommandPrimitive.Group,
  Input: CommandPrimitive.Input,
  List: CommandPrimitive.List,
  Item: CommandPrimitive.Item,
  Separator: CommandPrimitive.Separator,
  Shortcut: CommandShortcut,
};
