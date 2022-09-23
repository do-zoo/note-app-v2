import { Button, Center, Group, Modal, Stack, Text } from "@mantine/core";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import { TiDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";
import { deleteNote } from "../../services/api/notes";

function ModalDelete({ isOpen, onClose, id, handleReFetch }) {
  const { locale } = useContext(LocaleContext);
  let navigate = useNavigate();
  const handleDeleteNote = (id) => {
    deleteNote(id).then(() => {
      navigate("/", { replace: true });
      handleReFetch();
      onClose();
    });
  };
  return (
    <Modal opened={isOpen} withCloseButton={false} onClose={onClose} centered>
      <Stack py={"sm"} px="md">
        <Center>
          <TiDelete size={"3rem"} color="red" />
        </Center>
        <Text align="center">
          {locale === "id"
            ? "Apakah anda yakin ingin menghapus catatan ini?"
            : "Are you sure you want to delete this note?"}
        </Text>
        <Group position="center">
          <Button onClick={onClose} color="blue">
            {locale === "id" ? "Tidak" : "No"}
          </Button>
          <Button
            color={"red"}
            onClick={() => {
              handleDeleteNote(id);
            }}
          >
            {locale === "id" ? "Ya" : "Yes"}
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
}

ModalDelete.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  handleReFetch: PropTypes.func.isRequired,
};

export default ModalDelete;
