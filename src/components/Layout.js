import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Affix, Box, Button, Container, Transition } from "@mantine/core";
import Header from "./Header";
import { TbArrowUp } from "react-icons/tb";
import { useWindowScroll } from "@mantine/hooks";
import LocaleContext from "../contexts/LocaleContext";

const Layout = ({ children }) => {
  const { locale } = useContext(LocaleContext);
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <>
      <Box>
        <Header />
        <Container>
          <main>{children}</main>
        </Container>
        <Affix position={{ bottom: 20, right: 20 }}>
          <Transition transition="slide-up" mounted={scroll.y > 0}>
            {(transitionStyles) => (
              <Button
                leftIcon={<TbArrowUp size={16} />}
                style={transitionStyles}
                onClick={() => scrollTo({ y: 0 })}
                color="tertiary"
              >
                {locale === "id" ? "Kembali ke atas" : "Back to top"}
              </Button>
            )}
          </Transition>
        </Affix>
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
