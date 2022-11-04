import { Container } from "@chakra-ui/react";
import Header from "components/Header/Header";

import { FCC } from "types/react";

interface LayoutProps {
  menu: any;
  settings?: any;
}

const Layout: FCC = ({ menu, settings, children }) => {
  return (
    <>
      <Header items={menu} />
      <Container display="flex" flexDir={"column"} flex={1} maxW={"6xl"}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
