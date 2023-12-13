import React from "react";

import { Header } from "~/components/header";
import { Layout } from "~/components/layout";
import { allRoutes } from "~/lib/routes";

export default function HomeLayout({
  children,
}: React.PropsWithChildren): React.JSX.Element {
  return (
    <React.Fragment>
      <Layout.Header>
        <Header
          sticky
          ghost
          backdrop
          productLinkRoute={allRoutes.productLinks}
          commandMenuRoutes={[
            allRoutes.projects,
            allRoutes.blog,
            allRoutes.social,
          ]}
        />
      </Layout.Header>

      <Layout.Main>{children}</Layout.Main>
    </React.Fragment>
  );
}
