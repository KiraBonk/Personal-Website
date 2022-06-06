import {
  Box,
  IconButton,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MoonIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  return (
    <Box position="fixed" as="nav" w="full" bg="#202023">
      <Container display="flex" p={2} maxW="container.md">
        <Container>
          <Flex alignItems="center" mr={2}>
            <Heading as="h1" size="lg" letterSpacing={"tighter"}>
              <Link as={NextLink} href="/">
                Noah Aalders
              </Link>
            </Heading>
          </Flex>
          <HStack alignItems="center" pl={5}>
            <Link as={NextLink} href="/projects">
              Projects
            </Link>
            <Link as={NextLink} href="/about-me">
              About Me
            </Link>
          </HStack>
        </Container>
        <Container>
          <Box flex={1} align="right" pt={3}>
            <IconButton
              aria-label="Change Theme"
              icon={<MoonIcon />}
              colorScheme="purple"
              size="sm"
            />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Navbar;
