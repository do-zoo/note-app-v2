import { Modal } from "@mantine/core";
import React from "react";
import PropTypes from "prop-types";

export default function ModalWrapper({ children, isOpen, title, onClose }) {
  return (
    <Modal
      opened={isOpen}
      onClose={onClose}
      title={title ?? ""}
      styles={(theme) => ({
        modal: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors["primary"][5]
              : theme.colors["primary"][4],
          color: theme.colors["tertiary"][8],
        },
        title: {
          fontSize: theme.fontSizes.lg,
          fontWeight: 600,
        },
        close: {
          color: theme.colors["tertiary"][8],
        },
      })}
      lockScroll
      overflow="inside"
    >
      {children}
    </Modal>
  );
}

ModalWrapper.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  title: PropTypes.string,
  onClose: PropTypes.func,
};
