import { useCallback, useEffect, useState } from "react";
import { getUserLogged } from "../services/api/auth";
import { deleteAccessToken } from "../utils";

const useSession = () => {
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState(null);

  const getUser = useCallback(() => {
    getUserLogged().then((res) => {
      setStatus(res.status);
      setMessage(res.message);
      setSession({
        user: res.data,
        isAuth: res.status === "success",
      });
      if (res.status === "fail") {
        deleteAccessToken();
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
