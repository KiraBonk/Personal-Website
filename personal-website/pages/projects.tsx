import { Box, Text, Container, VStack, Heading, Flex } from "@chakra-ui/react";

const projectsPage = () => (
  <Box>
    <Container maxW="container.md" p={0} centerContent>
      <Flex h="100vh" py={20}>
        <VStack w="xl" h="full" p={10} spacing={10} alignItems="flex-start">
          <Heading>Project Test</Heading>
          <Text>Test 1</Text>
          <Text>Test 2</Text>
          <Text>Test 3</Text>
        </VStack>
      </Flex>
    </Container>
  </Box>
);

export default projectsPage;
