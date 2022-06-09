import {
  Center,
  Container,
  Flex,
  VStack,
  Box,
  Heading,
  Text,
} from "@chakra-ui/react";

import Section from "../src/components/section";

const IndexPage = () => (
  <Box>
    <Container maxW="container.md" p={0} centerContent>
      <Flex h="100vh" py={20}>
        <Center>
          <VStack w="xl" h="full" p={10} spacing={10} alignItems="flex-start">
            <Section>
              <Heading>test</Heading>
              <Text>1</Text>
              <Text>2</Text>
              <Text>3</Text>
            </Section>
          </VStack>
        </Center>
      </Flex>
    </Container>
  </Box>
);

export default IndexPage;
