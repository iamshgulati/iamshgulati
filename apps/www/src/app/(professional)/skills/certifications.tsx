import React from "react";
import type { ImageProps } from "next/image";
import Image from "next/image";
import { Badge, Flex, Grid } from "@radix-ui/themes";

import awsCloudPractitionerBadge from "~/assets/images/badges/aws-cloud-practitioner-badge.png";
import awsDeveloperAssociateBadge from "~/assets/images/badges/aws-developer-associate.png";
import awsSolutionsArchitectAssociateBadge from "~/assets/images/badges/aws-solutions-architect-associate-badge.png";

export const Certifications = (): React.JSX.Element => (
  <Grid align="center" columns={{ initial: "3", xs: "5" }} gap="5" pt="3">
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
