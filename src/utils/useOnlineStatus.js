import { useState, useEffect } from "react";
const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState("online");

  useEffect(() => {
    window.addEventListener("offline", () => {
      setOnlineStatus("offline");
    });
    window.addEventListener("online", () => {
      setOnlineStatus("online");
    });
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
