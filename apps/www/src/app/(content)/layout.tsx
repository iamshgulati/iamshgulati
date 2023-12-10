import { Box, Container, Section } from "@radix-ui/themes";

import { Breadcrumbs } from "~/components/breadcrumbs";
import { Layout } from "~/components/layout";

export default function ContentLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <Layout.Content>
      <Box asChild width="100%" style={{ maxWidth: 858 }}>
        <Section size={{ initial: "2", xs: "3" }}>
          <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
            <Breadcrumbs omitCurrentLabel />
            {children}
          </Container>
        </Section>
      </Box>
    </Layout.Content>
  );
}
