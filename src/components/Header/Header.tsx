import {
  Box,
  Flex,
  Icon,
  IconButton,
  Link,
  Stack,
  Text,
  useBreakpointValue,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
} from "@chakra-ui/react";
import Logo from "components/Logo";
import NextLink from "next/link";
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";

import { FaMoon, FaSun } from "react-icons/fa";
import { FCC } from "types/react";
import NavLink from "./NavLink";

const Branding = () => {
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

type Props = {
  items?: any;
};

const Navigation = ({ items }: Props) => {
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
      {items?.map((item: { url: any; label: any }, idx: number) => (
        <NavLink key={idx} to={item.url} layoutId={item.label}>
          {item.label}
        </NavLink>
      ))}

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
