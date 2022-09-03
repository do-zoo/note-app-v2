import { ActionIcon, Box, Space, Text } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { TbCheck } from "react-icons/tb";
import { BodyInput, TitleInput } from "../Inputs";
import ModalWrapper from "./ModalWrapper";

export default function ModalCreateNote({ isOpen, onClose, onSubmit }) {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");
  const [error, setError] = React.useState(false);
  const handleSubmit = () => {
    if (title.trim() === "" || body.trim() === "") {
      setError(true);
      return;
    }

    onSubmit({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <ModalWrapper isOpen={isOpen} title={"Create Note"} onClose={onClose}>
      <Box>
        <TitleInput
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Space h="sm"></Space>
        <BodyInput
          onChange={(e) => {
            setBody(e.target.textContent);
          }}
        />
      </Box>
      <ActionIcon
        style={{
          position: "absolute",
          bottom: "1rem",
          right: "1rem",
          width: "2.5rem",
          height: "2.5rem",
        }}
        color="tertiary"
        variant="filled"
        onClick={handleSubmit}
      >
        <TbCheck size={"1.5rem"} />
      </ActionIcon>
      {error && <Text color="danger">oops... Input Tidak Boleh Kosong.</Text>}
    </ModalWrapper>
  );
}

ModalCreateNote.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};
