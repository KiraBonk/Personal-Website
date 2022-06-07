import {
  Box,
  IconButton,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  const { toggleColorMode } = useColorMode();
  const bgColour = useColorModeValue("#ADD8E6", "#7997A1");
  const iconSymbol = useColorModeValue(<MoonIcon />, <SunIcon />);
  const iconColorScheme = useColorModeValue("pink", "yellow");
  return (
    <Box position="fixed" as="nav" w="full" bg={bgColour}>
      <Container display="flex" p={2} maxW="container.md">
        <Container>
          <Flex alignItems="center" mr={2}>
            <Heading
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "8%",
              }}
              as="h1"
              size="lg"
              letterSpacing={"tighter"}
            >
              <Link as={NextLink} href="/">
                Noah Aalders
              </Link>
            </Heading>
          </Flex>
          <HStack alignItems="center" pl={5}>
            <Text
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "8%",
              }}
            >
              <Link as={NextLink} href="/projects">
                Projects
              </Link>
            </Text>
            <Text
              _hover={{
                textDecoration: "underline",
                textDecorationThickness: "8%",
              }}
            >
              <Link as={NextLink} href="/about-me">
                About Me
              </Link>
            </Text>
          </HStack>
        </Container>
        <Container>
          <Box flex={1} align="right" pt={3}>
            <IconButton
              onClick={toggleColorMode}
              aria-label="Change Theme"
              icon={iconSymbol}
              colorScheme={iconColorScheme}
              size="sm"
            />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Navbar;
