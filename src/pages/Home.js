import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import NoteList from "../components/NoteList";
import { TopMenuHome } from "../components/TopMenu";
import { getAllNotes } from "../utils/local-data";

function Home() {
  const notes = getAllNotes();
  const [searchParams, setSearchParams] = useSearchParams();
  const updateSearchMenu = (e) => {
    const search = e.target.value;
    setSearchParams({ search });
  };
  useEffect(() => {
    if (searchParams?.get("search") === "") {
      searchParams.delete("search");
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

  console.log(searchParams);

  console.log(searchParams.get("search"));
  return (
    <>
      <TopMenuHome onSearch={updateSearchMenu} />
      {notes.length > 0 && <NoteList notes={notes} />}
    </>
  );
}

export default Home;
