import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { login } from "../../../services/auth";
import { emailValidation } from "../../../utils";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    const { isValid: isEmailValid, message: emailValidationMessage } =
      emailValidation(email);
    if (isEmailValid) {
      login({ email, password }).then((response) => {
        setIsLoading(false);
        if (response.status === "success") {
          localStorage.setItem("token", response.data.token);
          window.location.href = "/";
        } else {
          setErrorLogin(response.message);
          setIsLoading(false);
        }
      });
    } else {
      setErrorEmail(emailValidationMessage);
      setIsLoading(false);
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
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorLogin("");
              setErrorEmail("");
            }}
            value={email}
            {...(errorEmail && {
              error: errorEmail,
            })}
            withAsterisk
          />
          <PasswordInput
            placeholder="Masukan password"
            label="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorLogin("");
            }}
            value={password}
            withAsterisk
          />
          {/* error global */}
          {errorLogin && (
            <Text size="xs" color="red" align="center">
              {errorLogin}
            </Text>
          )}
          <Button
            loading={isLoading}
            mt={errorLogin ? 0 : "sm"}
            fullWidth
            type="submit"
          >
            {isLoading ? "Sedang Memuat" : "Masuk"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
