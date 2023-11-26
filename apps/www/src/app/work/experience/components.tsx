import React from "react";
import { FileTextIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link, Section, Text } from "@radix-ui/themes";

import { siteConfig } from "~/config/site";

export const EducationBreakDescription = (): React.JSX.Element => {
  return (
    <Text asChild color="gray" size="2">
      <em>
        Took a break from career to pursue specialization in Cloud and Security
        domains. Achieved certifications and built full-stack applications using
        cutting edge technologies.
      </em>
    </Text>
  );
};

export const SaskpolyMeta = (): React.JSX.Element => {
  return (
    <Flex justify="between">
      <em>Canada</em>
      <em>Dec 2022 - Dec 2023</em>
    </Flex>
  );
};

export const DeloitteUSIDescription = (): React.JSX.Element => {
  return (
    <Text asChild color="gray" size="2">
      <em>
        Deloitte Consulting US-India Offices (USI) is an extension of the
        Deloitte US organization serving clients within USA, from it&apos;s
        offsite offices in India.
      </em>
    </Text>
  );
};

export const DeloitteUSISeniorConsultantMeta = (): React.JSX.Element => {
  return (
    <Flex justify="between">
      <em>Bangalore, KA</em>
      <em>Jun 2022 - Nov 2022</em>
    </Flex>
  );
};

export const DeloitteUSIConsultantMeta = (): React.JSX.Element => {
  return (
    <Flex justify="between">
      <em>Bangalore, KA</em>
      <em>Sep 2019 - May 2022</em>
    </Flex>
  );
};

export const DeloitteUSIAnalystMeta = (): React.JSX.Element => {
  return (
    <Flex justify="between">
      <em>Bangalore, KA</em>
      <em>Apr 2018 - Aug 2019</em>
    </Flex>
  );
};

export const CGIDescription = (): React.JSX.Element => {
  return (
    <Text asChild color="gray" size="2">
      <em>
        CGI Inc. is a Canadian IT consulting and systems integration company
        headquartered in Montreal, Quebec, Canada.
      </em>
    </Text>
  );
};

export const CGIAnalystMeta = (): React.JSX.Element => {
  return (
    <Flex justify="between">
      <em>Bangalore, KA</em>
      <em>Aug 2016 - Apr 2018</em>
    </Flex>
  );
};

export const DownloadResumeSection = ({
  children,
}: React.PropsWithChildren): React.JSX.Element => {
  return (
    <Section
      size={{ initial: "2", xs: "3" }}
      pb="0"
      style={{ transform: "translate(0%, calc(-1 * var(--space-2)))" }}
    >
      <Flex justify="center">
        <Link
          href={siteConfig.links.resume}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </Link>
      </Flex>
    </Section>
  );
};

export const DownloadResumeButton = (): React.JSX.Element => {
  return (
    <Button
      size="3"
      style={{
        paddingLeft: "var(--space-6)",
        paddingRight: "var(--space-6)",
      }}
    >
      <FileTextIcon width="18" height="18" />
      <Text weight="medium">DOWNLOAD RESUME</Text>
    </Button>
  );
};
