import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/Form/LoginForm";
import LocaleContext from "../contexts/LocaleContext";

export default function Login() {
  const { locale } = useContext(LocaleContext);
  return (
    <Container size={"xs"} py="xl">
      <Stack py={"xl"} spacing="xl">
        <Box
          sx={{
            textAlign: "center",
          }}
        >
          <Title order={3} mb="sm">
            {locale === "id"
              ? "Selamat datang di Note App"
              : "Welcome to Note App"}
          </Title>
          <Text>
            {locale === "id"
              ? "Silahkan login untuk melanjutkan"
              : "Please login to continue"}
          </Text>
        </Box>
        <LoginForm />
        <Divider
          my="xs"
          label={
            locale === "id" ? "belum punya akun?" : "don't have an account?"
          }
          labelPosition="center"
        />
        <Button variant="outline" fullWidth component={Link} to="/register">
          {locale === "id" ? "Daftar sekarang" : "Register now"}
        </Button>
      </Stack>
    </Container>
  );
}
