import { useCallback, useEffect, useState } from "react";
import { getUserLogged } from "../services/auth";

const useSession = () => {
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState(null);

  const getUser = useCallback(() => {
    getUserLogged().then((res) => {
      setStatus(res.status);
      setMessage(res.message);
      setSession(res.data);
      if (res.status === "fail") {
        localStorage.setItem("accessToken", "");
      }
    });
  }, []);
  useEffect(() => {
    const timeout = setTimeout(getUser, 3000);
    window.addEventListener("storage", getUser);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("storage", getUser);
    };
  }, [getUser]);

  return { session, status, message };
};

export default useSession;
