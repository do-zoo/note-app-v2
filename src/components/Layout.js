import React from "react";
import PropTypes from "prop-types";
import { Box, Container } from "@mantine/core";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Box>
        <Header />
        <Container>
          <main>{children}</main>
        </Container>
      </Box>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
