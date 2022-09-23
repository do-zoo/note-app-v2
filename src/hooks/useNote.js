import { useCallback, useEffect, useState } from "react";
import { getNote } from "../services/api/notes";

const useNote = (id) => {
  const [note, setNote] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState(null);
  const [isRefetch, setIsRefetch] = useState(true);

  const getNotes = useCallback(() => {
    getNote(id).then((res) => {
      setStatus(res.status);
      setMessage(res.message);
      setNote(res.data);
      setIsRefetch(false);
    });
  }, [id]);

  useEffect(() => {
    if (id || isRefetch) {
      setStatus("loading");
      const timeout = setTimeout(getNotes, 2000);
      return () => {
        setStatus("success");
        clearTimeout(timeout);
      };
    }
  }, [getNotes, isRefetch, id]);

  return { note, setIsRefetch, status, message };
};

export default useNote;
