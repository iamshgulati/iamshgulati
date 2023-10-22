import { Container, Section, Separator } from "@radix-ui/themes";

import { Footer } from "~/components/footer";
import { Header } from "~/components/header";
import { Layout } from "~/components/layout";

export default function MarketingLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <Layout.Root>
      <Layout.Background
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          height: 480,
          opacity: 0.6,
          background:
            "linear-gradient(to bottom, transparent, transparent, transparent)",
        }}
      />

      <Layout.Header>
        <Header sticky ghost />
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>

      <Layout.Footer>
        <Container mx={{ initial: "4", xs: "5", sm: "6", md: "9" }}>
          <Separator size="2" />
          <Section size={{ initial: "2", md: "3" }} pb="0">
            <Footer />
          </Section>
        </Container>
      </Layout.Footer>
    </Layout.Root>
  );
}
