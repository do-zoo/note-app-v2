import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";

const RegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    console.log(name, email, password, confirmPassword);
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Stack>
          <TextInput
            placeholder="Masukan nama"
            label="name"
            name="name"
            value={name}
            withAsterisk
            onChange={(e) => setName(e.target.value)}
          />
          <TextInput
            placeholder="Masukan email"
            label="email"
            name="email"
            type={"email"}
            value={email}
            withAsterisk
            onChange={(e) => setEmail(e.target.value)}
          />
          <PasswordInput
            placeholder="Masukan password"
            label="password"
            name="password"
            value={password}
            withAsterisk
            onChange={(e) => setPassword(e.target.value)}
          />
          <PasswordInput
            placeholder="Masukan ulang password"
            label="konfirmasi password"
            name="password_confirmation"
            value={confirmPassword}
            withAsterisk
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button loading={isLoading} mt="sm" fullWidth type="submit">
            {isLoading ? "Sedang Memuat" : "Daftar"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
