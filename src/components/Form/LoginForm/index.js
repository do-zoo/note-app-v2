import { Box, Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { isEmail } from "../../../utils";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    if (isEmail(email)) {
      console.log(email, password);
    } else {
      alert("Email tidak valid");
    }
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Stack>
          <TextInput
            placeholder="Masukan email"
            label="email"
            name="email"
            type={"email"}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            withAsterisk
          />
          <PasswordInput
            placeholder="Masukan password"
            label="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            withAsterisk
          />
          <Button loading={isLoading} mt="sm" fullWidth type="submit">
            {isLoading ? "Sedang Memuat" : "Masuk"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
