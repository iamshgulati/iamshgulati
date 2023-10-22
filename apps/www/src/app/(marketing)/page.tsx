import React from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { FileTextIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import {
  Badge,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Section,
  Text,
} from "@radix-ui/themes";

import awsCloudPractitionerBadge from "~/assets/images/badges/aws-cloud-practitioner-badge.png";
import awsDeveloperAssociateBadge from "~/assets/images/badges/aws-developer-associate.png";
import awsSolutionsArchitectAssociateBadge from "~/assets/images/badges/aws-solutions-architect-associate-badge.png";
import { PageHeading } from "~/components/page-heading";
import { siteConfig } from "~/config/site";

export default function MarketingPage(): React.JSX.Element {
  return (
    <React.Fragment>
      <Section size={{ initial: "2", xs: "3" }} pb="0">
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Box style={{ maxWidth: "700px" }}>
            <HeroSection />
          </Box>
        </Container>
      </Section>
      <Section size="3">
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Box style={{ maxWidth: "700px" }}>
            <CertificationsSection />
          </Box>
        </Container>
      </Section>
    </React.Fragment>
  );
}

const HeroSection = (): React.JSX.Element => (
  <React.Fragment>
    <Text as="p" mb="1" color="gray" size={{ initial: "5", xs: "7" }}>
      Hello!
    </Text>
    <PageHeading as="h1" mb="6" variant="sans">
      I&apos;m Shubham Gulati,
    </PageHeading>
    <Text as="p" size={{ initial: "3", xs: "5" }}>
      Software Engineer and Certified Cloud Architect.
    </Text>
    <Text as="p" mb="6" size={{ initial: "3", xs: "5" }}>
      Past — Senior Technology Consultant @ Deloitte Consulting.
    </Text>
    <Text as="p" mb="6" color="gray" size={{ initial: "3", xs: "5" }}>
      I love tinkering with code. Currently, I am learning the craft of
      designing high-performance cloud architectures and minimalistic front-end
      interfaces.
    </Text>
    <Flex direction="row" gap="4">
      <Link
        href={siteConfig.links.linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="3"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
          }}
        >
          <LinkedInLogoIcon width="18" height="18" />
          <Text weight="medium">LinkedIn</Text>
        </Button>
      </Link>
      <Link
        href={siteConfig.links.resume}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          variant="soft"
          size="3"
          style={{
            paddingLeft: "var(--space-5)",
            paddingRight: "var(--space-5)",
          }}
        >
          <FileTextIcon width="18" height="18" />
          <Text weight="medium">RESUME</Text>
        </Button>
      </Link>
    </Flex>
  </React.Fragment>
);

const CertificationsSection = (): React.JSX.Element => (
  <React.Fragment>
    <Heading
      as="h2"
      size={{
        initial: "7",
        xs: "8",
      }}
      mb="6"
    >
      Certifications
    </Heading>
    <Grid align="center" columns={{ initial: "3", xs: "5" }} gap="5">
      <CertificationBadge
        src={awsDeveloperAssociateBadge}
        alt="AWS Certified Developer Associate Badge"
        priority
      >
        soon
      </CertificationBadge>
      <CertificationBadge
        src={awsSolutionsArchitectAssociateBadge}
        alt="AWS Certified Solutions Architect Associate Badge"
        priority
      />
      <CertificationBadge
        src={awsCloudPractitionerBadge}
        alt="AWS Certified Cloud Practitioner Badge"
        priority
      />
    </Grid>
  </React.Fragment>
);

const CertificationBadge = ({
  children,
  ...props
}: ImageProps & React.PropsWithChildren): React.JSX.Element => {
  if (children === undefined) {
    return (
      <Image
        {...props}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    );
  }

  return (
    <Flex position="relative">
      <Image
        {...props}
        priority={props.priority ?? true}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
          filter: "blur(3px) grayscale(80%)",
        }}
      />
      <Badge
        variant="solid"
        color="amber"
        radius="full"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(110%)",
        }}
      >
        {children}
      </Badge>
    </Flex>
  );
};
