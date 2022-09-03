import { Text } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import useStyles from "./styles";

const TitleInput = ({ onChange, value }) => {
  const { classes } = useStyles();
  return (
    <input
      spellCheck="false"
      type={"text"}
      contentEditable="true"
      className={classes.inputTitle}
      placeholder={"input title here..."}
      defaultValue={value ?? ""}
      onChange={onChange}
    />
  );
};
TitleInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

const BodyInput = ({ onChange, value }) => {
  const { classes } = useStyles();
  return (
    <Text
      spellCheck="false"
      role="textbox"
      contentEditable="true"
      className={classes.inputBody}
      style={{
        minHeight: "300px",
        overflowY: "auto",
      }}
      dangerouslySetInnerHTML={{ __html: value ?? "" }}
      onInput={onChange}
    />
  );
};

BodyInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export { TitleInput, BodyInput };
