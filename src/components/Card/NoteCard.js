import {
  ActionIcon,
  Anchor,
  Card,
  Group,
  Menu,
  Text,
  Title,
} from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { TbArchive, TbDots, TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import { showFormattedDate } from "../../utils";
import useStyles from "./styles";

function NoteCard({ title, body, createdAt, id }) {
  const { classes } = useStyles();

  return (
    <Card shadow={"sm"} color={"secondary"} className={classes.card}>
      <Card.Section inheritPadding py="xs">
        <Group position="apart">
          <Anchor component={Link} to={`${id}`} className={classes.title}>
            <Title order={4}>{title}</Title>
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
      <Text mt={"md"} size="md" lineClamp={3} className={classes.body}>
        {body}
      </Text>
      <Card.Section inheritPadding py="xs">
        <Text align="right" weight={300} size="sm">
          {showFormattedDate(createdAt)}
        </Text>
      </Card.Section>
    </Card>
  );
}

NoteCard.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default NoteCard;
