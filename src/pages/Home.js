import { Box, Grid } from "@mantine/core";
import React from "react";
import NoteCard from "../components/Card/NoteCard";
import { TopMenuHome } from "../components/TopMenu";

function Home(props) {
  return (
    <>
      <TopMenuHome />
      <Box
        sx={{
          paddingTop: "1rem",
          paddingBottom: "1rem",
          position: "relative",
        }}
      >
        <Grid>
          <Grid.Col md={4} xs={6}>
            <NoteCard />
          </Grid.Col>
        </Grid>
      </Box>
    </>
  );
}

Home.propTypes = {};

export default Home;
