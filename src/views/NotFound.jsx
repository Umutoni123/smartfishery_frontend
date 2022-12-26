import React from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  return (
    <main className="flex items-center justify-center w-screen h-screen text-lg">
      <p>
        Not found!{" "}
        <span onClick={() => history.push("/login")} className="text-blue-400">
          Back to home
        </span>
      </p>
    </main>
  );
};

export default NotFound;
