import { ColorSchemeProvider, MantineProvider } from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import theme from "../config/theme";
import NotFound from "./404";
import Archived from "./Archived";
import DetailNote from "./DetailNote";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

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
            <Route path="/archived" element={<Archived />} />
            <Route path="/:noteId" element={<DetailNote />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Layout>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
