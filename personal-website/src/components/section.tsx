import { ScaleFade } from "@chakra-ui/react";

const Section = ({ children }) => (
  <ScaleFade initialScale={0.5} delay={0.2} in>
    {children}
  </ScaleFade>
);

export default Section;
