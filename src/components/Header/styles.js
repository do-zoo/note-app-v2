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
    height: "72px",
  },
  buttonNav: {
    width: "2.5rem",
    height: "2.5rem",
  },
}));

export default useStyles;
