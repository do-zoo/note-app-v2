import {
  ColorSchemeProvider,
  LoadingOverlay,
  MantineProvider,
} from "@mantine/core";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import React, { useMemo, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import theme from "../config/theme";
import { LocaleProvider } from "../contexts/LocaleContext";
import useSession from "../hooks/useSession";
import NotFound from "./404";
import Archived from "./Archived";
import DetailNote from "./DetailNote";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [locale, setLocale] = useState("id");
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });
  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === "id" ? "en" : "id";
    });
  };

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  useHotkeys([["mod+J", () => toggleColorScheme()]]);

  const { session, status } = useSession();

  const contextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

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
        <LoadingOverlay
          visible={status === "loading"}
          overlayBlur={100}
          loaderProps={{
            variant: "bars",
          }}
        />
        <LocaleProvider value={contextValue}>
          <Layout>
            {status === "success" ? (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/archived" element={<Archived />} />
                <Route path="/:noteId" element={<DetailNote />} />
                <Route path="/404" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/404" replace />} />
              </Routes>
            ) : (
              <Routes>
                <Route path="/*" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            )}
          </Layout>
        </LocaleProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
