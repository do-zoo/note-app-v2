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
import { login, register } from "../../../services/api/auth";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  putAccessToken,
} from "../../../utils";

const RegisterForm = () => {
  const { locale } = useContext(LocaleContext);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorPasswordConfirmation, setErrorPasswordConfirmation] =
    useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { isValid: isNameValid, message: nameValidationMessage } =
      nameValidation(name);

    const { isValid: isEmailValid, message: emailValidationMessage } =
      emailValidation(email);

    const { isValid: isPasswordValid, message: passwordValidationMessage } =
      passwordValidation(password);
    const {
      isValid: isPasswordConfirmationValid,
      message: passwordConfirmationValidationMessage,
    } = passwordValidation(confirmPassword);

    if (
      !isEmailValid ||
      !isPasswordValid ||
      !isNameValid ||
      !isPasswordConfirmationValid
    ) {
      if (!isEmailValid) {
        setErrorEmail(emailValidationMessage);
      }
      if (!isPasswordValid) {
        setErrorPassword(passwordValidationMessage);
      }
      if (!isPasswordConfirmationValid) {
        setErrorPasswordConfirmation(passwordConfirmationValidationMessage);
      } else if (password !== confirmPassword) {
        setErrorPasswordConfirmation({
          id: "password tidak sama",
          en: "password are not the same",
        });
      }
      if (!isNameValid) {
        setErrorName(nameValidationMessage);
      }
      setIsLoading(false);
    } else {
      register({ name, email, password }).then((response) => {
        if (response.status === "success") {
          login({ email, password }).then((response) => {
            if (response.status === "success") {
              putAccessToken(response.data.accessToken);
              window.location = "/";
            } else {
              setErrorRegister(response.message);
              setIsLoading(false);
            }
          });
        } else {
          setErrorRegister(response.message);
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
            placeholder={locale === "id" ? "Masukan nama" : "Input name"}
            label={locale === "id" ? "Nama" : "Name"}
            name="name"
            value={name}
            withAsterisk
            onChange={(e) => {
              setName(e.target.value);
              setErrorName("");
              setErrorRegister("");
            }}
            {...(errorName && {
              error: errorName[locale],
            })}
          />
          <TextInput
            placeholder={locale === "id" ? "Masukan email" : "Input email"}
            label="Email"
            name="email"
            value={email}
            withAsterisk
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail("");
              setErrorRegister("");
            }}
            {...(errorEmail && {
              error: errorEmail[locale],
            })}
          />
          <PasswordInput
            placeholder={
              locale === "id" ? "Masukan kata sandi" : "Input password"
            }
            label={locale === "id" ? "Kata sandi" : "Password"}
            name="password"
            value={password}
            withAsterisk
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
              setErrorRegister("");
            }}
            {...(errorPassword && {
              error: errorPassword[locale],
            })}
          />
          <PasswordInput
            placeholder={
              locale === "id" ? "Masukan ulang kata sandi" : "Re-enter password"
            }
            label={
              locale === "id" ? "Konfirmasi kata sandi" : "Confirm password"
            }
            name="password_confirmation"
            value={confirmPassword}
            withAsterisk
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorPasswordConfirmation("");
              setErrorRegister("");
            }}
            {...(errorPasswordConfirmation && {
              error: errorPasswordConfirmation[locale],
            })}
          />
          {errorRegister && (
            <Text size="xs" color="red" align="center">
              {locale === "id"
                ? "Email sudah terdaftar, silahkan gunakan email lain"
                : "Email already use"}
            </Text>
          )}
          <Button
            loading={isLoading}
            mt={errorRegister ? 0 : "sm"}
            fullWidth
            type="submit"
          >
            {isLoading
              ? "Sedang Memuat"
              : locale === "id"
              ? "Daftar"
              : "Register"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
