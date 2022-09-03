import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@mantine/core";
import NoteCard from "../Card/NoteCard";

const NoteList = ({ notes }) => {
  return (
    <Box
      sx={{
        paddingTop: "1rem",
        paddingBottom: "1rem",
        position: "relative",
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
            />
          </Grid.Col>
        ))}
      </Grid>
    </Box>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
