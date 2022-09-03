import React from "react";
import PropTypes from "prop-types";
import { Affix, Box, Button, Container, Transition } from "@mantine/core";
import Header from "./Header";
import { TbArrowUp } from "react-icons/tb";
import { useWindowScroll } from "@mantine/hooks";

const Layout = ({ children }) => {
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
                Scroll to top
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
