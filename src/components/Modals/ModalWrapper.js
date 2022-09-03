import { Modal } from "@mantine/core";
import React from "react";

export default function ModalWrapper({ children, isOpen, title }) {
  return (
    <Modal
      opened={isOpen}
      title={title ?? ""}
      styles={(theme) => ({
        modal: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors["primary"][5]
              : theme.colors["primary"][4],
        },
      })}
    >
      {children}
    </Modal>
  );
}
