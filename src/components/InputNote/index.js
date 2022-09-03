import React from "react";
import PropTypes from "prop-types";
import { Box } from "@mantine/core";
import RichTextEditor from "@mantine/rte";

const InputNote = ({ onChange }) => {
  return (
    <Box>
      <RichTextEditor
        placeholder="type here..."
        controls={[
          ["bold", "italic", "underline", "orderedList", "unorderedList"],
        ]}
        styles={() => ({
          root: {
            backgroundColor: "transparent",
            border: "transparent",
            // position: "relative",
            padding: 0,
            marginBottom: "28px",
            "& .ql-editor ": {
              paddingLeft: 0,
              paddingTop: 0,
              paddingRight: 0,
              minHeight: "300px",
              "&:before": {
                left: 0,
                right: 0,
              },
            },
          },
          toolbar: {
            width: "100%",
            padding: 0,
            backgroundColor: "transparent",
            border: "transparent",
            marginBottom: "24px",
          },
          toolbarInner: {
            width: "100%",
            margin: 0,
          },
          toolbarGroup: {
            gap: "12px",
            // justifyContent: "space-around",
            width: "100%",
            display: "flex",
            margin: 0,
          },
        })}
        onChange={(value) => console.log(value)}
      />
    </Box>
  );
};

InputNote.propTypes = {
  onChange: PropTypes.func,
};

export default InputNote;
