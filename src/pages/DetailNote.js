import React from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNoteComp from "../components/DetailNote";
import { TopMenuDetail } from "../components/TopMenu";
import { getNote } from "../utils/local-data";

function DetailNote() {
  const params = useParams();
  let navigate = useNavigate();
  const note = getNote(params?.noteId);
  console.log("note", note);
  useEffect(() => {
    if (!note) {
      navigate("/", { replace: true });
    }
  }, [note, navigate]);
  if (!note) {
    return null;
  }
  return (
    <>
      <TopMenuDetail />
      <DetailNoteComp
        body={note?.body}
        createdAt={note?.createdAt}
        title={note?.title}
      />
    </>
  );
}

export default DetailNote;
