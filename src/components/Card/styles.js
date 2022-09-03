import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    height: "100%",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["primary"][5]
        : theme.colors["primary"][4],
    color: theme.colors["tertiary"][6],
  },
  title: {
    color: theme.colors["tertiary"][6],
  },
  body: {
    height: "76px",
  },
}));

export default useStyles;
