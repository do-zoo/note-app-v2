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
import RegisterForm from "../components/Form/RegisterForm";
import LocaleContext from "../contexts/LocaleContext";

export default function Register() {
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
              ? "Silahkan daftar untuk melanjutkan"
              : "Please register to continue"}
          </Text>
        </Box>
        <RegisterForm />
        <Divider
          my="xs"
          label={
            locale === "id" ? "sudah punya akun?" : "already have an account?"
          }
          labelPosition="center"
        />
        <Button variant="outline" fullWidth component={Link} to="/">
          {locale === "id" ? "Login sekarang" : "Login now"}
        </Button>
      </Stack>
    </Container>
  );
}
