import { Stack, Text } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { TbNotesOff } from "react-icons/tb";

const NoItem = ({ text, icon = <TbNotesOff size={"3rem"} /> }) => {
  return (
    <Stack
      align={"center"}
      sx={{
        marginTop: "2rem",
      }}
    >
      {icon}
      <Text>{text}</Text>
    </Stack>
  );
};
NoItem.propTypes = {
  text: PropTypes.string,
  icon: PropTypes.element,
};

export default NoItem;
