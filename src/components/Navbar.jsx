import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React from "react";

function Navbar() {
  return (
    <Flex as="nav" p="10px" mb="40px" align="center">
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="10px">
        <Box bg="gray.200" p="10px" borderRadius="md" ml="auto">
          M
        </Box>
        <Text>mario@netninja.dev</Text>
        <Button colorScheme="purple">Log Out</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
