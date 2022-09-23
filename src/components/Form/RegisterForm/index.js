import {
  Box,
  Button,
  PasswordInput,
  Stack,
  Text,
  TextInput,
} from "@mantine/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register } from "../../../services/auth";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
} from "../../../utils";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorRegister, setErrorRegister] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    const { isValid: isNameValid, message: nameValidationMessage } =
      nameValidation(name);

    const { isValid: isEmailValid, message: emailValidationMessage } =
      emailValidation(email);

    const { isValid: isPasswordValid, message: passwordValidationMessage } =
      passwordValidation(password, confirmPassword);

    if (isEmailValid && isPasswordValid && isNameValid) {
      register({ name, email, password }).then((response) => {
        if (response.status === "success") {
          login({ email, password }).then((response) => {
            if (response.status === "success") {
              console.log(response);
              localStorage.setItem("accessToken", response.data.accessToken);
              navigate("/");
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
    } else {
      if (!isEmailValid) {
        setErrorEmail(emailValidationMessage);
      }
      if (!isPasswordValid) {
        setErrorPassword(passwordValidationMessage);
      }
      if (!isNameValid) {
        setErrorName(nameValidationMessage);
      }
      setIsLoading(false);
    }
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
            onChange={(e) => {
              setName(e.target.value);
              setErrorName("");
              setErrorRegister("");
            }}
            {...(errorName && {
              error: errorName,
            })}
          />
          <TextInput
            placeholder="Masukan email"
            label="email"
            name="email"
            value={email}
            withAsterisk
            onChange={(e) => {
              setEmail(e.target.value);
              setErrorEmail("");
              setErrorRegister("");
            }}
            {...(errorEmail && {
              error: errorEmail,
            })}
          />
          <PasswordInput
            placeholder="Masukan password"
            label="password"
            name="password"
            value={password}
            withAsterisk
            onChange={(e) => {
              setPassword(e.target.value);
              setErrorPassword("");
              setErrorRegister("");
            }}
            {...(errorPassword && {
              error: errorPassword,
            })}
          />
          <PasswordInput
            placeholder="Masukan ulang password"
            label="konfirmasi password"
            name="password_confirmation"
            value={confirmPassword}
            withAsterisk
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setErrorPassword("");
              setErrorRegister("");
            }}
            {...(errorPassword && {
              error: errorPassword,
            })}
          />
          {errorRegister && (
            <Text size="xs" color="red" align="center">
              {errorRegister}
            </Text>
          )}
          <Button
            loading={isLoading}
            mt={errorRegister ? 0 : "sm"}
            fullWidth
            type="submit"
          >
            {isLoading ? "Sedang Memuat" : "Daftar"}
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default RegisterForm;
