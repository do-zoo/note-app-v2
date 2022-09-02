import { Box, Card, Group, Text, Title } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { showFormattedDate } from "../../utils";
import useStyles from "./styles";

function DetailNoteComp({ body, createdAt, title }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.DetailNote}>
      <Card shadow={"sm"} color={"secondary"} className={classes.card}>
        <Card.Section inheritPadding py="xs">
          <Group position="apart">
            <Title order={4}>{title}</Title>
            <Text align="right" size={"sm"} weight={300}>
              {showFormattedDate(createdAt)}
            </Text>
          </Group>
        </Card.Section>

        <Text mt={"md"} size="md">
          {body}
        </Text>
      </Card>
    </Box>
  );
}

DetailNoteComp.propTypes = {
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default DetailNoteComp;
