import { Box, Container, Section, Separator } from "@radix-ui/themes";

import { CommandMenu } from "~/components/command-menu";
import { Footer } from "~/components/footer";
import { Layout } from "~/components/layout";
import { MarketingHeader } from "~/components/marketing-header";
import { MarketingMobileMenu } from "~/components/marketing-mobile-menu";
import { AllFrontmatter } from "~/lib/mdx-frontmatter";

export default function ContentLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <Layout.Root>
      <Layout.Background
        style={{
          zIndex: -1,
          position: "absolute",
          left: 0,
          right: 0,
          height: 480,
          opacity: 0.6,
          background:
            "linear-gradient(to bottom, transparent, transparent, transparent)",
        }}
      />

      <MarketingMobileMenu />

      <Layout.Header>
        <MarketingHeader
          sticky
          ghost
          commandMenu={<CommandMenu frontmatter={AllFrontmatter} />}
        />
      </Layout.Header>

      <Layout.Main>
        <Layout.Content>
          <Box asChild width="100%" style={{ maxWidth: 858 }}>
            <Section size={{ initial: "2", xs: "3" }}>
              <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
                {children}
              </Container>
            </Section>
          </Box>
        </Layout.Content>
      </Layout.Main>

      <Layout.Footer>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Separator size="2" />
          <Section size="2" pb="0">
            <Footer />
          </Section>
        </Container>
      </Layout.Footer>
    </Layout.Root>
  );
}
