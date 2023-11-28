"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { AccessibleIcon, Dialog, IconButton } from "@radix-ui/themes";
import { Command } from "cmdk";

import type {
  FrontmatterKeyTypes,
  FrontmatterTypes,
} from "~/types/frontmatter";

interface SearchProps {
  frontmatter: Record<FrontmatterKeyTypes, FrontmatterTypes>;
}

export function Search({ frontmatter }: SearchProps): React.JSX.Element {
  const [open, setOpen] = React.useState<boolean>(false);
  const router = useRouter();

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
      <Dialog.Content style={{ padding: 0 }}>
        <Command>
          <Command.Input placeholder="Type a command or search..." />

          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            {frontmatter.blogPosts.length ? (
              <Command.Group heading="Blog Posts">
                {frontmatter.blogPosts.map((post) => (
                  <Command.Item
                    key={post.slug}
                    value={`Blog Posts: ${post.title}`}
                    onSelect={() => {
                      runCommand(() => router.push(post.slug));
                    }}
                  >
                    {post.title}
                  </Command.Item>
                ))}
              </Command.Group>
            ) : null}

            {frontmatter.projects.length ? (
              <Command.Group heading="Projects">
                {frontmatter.projects.map((project) => (
                  <Command.Item
                    key={project.slug}
                    value={`Projects: ${project.title}`}
                    onSelect={() => {
                      runCommand(() => router.push(project.slug));
                    }}
                  >
                    {project.title}
                  </Command.Item>
                ))}
              </Command.Group>
            ) : null}

            {frontmatter.thoughts.length ? (
              <Command.Group heading="Thoughts">
                {frontmatter.thoughts.map((thought) => (
                  <Command.Item
                    key={thought.slug}
                    value={`Thoughts: ${thought.title}`}
                    onSelect={() => {
                      runCommand(() => router.push(thought.slug));
                    }}
                  >
                    {thought.title}
                  </Command.Item>
                ))}
              </Command.Group>
            ) : null}
          </Command.List>
        </Command>
      </Dialog.Content>
    </Dialog.Root>
  );
}
