import { ColorSchemeProvider, MantineProvider, Text } from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import Layout from "../components/Layout";
import theme from "../config/theme";

function App() {
  const preferredColorScheme = useColorScheme();
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: preferredColorScheme,
    getInitialValueInEffect: true,
  });

  // const [colorScheme, setColorScheme] = useState(preferredColorScheme);
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
