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

const BodyInput = ({ onChange, defaultValue }) => {
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
      dangerouslySetInnerHTML={{ __html: defaultValue }}
      onInput={onChange}
    />
  );
};

BodyInput.propTypes = {
  onChange: PropTypes.func,
  defaultValue: PropTypes.string,
};

export { TitleInput, BodyInput };
