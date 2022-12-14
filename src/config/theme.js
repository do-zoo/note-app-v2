import { DEFAULT_THEME } from "@mantine/core";

const theme = {
  ...DEFAULT_THEME,
  colors: {
    ...DEFAULT_THEME.colors,
    primary: [
      "#FCFAF4",
      "#F9F5E9",
      "#F7F0DE",
      "#F4EBD3",
      "#F1E6C8",
      "#C1B8A0",
      "#918A78",
      "#605C50",
      "#302E28",
      "#000000",
    ],
    secondary: [
      "#F6F1EF",
      "#EDE3E0",
      "#E5D6D0",
      "#DCC8C1",
      "#D3BAB1",
      "#A9958E",
      "#7F706A",
      "#544A47",
      "#2A2523",
      "#000000",
    ],
    tertiary: [
      "#E4E6E8",
      "#C9CCD0",
      "#AFB3B9",
      "#9499A1",
      "#79808A",
      "#61666E",
      "#494D53",
      "#303337",
      "#181A1C",
      "#000000",
    ],
    quaternary: [
      "#F8F8F6",
      "#F1F1EC",
      "#EAEAE3",
      "#E3E3D9",
      "#DCDCD0",
      "#B0B0A6",
      "#84847D",
      "#585853",
      "#2C2C2A",
      "#000000",
    ],
    danger: [
      "#FCE5E5",
      "#FACACA",
      "#F7B0B0",
      "#F59595",
      "#F27B7B",
      "#C26262",
      "#914A4A",
      "#613131",
      "#301919",
      "#000000",
    ],
  },
  fontFamily: "Poppins, sans-serif",
  primaryColor: "primary",
  primaryShade: 6,
  defaultRadius: "md",
  components: {
    Container: {
      defaultProps: {
        size: "xl",
      },
    },
  },
};

export default theme;
