import {
  ActionIcon,
  Box,
  Container,
  Group,
  Header as MantineHeader,
  MediaQuery,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { MdOutlineEventNote } from "react-icons/md";
import { TbArchive, TbArrowLeft, TbMoon, TbSun } from "react-icons/tb";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";

const Header = (props) => {
  const { pathname } = useLocation();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const dark = colorScheme === "dark";
  return (
    <MantineHeader height={72} className={classes.header}>
      <Container className={classes.containerHeader}>
        <Group
          align={"center"}
          position="apart"
          className={classes.groupHeader}
        >
          <Box>
            {pathname === "/" ? (
              <Group>
                <MdOutlineEventNote size={36} />
                <MediaQuery
                  smallerThan={"sm"}
                  styles={{
                    display: "none",
                  }}
                >
                  <Title>Note App</Title>
                </MediaQuery>
              </Group>
            ) : (
              <ActionIcon
                className={classes.buttonNav}
                variant="transparent"
                title="Back"
                color={dark ? "tertiary.2" : "tertiary.6"}
                component={Link}
                to="/"
              >
                <TbArrowLeft size={"1.8rem"} />
              </ActionIcon>
            )}
          </Box>
          <Box>
            <Group>
              {pathname === "/" && (
                <ActionIcon
                  className={classes.buttonNav}
                  variant="filled"
                  color={"secondary"}
                  title="Archive"
                >
                  <TbArchive size={"1.8rem"} />
                </ActionIcon>
              )}
              <ActionIcon
                className={classes.buttonNav}
                variant="light"
                color={dark ? "yellow" : "blue"}
                onClick={() => toggleColorScheme()}
                title="Change color mode"
              >
                {dark ? <TbSun size={"1.8rem"} /> : <TbMoon size={"1.8rem"} />}
              </ActionIcon>
            </Group>
          </Box>
        </Group>
      </Container>
    </MantineHeader>
  );
};

Header.propTypes = {};

export default Header;
