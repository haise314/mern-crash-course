import {
  Container,
  Flex,
  Text,
  HStack,
  Button,
  useColorMode,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { BiBookAdd } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { MdDarkMode } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW="1140px" px="4">
      <Flex
        h={16}
        alignItems="center"
        justifyContent="space-between"
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          textTransform="uppercase"
          bgGradient="linear(to-r, cyan.400, blue.500)"
          bgClip="text"
          fontWeight="bold"
          bgAlign="center"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing="2" alignItems="center">
          <Link to="/create">
            <Button>
              <BiBookAdd fontSize="20" />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoSunnyOutline /> : <MdDarkMode />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
