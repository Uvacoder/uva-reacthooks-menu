import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Flex, Text } from "@chakra-ui/react";
export default function Example({}) {
  return (
    <Flex>
      <Sidebar />
      <Flex display="-ms-grid" textAlign="center" mt="5%">
        <Text fontSize="50px">Home</Text>
        <Text margin="auto" width="40%">
          This is Home.
        </Text>
      </Flex>
    </Flex>
  );
}
