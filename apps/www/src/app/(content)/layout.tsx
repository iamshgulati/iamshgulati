import { Box, Container, Section, Separator } from "@radix-ui/themes";

import { CommandMenu } from "~/components/command-menu";
import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { MainNav } from "~/components/main-nav";
import { MobileMenu } from "~/components/mobile-menu";
import { AllAppRoutes } from "~/lib/appRoutes";
import { AllContentRoutes } from "~/lib/contentRoutes";

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

      <MobileMenu
        productLinkRoutes={[
          AllAppRoutes.home,
          AllAppRoutes.professional,
          AllAppRoutes.personal,
        ]}
        mobileNavRoutes={[
          AllAppRoutes.home,
          AllAppRoutes.professional,
          AllAppRoutes.personal,
          AllAppRoutes.social,
          AllAppRoutes.legal,
        ]}
      />

      <Layout.Header>
        <Header
          sticky
          ghost
          productLinkRoutes={[
            AllAppRoutes.home,
            AllAppRoutes.professional,
            AllAppRoutes.personal,
          ]}
          commandMenu={
            <CommandMenu
              allAppRoutes={AllAppRoutes}
              allContentRoutes={AllContentRoutes}
            />
          }
        >
          <MainNav mainNavPages={AllAppRoutes.home.pages} />
        </Header>
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
            <Footer allAppRoutes={AllAppRoutes} />
          </Section>
        </Container>
      </Layout.Footer>
    </Layout.Root>
  );
}
