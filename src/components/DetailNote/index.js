import { Box, Card, Space, Text } from "@mantine/core";
import PropTypes from "prop-types";
import React from "react";
import { showFormattedDate } from "../../utils";
import { BodyInput, TitleInput } from "../Inputs";
import useStyles from "./styles";

function DetailNoteComp({ body, createdAt, title }) {
  const { classes } = useStyles();
  return (
    <Box className={classes.DetailNote}>
      <Card shadow={"sm"} color={"secondary"} className={classes.card}>
        <Card.Section inheritPadding py="xs">
          <TitleInput value={title} />
          <Text align="right" size={"sm"} weight={300}>
            {showFormattedDate(createdAt)}
          </Text>
        </Card.Section>
        <Space h="sm"></Space>
        <BodyInput value={body} />
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
