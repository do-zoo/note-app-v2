import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNoteComp from "../components/DetailNote";
import ModalDelete from "../components/Modals/ModalDelete";
import { TopMenuDetail } from "../components/TopMenu";
import {
  archiveNote,
  editNote,
  getNote,
  unarchiveNote,
} from "../utils/local-data";

function DetailNote() {
  const params = useParams();
  let navigate = useNavigate();
  const note = getNote(params?.noteId);
  const [title, setTitle] = React.useState(note?.title);
  const [body, setBody] = React.useState(note?.body);
  const [deleteId, setDeleteId] = React.useState("");
  const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false);
  const [isContentChanged, setIsContentChanged] = React.useState(false);

  useEffect(() => {
    if (!note) {
      navigate("/404", { replace: true });
    }
  }, [note, navigate]);
  if (!note) {
    return null;
  }

  const handleDeleteNote = (id) => {
    setDeleteId(id);
    setIsModalDeleteOpen(true);
  };

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
    setDeleteId("");
  };

  const handleArchiveNote = (id) => {
    archiveNote(id);
    navigate("/", { replace: true });
  };

  const handleUnarchiveNote = (id) => {
    unarchiveNote(id);
    navigate("/", { replace: true });
  };

  const handleUpdateNote = (id) => {
    editNote({
      id,
      title: title,
      body: body,
    });
    navigate("/", { replace: true });
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setIsContentChanged(true);
  };

  const handleBodyChange = (e) => {
    setBody(e.target.textContent);
    setIsContentChanged(true);
  };

  return (
    <>
      <TopMenuDetail
        isChanged={isContentChanged}
        isArchive={note?.archived}
        onDelete={() => handleDeleteNote(note?.id)}
        onArchive={() => handleArchiveNote(note?.id)}
        onUnarchive={() => handleUnarchiveNote(note?.id)}
        onUpdate={() => handleUpdateNote(note?.id)}
      />
      <DetailNoteComp
        body={note?.body}
        createdAt={note?.createdAt}
        title={title}
        onTitleChange={handleTitleChange}
        onBodyChange={handleBodyChange}
      />
      <ModalDelete
        isOpen={isModalDeleteOpen}
        id={deleteId}
        onClose={handleCloseModalDelete}
      />
    </>
  );
}

export default DetailNote;
