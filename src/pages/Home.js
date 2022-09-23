import { Box, LoadingOverlay } from "@mantine/core";
import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ModalDelete from "../components/Modals/ModalDelete";
import NoItem from "../components/NoItem";
import NoteList from "../components/NoteList";
import { TopMenuHome } from "../components/TopMenu";
import useActiveNotes from "../hooks/useActiveNotes";
import useAllNotes from "../hooks/useAllNotes";
import { addNote, archiveNote } from "../utils/local-data";

export default function Home() {
  const { notes: activeNote, status: activeNoteStatus } = useActiveNotes();
  const { notes: AllNotes, status: AllNotesStatus } = useAllNotes();
  const [mode, setMode] = React.useState("active notes");

  const [notes, setNotes] = React.useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search") || "";

  const [deleteId, setDeleteId] = React.useState("");
  const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false);

  useEffect(() => {
    if (activeNote) {
      setNotes(activeNote);
    }
  }, [activeNote]);

  useEffect(() => {
    if (keyword === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
      setMode("active notes");
      setNotes(activeNote);
    }
    if (keyword) {
      setMode("search");
      setNotes(
        AllNotes.filter((note) => {
          return (
            note.title.toLowerCase().includes(keyword.toLowerCase()) ||
            note.body.toLowerCase().includes(keyword.toLowerCase())
          );
        })
      );
    }
  }, [searchParams, setSearchParams, keyword, activeNote, AllNotes]);

  const updateSearchMenu = (search) => {
    setSearchParams({ search: search });
    setMode("search");
  };

  const handleOpenModalDelete = (id) => {
    setDeleteId(id);
    setIsModalDeleteOpen(true);
  };

  const handleCloseModalDelete = () => {
    setIsModalDeleteOpen(false);
    setDeleteId("");
    // setNotes(getActiveNotes());
  };

  const handleArchiveNote = (id) => {
    archiveNote(id);
    // setNotes(getActiveNotes());
  };

  const handleAddNote = (data) => {
    addNote(data);
    // setNotes(getActiveNotes());
  };

  const renderMode = (mode) => {
    switch (mode) {
      case "active notes":
        return "Catatan Aktif";
      case "search":
        return "Hasil Pencarian";
      default:
        return "Catatan Aktif";
    }
  };

  return (
    <>
      <TopMenuHome
        onSearch={updateSearchMenu}
        keyword={keyword}
        title={renderMode(mode)}
        onCreate={handleAddNote}
      />
      <ModalDelete
        isOpen={isModalDeleteOpen}
        onClose={handleCloseModalDelete}
        id={deleteId}
      />

      <Box
        sx={{
          position: "relative",
        }}
      >
        <LoadingOverlay
          visible={activeNoteStatus === "loading"}
          overlayBlur={100}
          loaderProps={{
            variant: "bars",
          }}
        />

        {notes?.length > 0 ? (
          <NoteList
            notes={notes}
            onDelete={handleOpenModalDelete}
            onArchive={handleArchiveNote}
          />
        ) : (
          <>
            {mode === "active notes" ? (
              <NoItem />
            ) : (
              <NoItem text="Tidak ada catatan yang cocok dengan pencarian Anda" />
            )}
          </>
        )}
      </Box>
    </>
  );
}
