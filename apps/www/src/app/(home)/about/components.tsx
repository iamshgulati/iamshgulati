import React from "react";
import { FileTextIcon } from "@radix-ui/react-icons";
import { Button, Flex, Link, Section, Text } from "@radix-ui/themes";

import { BadgeWithIndicator } from "~/components/badge-with-indicator";
import { HStack, VStack } from "~/components/stack";
import { siteConfig } from "~/config/site";

export const EducationBreakDescription = (): React.JSX.Element => {
  return (
    <Text color="gray" size="2">
      Took a break from career to pursue specialization in Cloud and Security
      domains. Achieved certifications and built full-stack applications using
      cutting edge technologies.
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
    <Text color="gray" size="2">
      Deloitte Consulting US-India Offices (USI) is an extension of the Deloitte
      US organization serving clients within USA, from it&apos;s offsite offices
      in India.
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
    <Text color="gray" size="2">
      CGI Inc. is a Canadian IT consulting and systems integration company
      headquartered in Montreal, Quebec, Canada.
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

//

export const ExampleBadges = (): React.JSX.Element => {
  return (
    <VStack>
      <HStack>
        <BadgeWithIndicator indicator={90}>Frequently Used</BadgeWithIndicator>
        <BadgeWithIndicator indicator={30}>
          Occasionally Used
        </BadgeWithIndicator>
      </HStack>
    </VStack>
  );
};

export const ProgrammingLanguageBadges = (): React.JSX.Element => {
  return (
    <VStack>
      <HStack>
        <BadgeWithIndicator indicator={100}>Java</BadgeWithIndicator>
        <BadgeWithIndicator indicator={60}>SQL</BadgeWithIndicator>
        <BadgeWithIndicator indicator={40}>Shell</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={50}>TypeScript</BadgeWithIndicator>
        <BadgeWithIndicator indicator={40}>JavaScript</BadgeWithIndicator>
        <BadgeWithIndicator indicator={60}>HTML</BadgeWithIndicator>
        <BadgeWithIndicator indicator={60}>CSS</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={20}>Solidity</BadgeWithIndicator>
      </HStack>
    </VStack>
  );
};

export const LibraryAndFrameworkBadges = (): React.JSX.Element => {
  return (
    <VStack>
      <HStack>
        <BadgeWithIndicator indicator={90}>Spring Boot</BadgeWithIndicator>
        <BadgeWithIndicator indicator={80}>REST API</BadgeWithIndicator>
        <BadgeWithIndicator indicator={40}>GraphQL</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={70}>JPA</BadgeWithIndicator>
        <BadgeWithIndicator indicator={60}>Hibernate</BadgeWithIndicator>
        <BadgeWithIndicator indicator={50}>PostgreSQL</BadgeWithIndicator>
        <BadgeWithIndicator indicator={50}>MySQL</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={80}>Tailwind CSS</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>React</BadgeWithIndicator>
        <BadgeWithIndicator indicator={80}>Next.js</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={20}>Ethereum</BadgeWithIndicator>
      </HStack>
    </VStack>
  );
};

export const InfrastructureBadges = (): React.JSX.Element => {
  return (
    <VStack>
      <HStack>
        <BadgeWithIndicator indicator={70}>AWS IAM</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS VPC</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS EC2</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS S3</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS EBS</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS ALB</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={70}>AWS Lambda</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS SQS</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>AWS SNS</BadgeWithIndicator>
      </HStack>
    </VStack>
  );
};

export const SoftwareAndToolBadges = (): React.JSX.Element => {
  return (
    <VStack>
      <HStack>
        <BadgeWithIndicator indicator={100}>IntelliJ IDEA</BadgeWithIndicator>
        <BadgeWithIndicator indicator={100}>WebStorm</BadgeWithIndicator>
        <BadgeWithIndicator indicator={80}>VS Code</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>Postman</BadgeWithIndicator>
        <BadgeWithIndicator indicator={100}>Git</BadgeWithIndicator>
        <BadgeWithIndicator indicator={100}>GitHub</BadgeWithIndicator>
      </HStack>
      <HStack>
        <BadgeWithIndicator indicator={60}>OpenAPI</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>Swagger</BadgeWithIndicator>
        <BadgeWithIndicator indicator={70}>CrushFTP</BadgeWithIndicator>
        <BadgeWithIndicator indicator={60}>Jenkins</BadgeWithIndicator>
        <BadgeWithIndicator indicator={40}>Docker</BadgeWithIndicator>
        <BadgeWithIndicator indicator={30}>Kubernetes</BadgeWithIndicator>
      </HStack>
    </VStack>
  );
};
