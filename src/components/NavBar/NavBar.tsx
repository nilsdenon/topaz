import { Flex } from "@chakra-ui/react";

interface HeaderProps {
  menuItems: any;
}

const Header: React.FC<HeaderProps> = ({ menuItems }) => {
  return (
    <Flex as="nav">
      <Flex as="ul">
        {/* {menuItems.edges.map((item: any) => (
          <Flex as="li" key={item.node.path}>
            <a
              className="p-4 ml-2 text-white hover:underline"
              href={item.node.connectedNode.node.slug}
            >
              {item.node.label}
            </a>
          </Flex>
        ))} */}
      </Flex>
    </Flex>
  );
};

export default Header;
