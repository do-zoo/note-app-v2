import { useCallback, useEffect, useState } from "react";
import { getActiveNotes } from "../services/api/notes";

const useActiveNotes = () => {
  const [notes, setNotes] = useState([]);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState(null);
  const [isRefetch, setIsRefetch] = useState(true);

  const getNotes = useCallback(() => {
    getActiveNotes().then((res) => {
      setMessage(res.message);
      setNotes(res.data);
      setIsRefetch(false);
    });
  }, []);

  useEffect(() => {
    if (isRefetch) {
      const timeout = setTimeout(getNotes, 2000);
      return () => {
        setStatus("success");
        clearTimeout(timeout);
      };
    }
  }, [getNotes, isRefetch]);

  return { notes, setIsRefetch, status, message };
};

export default useActiveNotes;
