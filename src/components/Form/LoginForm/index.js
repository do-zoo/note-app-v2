import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useContext, useState } from "react";
import LocaleContext from "../../../contexts/LocaleContext";
import { login } from "../../../services/api/auth";
import {
  emailValidation,
  passwordValidation,
  putAccessToken,
} from "../../../utils";

const LoginForm = () => {
  const { locale } = useContext(LocaleContext);

  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(!isLoading);
    const { isValid: isPasswordValid, message: passwordValidationMessage } =
      passwordValidation(password);
    const { isValid: isEmailValid, message: emailValidationMessage } =
      emailValidation(email);

    if (!isEmailValid || !isPasswordValid) {
      if (!isPasswordValid) {
        setErrorPassword(passwordValidationMessage);
      }

      if (!isEmailValid) {
        setErrorEmail(emailValidationMessage);
      }
      setIsLoading(false);
    } else {
      login({ email, password }).then((response) => {
        if (response.status === "success") {
          putAccessToken(response.data.accessToken);
          window.location = "/";
        } else {
          setErrorLogin(response.message);
          setIsLoading(false);
        }
      });
    }
  };

  return (
    <Box>
      <form onSubmit={onSubmit}>
        <Stack>
          <TextInput
            placeholder={locale === "id" ? "Masukan email" : "Input email"}
            label="Email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorLogin("");
              setErrorEmail("");
            }}
            value={email}
            {...(errorEmail && {
              error: errorEmail[locale],
            })}
            withAsterisk
          />
          <PasswordInput
            placeholder={
              locale === "id" ? "Masukan kata sandi" : "Input password"
            }
            label={locale === "id" ? "Kata sandi" : "Password"}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorLogin("");
              setErrorPassword("");
            }}
            value={password}
            {...(errorPassword && {
              error: errorPassword[locale],
            })}
            withAsterisk
          />
          {/* error global */}
          {errorLogin && (
            <Text size="xs" color="red" align="center">
              {locale === "id"
                ? "Email atau password salah"
                : "Email or password is wrong"}
            </Text>
          )}
          <Button
            loading={isLoading}
            mt={errorLogin ? 0 : "sm"}
            fullWidth
            type="submit"
          >
            {isLoading ? "Sedang Memuat" : locale === "id" ? "Masuk" : "Login"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default LoginForm;
