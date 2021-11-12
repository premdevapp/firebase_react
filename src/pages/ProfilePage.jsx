import { Badge, Code, Container, Heading } from "@chakra-ui/react";

import Layout from "../components/Layout";
import Card from "../components/Card";

const ProfilePage = () => {
  return (
    <Layout>
      <Heading>
        Profile page
        <Badge colorScheme="green" fontSize="lg" mx={4}>
          Protected Page
        </Badge>
      </Heading>

      <Container maxW="container.lg" overflowX="auto" py={4}></Container>
    </Layout>
  );
};

export default ProfilePage;
