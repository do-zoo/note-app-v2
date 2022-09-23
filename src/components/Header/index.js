import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Header as MantineHeader,
  HoverCard,
  MediaQuery,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import React, { useContext } from "react";
import { MdOutlineEventNote } from "react-icons/md";
import {
  TbArchive,
  TbArrowLeft,
  TbLogout,
  TbMoon,
  TbSun,
} from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";
import useSession from "../../hooks/useSession";
import { deleteAccessToken, getInitialName } from "../../utils";
import NetworkStatus from "../NetworkStatus";
import useStyles from "./styles";

const Header = () => {
  const { locale, toggleLocale } = useContext(LocaleContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const { classes } = useStyles();

  const { session } = useSession();

  const handleLogout = () => {
    deleteAccessToken();
    navigate(0);
  };

  const dark = colorScheme === "dark";
  return (
    <MantineHeader height={"100%"} className={classes.header}>
      <NetworkStatus />
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
                onClick={() => navigate(-1)}
              >
                <TbArrowLeft size={"1.8rem"} />
              </ActionIcon>
            )}
          </Box>
          <Box>
            <Group position="right" spacing={isDesktop ? "xl" : "sm"}>
              {pathname === "/" && (
                <>
                  <ActionIcon
                    className={classes.buttonNav}
                    variant="filled"
                    color={"secondary"}
                    title="Archive"
                    component={Link}
                    to="/archived"
                  >
                    <TbArchive size={"1.8rem"} />
                  </ActionIcon>
                  <Divider orientation="vertical" />
                </>
              )}
              <Group spacing={isDesktop ? "md" : "xs"}>
                <ActionIcon
                  className={classes.buttonNav}
                  variant="light"
                  color={dark ? "yellow" : "blue"}
                  onClick={() => toggleLocale()}
                  title={`Change to ${
                    locale === "id" ? "English (US)" : "Indonesia"
                  }`}
                >
                  {locale === "id"
                    ? getUnicodeFlagIcon("ID")
                    : getUnicodeFlagIcon("US")}
                </ActionIcon>
                <ActionIcon
                  className={classes.buttonNav}
                  variant="light"
                  color={dark ? "yellow" : "blue"}
                  onClick={() => toggleColorScheme()}
                  title="Change color mode"
                >
                  {dark ? (
                    <TbSun size={"1.8rem"} />
                  ) : (
                    <TbMoon size={"1.8rem"} />
                  )}
                </ActionIcon>
              </Group>
              {session?.isAuth && (
                <>
                  <Divider orientation="vertical" />

                  <HoverCard width={280} shadow="md" position="bottom-end">
                    <HoverCard.Target>
                      <Avatar
                        className={classes.buttonNav}
                        color="teal"
                        radius="xl"
                      >
                        {getInitialName(session?.user?.name)}
                      </Avatar>
                    </HoverCard.Target>
                    <HoverCard.Dropdown>
                      <Stack>
                        <Box>
                          <Text size="md">
                            Hi,{" "}
                            <Text weight={"bold"} span>
                              {session?.user?.name}
                            </Text>
                          </Text>
                          <Text size="sm" weight={"lighter"}>
                            ({session?.user?.email})
                          </Text>
                        </Box>
                        <Group position="right">
                          <Button
                            leftIcon={<TbLogout size={"1.8rem"} />}
                            variant="white"
                            color="red"
                            onClick={handleLogout}
                          >
                            Keluar
                          </Button>
                        </Group>
                      </Stack>
                    </HoverCard.Dropdown>
                  </HoverCard>
                </>
              )}
            </Group>
          </Box>
        </Group>
      </Container>
    </MantineHeader>
  );
};

export default Header;
