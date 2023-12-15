import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {

    return () => {
      navigate("/404", { replace: true });
    }
  }, [navigate])
  return (
    <>
      <h1
        style={{
          color: "red",
        }}
      >
        Not Found
      </h1>
    </>
  );
}
