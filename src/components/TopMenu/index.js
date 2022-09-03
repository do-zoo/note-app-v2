import { ActionIcon, Box, Grid, Group, TextInput, Title } from "@mantine/core";
import PropTypes from "prop-types";
import React, { useState } from "react";
import {
  TbArchive,
  TbArchiveOff,
  TbCheck,
  TbPlus,
  TbSearch,
  TbTrash,
} from "react-icons/tb";
import ModalCreateNote from "../Modals/ModalCreateNote";
import useStyles from "./styles";

export function TopMenuDetail({
  id,
  isArchive,
  onArchive,
  onUnarchive,
  onDelete,
  onUpdate,
  isChanged,
}) {
  const { classes } = useStyles();
  return (
    <Box className={classes.topBar}>
      <Group position="apart">
        <Title order={3}>Mode Edit</Title>

        <Group position="right">
          <ActionIcon
            variant="filled"
            color={"danger"}
            title="Delete"
            sx={{
              width: "2.5rem",
              height: "2.5rem",
            }}
            onClick={onDelete}
          >
            <TbTrash size={"1.8rem"} />
          </ActionIcon>
          {
            // if isArchive is true, show unarchive button
            isArchive ? (
              <ActionIcon
                variant="filled"
                color={"secondary"}
                title="Archive"
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                onClick={onUnarchive}
              >
                <TbArchiveOff size={"1.8rem"} />
              </ActionIcon>
            ) : (
              <ActionIcon
                variant="filled"
                color={"secondary"}
                title="Archive"
                sx={{
                  width: "2.5rem",
                  height: "2.5rem",
                }}
                onClick={onArchive}
              >
                <TbArchive size={"1.8rem"} />
              </ActionIcon>
            )
          }
          <ActionIcon
            style={{
              width: "2.5rem",
              height: "2.5rem",
            }}
            color="tertiary"
            variant="filled"
            title="Update"
            disabled={!isChanged}
            onClick={onUpdate}
          >
            <TbCheck size={"1.5rem"} />
          </ActionIcon>
        </Group>
      </Group>
    </Box>
  );
}

TopMenuDetail.propTypes = {
  isArchive: PropTypes.bool,
  id: PropTypes.string,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onUnArchive: PropTypes.func,
  onUpdate: PropTypes.func,
  isChanged: PropTypes.bool,
};

export function TopMenuArchived() {
  const { classes } = useStyles();
  return (
    <Box className={classes.topBar}>
      <Title order={3}>Archived</Title>
    </Box>
  );
}

export const TopMenuHome = ({ onSearch, keyword, title, onCreate }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { classes } = useStyles();

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmitModal = (data) => {
    onCreate(data);
    setIsModalOpen(false);
  };

  return (
    <>
      <Box className={classes.topBar}>
        <Grid justify={"space-between"} align={"center"} gutter={"md"}>
          <Grid.Col xs={3} sm={3}>
            <Title order={3}>{title}</Title>
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
      <ModalCreateNote
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitModal}
      />
    </>
  );
};

TopMenuHome.propTypes = {
  onSearch: PropTypes.func.isRequired,
  keyword: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onCreate: PropTypes.func.isRequired,
};
