import { ActionIcon, Box, Grid, Group, TextInput, Title } from "@mantine/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { TbArchive, TbPlus, TbSearch, TbTrash } from "react-icons/tb";
import ModalCreateNote from "../Modals/ModalCreateNote";
import useStyles from "./styles";

export function TopMenuDetail() {
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

export const TopMenuHome = ({ onSearch, keyword }) => {
  console.log("aku top menu home");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { classes } = useStyles();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Box className={classes.topBar}>
        <Grid justify={"space-between"} align={"center"} gutter={"md"}>
          <Grid.Col xs={3} sm={3}>
            <Title order={3}>Catatan Aktif</Title>
          </Grid.Col>
          <Grid.Col xs={7} sm={7}>
            <Group position="right">
              <TextInput
                icon={<TbSearch />}
                placeholder="Search..."
                sx={{
                  flexGrow: 1,
                }}
                value={keyword}
                size="md"
                onChange={(e) => {
                  onSearch(e.target.value);
                }}
              />

              <ActionIcon
                variant="filled"
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                onClick={() => {
                  setIsModalOpen(true);
                }}
              >
                <TbPlus size={"2rem"} />
              </ActionIcon>
            </Group>
          </Grid.Col>
        </Grid>
      </Box>
      <ModalCreateNote isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};

TopMenuHome.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
