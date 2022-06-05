import { Box, Container, Flex, Heading, HStack, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Box position="fixed" as="nav" w="full" bg="#202023">
      <Container display="flex" p={2} maxW="container.md" centerContent>
        <Flex align="center" mr={2}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            Noah Aalders
          </Heading>
        </Flex>
        <HStack alignItems="center">
          <Link href="/projects">Projects</Link>
          <Link href="/about-me">About Me</Link>
        </HStack>
      </Container>
    </Box>
  );
};

export default Navbar;
