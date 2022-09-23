import { useCallback, useEffect, useState } from "react";
import { getActiveNotes, getArchivedNotes } from "../services/api/notes";

const useAllNotes = () => {
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState(null);
  const [isRefetch, setIsRefetch] = useState(true);

  const activeNotes = useCallback(() => {
    getActiveNotes().then((resActive) => {
      setMessage(resActive.message);
      setNotes((prevNotes) => [...prevNotes, ...resActive.data]);
      getArchivedNotes().then((resArchive) => {
        setStatus(resArchive.status);
        setMessage(resArchive.message);
        setNotes((prevNotes) => [...prevNotes, ...resArchive.data]);
        setIsRefetch(false);
      });
    });
  }, []);

  useEffect(() => {
    if (isRefetch) {
      setStatus("loading");
      const timeout = setTimeout(activeNotes, 2000);
      return () => {
        setStatus("success");
        clearTimeout(timeout);
      };
    }
  }, [activeNotes, isRefetch]);

  return { notes, setIsRefetch, status, message };
};

export default useAllNotes;
