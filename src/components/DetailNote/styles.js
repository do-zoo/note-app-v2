import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  DetailNote: {
    paddingTop: theme.spacing["md"],
    paddingBottom: theme.spacing["md"],
  },
  card: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors["primary"][5]
        : theme.colors["primary"][4],
    color: theme.colors["tertiary"][6],
  },
  body: {
    minHeight: "calc(100vh - 300px)",
  },
}));

export default useStyles;
