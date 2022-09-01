import { MantineProvider, Text } from "@mantine/core";
import theme from "../config/theme";

function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      <Text>Welcome to Mantine!</Text>
    </MantineProvider>
  );
}

export default App;
