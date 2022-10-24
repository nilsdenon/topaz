import {
  Box,
  Link as ChakraLink,
  LinkProps,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface NavLinkProps extends LinkProps {
  children?: string | React.ReactNode;
  to: string;
  label?: string;
  activeProps?: LinkProps;
  _hover?: LinkProps;
  layoutId?: string;
}

function NavLink({
  to,
  activeProps,
  label,
  children,
  _hover,

  ...props
}: NavLinkProps) {
  const router = useRouter();
  const isActive = router.pathname === to;
  const color = useColorModeValue("white", "black");
  const colorInverted = useColorModeValue("black", "white");
  const bg = useColorModeValue("blackAlpha.900", "whiteAlpha.900");

  return (
    <Link href={to}>
      <ChakraLink
        as={motion.a}
        py={2}
        px={4}
        borderRadius="full"
        {...props}
        transition="all .3s ease-out"
        _hover={{
          color: "inherit",
          bg: isActive ? "btn-bg-active-hover" : "btn-bg-hover",
        }}
        position="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Box zIndex={10} key="text" color={isActive ? color : "inherit"}>
          {children}
        </Box>
        {isActive && (
          <Box
            as={motion.span}
            position="absolute"
            top={0}
            bottom={0}
            left={0}
            right={0}
            bg={bg}
            borderRadius="full"
            zIndex={-1}
            display="block"
            layout
            layoutId="highlight"
            key="highlight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </ChakraLink>
    </Link>
  );
}

export default NavLink;
