import React from "react";

import { BadgeWithIndicator } from "~/components/badge-with-indicator";
import { HStack, VStack } from "~/components/stack";

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
