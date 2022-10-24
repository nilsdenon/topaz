import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { FCC } from "types/react";

interface NavItemProps {
  url?: any;
}

const NavItem: FCC = ({ url }: NavItemProps, children) => {
  return (
    <NextLink href={url} passHref>
      <Link>{children}</Link>
    </NextLink>
  );
};
export default NavItem;
