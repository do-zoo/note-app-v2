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
    "&:focus": {
      outline: "none",
    },
    "&:empty:before": {
      content: '"input content here..."',
      color: theme.colors["tertiary"][3],
    },
  },
}));

export default useStyles;
