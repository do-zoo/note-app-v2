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
import { TbArchive, TbMoon, TbSun } from "react-icons/tb";
import useStyles from "./styles";

const Header = (props) => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { classes } = useStyles();

  const dark = colorScheme === "dark";
  return (
    <MantineHeader height={60}>
      <Container className={classes.containerHeader}>
        <Group
          align={"center"}
          position="apart"
          className={classes.groupHeader}
        >
          <Box>
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
          </Box>
          <Box>
            <Group>
              <ActionIcon
                className={classes.buttonNav}
                variant="filled"
                color={"secondary"}
                title="Archive"
              >
                <TbArchive size={24} />
              </ActionIcon>
              <ActionIcon
                className={classes.buttonNav}
                variant="light"
                color={dark ? "yellow" : "blue"}
                onClick={() => toggleColorScheme()}
                title="Change color mode"
              >
                {dark ? <TbSun size={24} /> : <TbMoon size={24} />}
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
