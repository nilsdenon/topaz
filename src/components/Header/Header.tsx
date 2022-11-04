import {
  Box,
  Flex,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";

import Logo from "components/Logo";
import { motion } from "framer-motion";
import NextLink from "next/link";

import client from "lib/client";
import type { GetStaticProps } from "next";
import { GET_MENUS } from "queries/getMenus";
import { FaMoon, FaSun } from "react-icons/fa";
import { FCC } from "types/react";
import NavLink from "./NavLink";

const Branding = (settings: string) => {
  const [isDesktop] = useMediaQuery("(min-width: 768px)");
  return (
    <Stack direction={"row"} alignItems="center">
      <NextLink href={"/"}>
        <Link
          textDecoration="none !important"
          display={"flex"}
          alignItems="center"
          gap={3}
        >
          <Box position={"relative"} top="5px">
            <Logo fill={"currentColor"} />
          </Box>
          {isDesktop && <Text>Damien Pierre Webfolio</Text>}
        </Link>
      </NextLink>
    </Stack>
  );
};

interface Props {
  items?: any;
}

const Navigation = ({ items }: Props) => {
  console.log("items", items);

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("blackAlpha.100", "whiteAlpha.100");

  return (
    <Stack
      p={2}
      as={motion.div}
      layout
      borderRadius="full"
      bg={bg}
      direction={"row"}
      alignItems="center"
    >
      {items?.map(
        (item: {
          [x: string]: any;
          path: any;
          url: string;
          label: any;
          id: number;
        }) => (
          // <NavLink key={item.id} to={item?.path} layoutId={item.label}>
          //   <a>{item?.label}</a>
          // </NavLink>
          <NavLink
            key={item?.node?.id}
            to={item?.node?.path}
            layoutId={item?.node?.id}
          >
            <a>{item?.node?.label}</a>
          </NavLink>
        )
      )}

      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label={"Color mode toggle"}
      >
        <Icon
          display="flex"
          justifyContent={"center"}
          alignItems="center"
          as={colorMode === "light" ? FaSun : FaMoon}
        />
      </IconButton>
    </Stack>
  );
};

const Header: FCC = ({ items }: Props) => {
  //console.log("dataFromHeader", data);

  return (
    <Flex
      as="header"
      justifyContent={"space-between"}
      alignItems="center"
      p={{ base: 4, md: 6 }}
      minH={"40px"}
    >
      <Branding />

      <Navigation items={items} />
    </Flex>
  );
};

export default Header;

// export const getStaticProps: GetStaticProps = async () => {
//   // Query the homepage data.
//   const { data } = await client.query({
//     query: GET_MENUS,
//     //variables: { slug: "homepage" },
//   });

//   // Pass data to the page via props.
//   return {
//     props: {
//       data,
//     },
//     revalidate: 60,
//   };
// };
