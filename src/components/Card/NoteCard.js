import React from "react";
import PropTypes from "prop-types";
import {
  ActionIcon,
  Anchor,
  Box,
  Card,
  Group,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import useStyles from "./styles";
import { TbArchive, TbDots, TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";

function NoteCard(props) {
  const { classes } = useStyles();
  return (
    <Card shadow={"sm"} color={"secondary"} className={classes.card}>
      <Card.Section inheritPadding py="xs">
        <Group position="apart">
          <Anchor component={Link} to="/detail">
            <Title order={4}>Title</Title>
          </Anchor>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon color={"tertiary.6"} variant="transparent">
                <TbDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item icon={<TbArchive size={14} />}>Archive</Menu.Item>
              <Menu.Item icon={<TbTrash size={14} />} color="red">
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Card.Section>
      <Text mt={"md"} size="md">
        NoteCard
      </Text>
      <Card.Section inheritPadding py="xs">
        <Text align="right" weight={300}>
          12 Jan 2021
        </Text>
      </Card.Section>
    </Card>
  );
}

NoteCard.propTypes = {};

export default NoteCard;
