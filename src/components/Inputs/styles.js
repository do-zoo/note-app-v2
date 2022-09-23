import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  inputTitle: {
    width: "100%",
    fontSize: "1.2rem",
    fontWeight: 600,
    backgroundColor: "transparent",
    border: "none",
    "&:focus": {
      outline: "none",
    },
  },
  inputBody: {
    minHeight: "300px",
    overflowY: "auto",
    "&:focus": {
      outline: "none",
    },
    "&:empty:before": {
      content: "attr(placeholder)",
      color: theme.colors["tertiary"][3],
    },
  },
}));

export default useStyles;
