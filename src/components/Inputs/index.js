import { Text } from "@mantine/core";
import PropTypes from "prop-types";
import React, { useContext } from "react";
import LocaleContext from "../../contexts/LocaleContext";
import useStyles from "./styles";

const TitleInput = ({ onChange, value }) => {
  const { locale } = useContext(LocaleContext);
  const { classes } = useStyles();
  return (
    <input
      spellCheck="false"
      type={"text"}
      contentEditable="true"
      className={classes.inputTitle}
      placeholder={
        locale === "id" ? "Masukan judul disini..." : "Input title here..."
      }
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
  const { locale } = useContext(LocaleContext);
  const { classes } = useStyles();
  return (
    <Text
      spellCheck="false"
      role="textbox"
      contentEditable="true"
      className={classes.inputBody}
      placeholder={
        locale === "id" ? "Masukan catatan disini..." : "Input note here..."
      }
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
