import Navbar from "../navbar";
import Head from "next/head";
import { Box } from "@chakra-ui/react";

const Main = ({ children }) => {
  return (
    <Box as="main">
      <Head>
        <title>KiraBonk</title>
      </Head>

      <Navbar />

      {children}
    </Box>
  );
};

export default Main;
