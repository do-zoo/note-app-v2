import { Modal, Text } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import InputNote from "../InputNote";
import ModalWrapper from "./ModalWrapper";

export default function ModalCreateNote({ isOpen }) {
  return (
    <ModalWrapper isOpen={isOpen} title={"Create Note"}>
      <InputNote />
    </ModalWrapper>
  );
}
