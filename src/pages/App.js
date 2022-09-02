import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import theme from "../config/theme";
import DetailNote from "./DetailNote";
import Home from "./Home";

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  useHotkeys([["mod+J", () => toggleColorScheme()]]);
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:noteId" element={<DetailNote />} />
          </Routes>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
