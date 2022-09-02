import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  header: {
    position: "sticky",
    top: 0,
  },
  containerHeader: {
    height: "100%",
  },
  groupHeader: {
    height: "100%",
  },
  buttonNav: {
    width: "2.5rem",
    height: "2.5rem",
  },
}));

export default useStyles;
