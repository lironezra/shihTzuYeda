import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function ScrollToTop({ children }) {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
        top: 0,
        behavior: "auto",
      });
    });

    return () => {
      unlisten();
    };
  }, []);

  return <>{children}</>;
}

export default ScrollToTop;
