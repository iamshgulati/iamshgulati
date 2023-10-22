"use client";

import { usePathname } from "next/navigation";
import { Cross2Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";
import {
  AccessibleIcon,
  Flex,
  Heading,
  IconButton,
  Link,
  Popover,
  Text,
  Tooltip,
} from "@radix-ui/themes";

import { learnNavConfig, workNavConfig } from "~/config/nav";
import { NextLink } from "~/lib/link";
import type { NavItem } from "~/types";
import styles from "./mobile-menu.module.css";

// TODO: close menu automatically on navigation change
// TODO: use body lock hook

export function MobileMenu(): React.JSX.Element {
  return (
    <Popover.Root>
      <Tooltip content="Toggle mobile menu">
        <Popover.Trigger className={styles.PopoverTrigger}>
          <IconButton name="Mobile menu" size="3" variant="ghost" color="gray">
            <AccessibleIcon label="Open mobile menu">
              <HamburgerMenuIcon
                width="16"
                height="16"
                style={{
                  display:
                    "var(--mobile-menu-toggle-hamburger-menu-icon-display)",
                }}
              />
            </AccessibleIcon>
            <AccessibleIcon label="Close mobile menu">
              <Cross2Icon
                width="16"
                height="16"
                style={{
                  display: "var(--mobile-menu-toggle-close-icon-display)",
                }}
              />
            </AccessibleIcon>
          </IconButton>
        </Popover.Trigger>
      </Tooltip>
      <Popover.Content
        style={{
          minWidth: "calc(min(100vw, 390px) - var(--space-5))",
          padding: "24px",
        }}
      >
        <Flex direction="column" gap="6" width="100%">
          <MenuGroup
            groupTitle={workNavConfig.title}
            items={workNavConfig.mainNavItems}
          />
          <MenuGroup
            groupTitle={learnNavConfig.title}
            items={learnNavConfig.mainNavItems}
          />
        </Flex>
      </Popover.Content>
    </Popover.Root>
  );
}

export function MenuGroup({
  groupTitle,
  items = [],
}: {
  groupTitle: string;
  items?: NavItem[];
}): React.JSX.Element | null {
  const pathname = usePathname();

  return items.length ? (
    <Flex direction="column" gap="1">
      <Heading as="h6" size="3">
        {groupTitle}
      </Heading>
      {items.map((item, key) => (
        <Text key={key} size="2" mt="2">
          <NextLink href={item.href} passHref legacyBehavior>
            <Link color="gray" highContrast={pathname.startsWith(item.href)}>
              {item.title}
            </Link>
          </NextLink>
        </Text>
      ))}
    </Flex>
  ) : null;
}
