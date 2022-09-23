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
import React, { useContext } from "react";
import { TbArchive, TbArchiveOff, TbDots, TbTrash } from "react-icons/tb";
import { Link } from "react-router-dom";
import LocaleContext from "../../contexts/LocaleContext";
import { showFormattedDate } from "../../utils";
import useStyles from "./styles";

function NoteCard({
  title,
  body,
  createdAt,
  id,
  isArchived,
  onDelete,
  onArchive,
  onUnarchive,
}) {
  const { locale } = useContext(LocaleContext);
  const { classes } = useStyles();

  return (
    <Card shadow={"sm"} color={"secondary"} className={classes.card}>
      <Card.Section inheritPadding py="xs">
        <Group position="apart">
          <Anchor component={Link} to={`/${id}`} className={classes.title}>
            <Title order={4}>{title}</Title>
          </Anchor>
          <Menu withinPortal position="bottom-end" shadow="sm">
            <Menu.Target>
              <ActionIcon color={"tertiary.6"} variant="transparent">
                <TbDots size={16} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              {isArchived ? (
                <Menu.Item
                  icon={<TbArchiveOff size={14} />}
                  onClick={() => {
                    onUnarchive(id);
                  }}
                >
                  {locale === "id" ? "urungkan arsip" : "unarchive"}
                </Menu.Item>
              ) : (
                <Menu.Item
                  icon={<TbArchive size={14} />}
                  onClick={() => {
                    onArchive(id);
                  }}
                >
                  {locale === "id" ? "arsipkan" : "archive"}
                </Menu.Item>
              )}
              <Menu.Item
                icon={<TbTrash size={14} />}
                onClick={() => {
                  onDelete(id);
                }}
                color="red"
              >
                {locale === "id" ? "hapus" : "delete"}
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
          {showFormattedDate(createdAt, locale)}
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
  isArchived: PropTypes.bool,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NoteCard;
