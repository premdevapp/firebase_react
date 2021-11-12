import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container maxW="container.lg">{children}</Container>
    </>
  );
};

export default Layout;
