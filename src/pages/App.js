import { ColorSchemeProvider, MantineProvider, Text } from "@mantine/core";
import { useState } from "react";
import Layout from "../components/Layout";
import theme from "../config/theme";

function App() {
  const [colorScheme, setColorScheme] = useState("light");
  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          ...theme,
          colorScheme,
        }}
      >
        <Layout>
          <Text>Welcome to Mantine!</Text>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
