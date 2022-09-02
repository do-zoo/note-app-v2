import { Box, Card, Group, Text, Title } from "@mantine/core";
import React from "react";
import useStyles from "./styles";

function DetailNoteComp(props) {
  const { classes } = useStyles();
  return (
    <Box className={classes.DetailNote}>
      <Card shadow={"sm"} color={"secondary"} className={classes.card}>
        <Card.Section inheritPadding py="xs">
          <Group position="apart">
            <Title order={4}>Title</Title>
            <Text align="right" size={"sm"} weight={300}>
              12 Jan 2021
            </Text>
          </Group>
        </Card.Section>

        <Text mt={"md"} size="md">
          NoteCard
        </Text>
      </Card>
    </Box>
  );
}

DetailNoteComp.propTypes = {};

export default DetailNoteComp;
