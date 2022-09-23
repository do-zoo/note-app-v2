import { Box, LoadingOverlay } from "@mantine/core";
import React, { useContext } from "react";
import { TbArchiveOff } from "react-icons/tb";
import ModalDelete from "../components/Modals/ModalDelete";
import NoItem from "../components/NoItem";
import NoteList from "../components/NoteList";
import { TopMenuArchived } from "../components/TopMenu";
import LocaleContext from "../contexts/LocaleContext";
import useArchiveNotes from "../hooks/useArchiveNotes";
import { unarchiveNote } from "../services/api/notes";

function Archived() {
  const { locale } = useContext(LocaleContext);
  const { notes: archivedNotes, status, setIsRefetch } = useArchiveNotes();
  const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false);
  const [deleteId, setDeleteId] = React.useState("");

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
    setDeleteId("");
    // setNotes(getActiveNotes());
  };

  const handleDeleteNote = (id) => {
    setDeleteId(id);
    setIsModalDeleteOpen(true);
  };

  const handleUnarchiveNote = (id) => {
    unarchiveNote(id).then((res) => {
      setIsRefetch(true);
    });
  };

  return (
    <>
      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={handleCloseModalDelete}
        id={deleteId}
        handleReFetch={() => setIsRefetch(true)}
      />

      <TopMenuArchived />
      <Box
        sx={{
          position: "relative",
        }}
      >
        <LoadingOverlay
          visible={status === "loading"}
          overlayBlur={100}
          loaderProps={{
            variant: "bars",
          }}
        />
        {archivedNotes?.length > 0 ? (
          <NoteList
            notes={archivedNotes}
            onDelete={handleDeleteNote}
            onUnarchive={handleUnarchiveNote}
          />
        ) : (
          <NoItem
            icon={<TbArchiveOff size={"3rem"} />}
            text={
              locale === "id"
                ? "Tidak ada catatan yang diarsipkan"
                : "No archived notes"
            }
          />
        )}
      </Box>
    </>
  );
}

export default Archived;
