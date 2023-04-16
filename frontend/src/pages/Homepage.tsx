import React from "react";
import {
  Container,
  Box,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Homepage = () => {
  return (
    <Container maxW="xl" centerContent mt="8">
      <Box
        bg="rgba(31, 41, 55, 0.8)"
        rounded="lg"
        border="1px"
        borderColor="gray.700"
        p="6"
        mb="4"
        w="full"
      >
        <h1 className="text-white text-4xl font-semibold">Octo Meet</h1>
      </Box>
      <Box
        bg="rgba(31, 41, 55, 0.4)"
        rounded="lg"
        border="1px"
        borderColor="gray.700"
        p="6"
        mb="4"
        w="full"
      >
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="4">
            <Tab
              className="text-white rounded-lg border border-gray-700 p-2 m-2 w-full text-center transition-colors duration-300 hover:bg-gray-700 hover:border-gray-800 hover:text-gray-200"
              _focus={{ outline: "none", boxShadow: "outline" }}
            >
              Login
            </Tab>
            <Tab
              className="text-white rounded-lg border border-gray-700 p-2 m-2 w-full text-center transition-colors duration-300 hover:bg-gray-700 hover:border-gray-800 hover:text-gray-200"
              _focus={{ outline: "none", boxShadow: "outline" }}
            >
              Sign Up
            </Tab>
          </TabList>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
