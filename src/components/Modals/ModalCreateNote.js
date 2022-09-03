import { ActionIcon, Box, Space } from "@mantine/core";
import { TbCheck } from "react-icons/tb";
import { BodyInput, TitleInput } from "../Inputs";
import ModalWrapper from "./ModalWrapper";

export default function ModalCreateNote({ isOpen, onClose, onSubmit }) {
  return (
    <ModalWrapper isOpen={isOpen} title={"Create Note"} onClose={onClose}>
      <Box>
        <TitleInput
        // defaultValue={data.title ?? ""}
        // onChange={onInputTitle}
        />
        <Space h="sm"></Space>
        <BodyInput
        // dangerouslySetInnerHTML={{ __html: data.body ?? "" }}
        // ={data.body ?? ""}
        // onInput={onInputBody}
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
      >
        <TbCheck size={"1.5rem"} />
      </ActionIcon>
    </ModalWrapper>
  );
}
