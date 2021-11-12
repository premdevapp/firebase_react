import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Card from "../components/Card";
import Layout from "../components/Layout";


const ResetPassword = () => {
  return (
    <Layout>
      <Heading textAlign="center" my={12}>
        Reset password
      </Heading>
      <Card maxW="md" mx="auto" mt={4}>
        <chakra.form
          onSubmit={async (e) => {
            e.preventDefault();
            // handle reset password
          }}
        >
          <Stack spacing="6">
            <FormControl id="password">
              <FormLabel>New password</FormLabel>
              <Input type="password" autoComplete="password" required />
            </FormControl>
            <Button type="submit" colorScheme="primary" size="lg" fontSize="md">
              Reset password
            </Button>
          </Stack>
        </chakra.form>
      </Card>
    </Layout>
  );
};

export default ResetPassword;
