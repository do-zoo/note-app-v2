import React from "react";
import DetailNoteComp from "../components/DetailNote";
import { TopMenuDetail } from "../components/TopMenu";

function DetailNote(props) {
  return (
    <>
      <TopMenuDetail />
      <DetailNoteComp />
    </>
  );
}

DetailNote.propTypes = {};

export default DetailNote;
