import { Box, Card, Group, Space, Text, Title } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { showFormattedDate } from "../../utils";
import useStyles from "./styles";

function DetailNoteComp({ body, title, createdAt }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.DetailNote}>
      <Card shadow={"sm"} color={"secondary"} className={classes.card}>
        <Card.Section inheritPadding py="xs">
          <Group position="apart">
            <Title order={4}>{title}</Title>
            <Text align="right" weight={300} size="sm">
              {showFormattedDate(createdAt)}
            </Text>
          </Group>
        </Card.Section>
        <Space h="sm" />
        <Text className={classes.body}>{body}</Text>
      </Card>
    </Box>
  );
}

DetailNoteComp.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};
export default DetailNoteComp;
