import { ApolloProvider } from "@apollo/client";
import { ChakraProvider, Box, BoxProps } from "@chakra-ui/react";
import Header from "components/Header/Header";
import Layout from "components/Layout/Layout";
import { AnimatePresence, motion } from "framer-motion";
import { client } from "lib/helpers";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import topaz from "theme";

const MotionBox = motion<Omit<BoxProps, "transition">>(Box);

function MyApp({ Component, pageProps, router }: AppProps) {
  const items = [
    { label: "home", url: "/" },
    { label: "about", url: "/about" },
    { label: "contact", url: "/contact" },
  ];
  useEffect(() => {
    window.history.scrollRestoration = "manual";
  }, []);

  const handleExitComplete = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  // useEffect(() => {
  //   const handleRouteChange = (url) => {
  //     gtag.pageview(url);
  //   };
  //   router.events.on("routeChangeComplete", handleRouteChange);
  //   return () => {
  //     router.events.off("routeChangeComplete", handleRouteChange);
  //   };
  // }, [router.events]);

  const spring = {
    duration: 0.3,
  };
  return (
    <ChakraProvider theme={topaz}>
      <ApolloProvider client={client}>
        <Header items={items} />

        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          <MotionBox
            as={motion.div}
            transition={spring}
            key={router.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            maxW={"full"}
            p={0}
            h={"full"}
            flex={1}
            display="flex"
            flexDir={"column"}
          >
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </MotionBox>
        </AnimatePresence>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
