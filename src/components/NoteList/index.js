import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mantine/core";
import NoteCard from "../Card/NoteCard";

const NoteList = ({ notes, onArchive, onDelete, onUnarchive }) => {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "relative",
        minHeight: "100vh",
      }}
    >
      <Grid align={"stretch"}>
        {notes?.map((note) => (
          <Grid.Col md={4} xs={6} key={note.id}>
            <NoteCard
              body={note.body}
              createdAt={note.createdAt}
              id={note.id}
              title={note.title}
              isArchived={note.archived}
              onArchive={onArchive}
              onDelete={onDelete}
              onUnarchive={onUnarchive}
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func,
  onArchive: PropTypes.func,
  onUnarchive: PropTypes.func,
};

export default NoteList;
