import React from "react";
import { TbArchiveOff } from "react-icons/tb";
import NoItem from "../components/NoItem";
import NoteList from "../components/NoteList";
import { TopMenuArchived } from "../components/TopMenu";
import {
  deleteNote,
  getArchivedNotes,
  unarchiveNote,
} from "../utils/local-data";

function Archived() {
  const [archivedNotes, setArchivedNotes] = React.useState(getArchivedNotes());

  const handleDeleteNote = (id) => {
    deleteNote(id);
    setArchivedNotes(getArchivedNotes());
  };

  const handleUnarchiveNote = (id) => {
    unarchiveNote(id);
    setArchivedNotes(getArchivedNotes());
  };

  return (
    <>
      <TopMenuArchived />
      {archivedNotes?.length > 0 ? (
        <NoteList
          notes={archivedNotes}
          onDelete={handleDeleteNote}
          onUnarchive={handleUnarchiveNote}
        />
      ) : (
        <NoItem
          icon={<TbArchiveOff size={"3rem"} />}
          text="Belum ada Catatan yang diarsipkan"
        />
      )}
    </>
  );
}

export default Archived;
