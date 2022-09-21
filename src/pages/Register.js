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
import RegisterForm from "../components/Form/RegisterForm";

export default function Register() {
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
          <Text>Silahkan daftar terlebih dahulu</Text>
        </Box>
        <RegisterForm />
        <Divider my="xs" label="sudah punya akun?" labelPosition="center" />
        <Button variant="outline" fullWidth component={Link} to="/login">
          Masuk
        </Button>
      </Stack>
    </Container>
  );
}
