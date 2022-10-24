import { Container } from "@chakra-ui/react";
import Header from "components/Header/Header";
import { AnimatePresence } from "framer-motion";

import { FCC } from "types/react";

const Layout: FCC = ({ children }) => {
  return (
    <Container display="flex" flexDir={"column"} flex={1} maxW={"6xl"}>
      {children}
    </Container>
  );
};

export default Layout;
