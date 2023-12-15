import { useQuery } from "react-query";
import { service } from "../../services";

export function HeaderPage() {
  const { data, isLoading } = useQuery("user", () => {
    return service.getUserGitHub("victorlucass");
  });
  
  return (
    <>
      <h1>Header</h1>
    </>
  );
}
