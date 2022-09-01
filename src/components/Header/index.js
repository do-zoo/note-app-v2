import {
  ActionIcon,
  Box,
  Button,
  Container,
  Group,
  Header as MantineHeader,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import React from "react";
import { MdOutlineEventNote } from "react-icons/md";
import { TbMoon, TbSun } from "react-icons/tb";
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
              <Title>Note App</Title>
            </Group>
          </Box>
          <Box>
            <Group>
              <Button color={"secondary"}>Archived</Button>
              <ActionIcon
                className={classes.buttonChangeTheme}
                variant="light"
                color={dark ? "primary" : "blue"}
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
