import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { TopMenuHome } from "../components/TopMenu";
import { getAllNotes } from "../utils/local-data";

export default function Home() {
  const [notes, setNotes] = React.useState(getAllNotes() || []);
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("search") || "";
  const updateSearchMenu = (search) => {
    setSearchParams({ search: search });
  };

  useEffect(() => {
    if (keyword === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams, keyword]);

  return (
    <>
      <TopMenuHome onSearch={updateSearchMenu} keyword={keyword} />
      {notes.length > 0 && <NoteList notes={notes} />}
    </>
  );
}
