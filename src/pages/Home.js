import { Box, LoadingOverlay } from "@mantine/core";
import React, { useContext, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import ModalDelete from "../components/Modals/ModalDelete";
import NoItem from "../components/NoItem";
import NoteList from "../components/NoteList";
import { TopMenuHome } from "../components/TopMenu";
import LocaleContext from "../contexts/LocaleContext";
import useActiveNotes from "../hooks/useActiveNotes";
import useAllNotes from "../hooks/useAllNotes";
import { addNote, archiveNote } from "../services/api/notes";

export default function Home() {
  const { locale } = useContext(LocaleContext);
  const {
    notes: activeNote,
    status: activeNoteStatus,
    setIsRefetch,
  } = useActiveNotes();
  const { notes: AllNotes } = useAllNotes();
  const [mode, setMode] = React.useState("active notes");

  const [notes, setNotes] = React.useState(activeNote);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search") || "";

  const [deleteId, setDeleteId] = React.useState("");
  const [isModalDeleteOpen, setIsModalDeleteOpen] = React.useState(false);

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
    archiveNote(id).then(() => {
      setIsRefetch(true);
    });
  };

  const handleAddNote = (data) => {
    addNote(data).then(() => {
      setIsRefetch(true);
    });
    // setNotes(getActiveNotes());
  };

  const renderMode = (mode) => {
    switch (mode) {
      case "active notes":
        return locale === "id" ? "Catatan Aktif" : "Active Notes";
      case "search":
        return locale === "id" ? "Hasil Pencarian" : "Search Result";
      default:
        return locale === "id" ? "Catatan Aktif" : "Active Notes";
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
        handleReFetch={() => setIsRefetch(true)}
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
              <NoItem
                text={
                  locale === "id"
                    ? "Tidak ada catatan aktif"
                    : "No active notes"
                }
              />
            ) : (
              <NoItem
                text={
                  locale === "id"
                    ? "Tidak ada catatan yang cocok dengan kata kunci yang Anda cari"
                    : "No notes match your search keyword"
                }
              />
            )}
          </>
        )}
      </Box>
    </>
  );
}
