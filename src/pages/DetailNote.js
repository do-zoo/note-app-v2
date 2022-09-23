import { Box, LoadingOverlay } from "@mantine/core";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import DetailNoteComp from "../components/DetailNote";
import ModalDelete from "../components/Modals/ModalDelete";
import { TopMenuDetail } from "../components/TopMenu";
import useNote from "../hooks/useNote";
import { archiveNote, unarchiveNote } from "../services/api/notes";

function DetailNote() {
  const params = useParams();
  let navigate = useNavigate();
  const { note, status } = useNote(params?.noteId);
  const [deleteId, setDeleteId] = React.useState("");
  const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false);

  useEffect(() => {
    if (!note && status === "fail") {
      navigate("/404", { replace: true });
    }
  }, [note, navigate, status]);
  if (!note) {
    return (
      <Box>
        <LoadingOverlay
          visible={status === "loading"}
          overlayBlur={100}
          loaderProps={{
            variant: "bars",
          }}
        />
      </Box>
    );
  }

  const handleOpenModalDelete = (id) => {
    setDeleteId(id);
    setIsModalDeleteOpen(true);
  };

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
    setDeleteId("");
  };

  const handleArchiveNote = (id) => {
    archiveNote(id).then(() => {
      navigate("/", { replace: true });
    });
  };

  const handleUnarchiveNote = (id) => {
    unarchiveNote(id).then(() => {
      navigate("/", { replace: true });
    });
  };

  return (
    <>
      <TopMenuDetail
        isArchive={note?.archived}
        onDelete={() => handleOpenModalDelete(note?.id)}
        onArchive={() => handleArchiveNote(note?.id)}
        onUnarchive={() => handleUnarchiveNote(note?.id)}
      />
      <DetailNoteComp
        body={note?.body}
        createdAt={note?.createdAt}
        title={note?.title}
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
