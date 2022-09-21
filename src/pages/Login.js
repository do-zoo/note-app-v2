import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";

export default function Login() {
  return (
    <Container size={"xs"} py="xl">
      <Stack py={"xl"} spacing="xl">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Title order={3} mb="sm">
            Selamat datang di Note App
          </Title>
          <Text>Silahkan login terlebih dahulu</Text>
        </Box>
        <LoginForm />
        <Divider my="xs" label="belum punya akun?" labelPosition="center" />
        <Button variant="outline" fullWidth component={Link} to="/register">
          Daftar Akun
        </Button>
      </Stack>
    </Container>
  );
}
