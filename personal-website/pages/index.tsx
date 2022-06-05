import { Center, Container, Flex, VStack, Box } from "@chakra-ui/react";

import Navbar from "../src/components/navbar";

const IndexPage = () => (
  <Box>
    <Navbar />
    <Container maxW="container.xl" p={0}>
      <Flex h="100vh" py={20}>
        <Center>
          <VStack
            w="xl"
            h="full"
            p={10}
            spacing={10}
            alignItems="flex-start"
          ></VStack>
        </Center>
      </Flex>
    </Container>
  </Box>
);

export default IndexPage;
