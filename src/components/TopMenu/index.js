import React from "react";
import PropTypes from "prop-types";
import {
  ActionIcon,
  Box,
  Grid,
  Group,
  Loader,
  TextInput,
  Title,
} from "@mantine/core";
import useStyles from "./styles";
import { TbArchive, TbPlus, TbSearch, TbTrash } from "react-icons/tb";

export function TopMenuDetail(props) {
  const { classes } = useStyles();

  return (
    <Box className={classes.topBar}>
      <Group position="right">
        <ActionIcon
          variant="filled"
          color={"secondary"}
          title="Archive"
          sx={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        >
          <TbArchive size={"1.8rem"} />
        </ActionIcon>
        <ActionIcon
          variant="filled"
          color={"danger"}
          title="Delete"
          sx={{
            width: "2.5rem",
            height: "2.5rem",
          }}
        >
          <TbTrash size={"1.8rem"} />
        </ActionIcon>
      </Group>
    </Box>
  );
}

TopMenuDetail.propTypes = {};

export const TopMenuHome = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.topBar}>
      <Grid justify={"space-between"} align={"center"} gutter={"md"}>
        <Grid.Col xs={3} sm={3}>
          <Title order={3}>Catatan Aktif</Title>
        </Grid.Col>
        <Grid.Col xs={7} sm={7}>
          <Group position="apart">
            <TextInput
              icon={<TbSearch />}
              placeholder="Search..."
              rightSection={<Loader size="xs" />}
              sx={{
                flexGrow: 1,
              }}
              size="md"
            />

            <ActionIcon
              variant="filled"
              sx={{
                width: "2.5rem",
                height: "2.5rem",
                // position: "fixed",
                // bottom: "1rem",
                // right: "1rem",
              }}
            >
              <TbPlus size={"2rem"} />
            </ActionIcon>
          </Group>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

TopMenuHome.propTypes = {};
