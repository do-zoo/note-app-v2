import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNoteComp from "../components/DetailNote";
import { TopMenuDetail } from "../components/TopMenu";
import { getNote } from "../utils/local-data";

function DetailNote() {
  const params = useParams();
  let navigate = useNavigate();
  const note = getNote(params?.noteId);
  if (!note) {
    navigate("/", { replace: true });
  }
  return (
    <>
      <TopMenuDetail />
      <DetailNoteComp
        body={note.body}
        createdAt={note.createdAt}
        title={note.title}
      />
    </>
  );
}

export default DetailNote;
