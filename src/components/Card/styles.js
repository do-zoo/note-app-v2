import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["primary"][5]
        : theme.colors["primary"][4],
    color: theme.colors["tertiary"][6],
  },
  title: {
    color: theme.colors["tertiary"][6],
  },
}));

export default useStyles;
