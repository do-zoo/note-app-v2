import { useEffect, useState } from "react";
import { getUserLogged } from "../services/auth";

const useSession = () => {
  const [session, setSession] = useState(null);
  const [status, setStatus] = useState("loading");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      getUserLogged().then((res) => {
        setStatus(res.status);
        setMessage(res.message);
        setSession(res.data);
      });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return { session, status, message };
};

export default useSession;
