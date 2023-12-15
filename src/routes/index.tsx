import { Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { NotFound } from "../pages/NotFound";
import { Cards } from "../pages/Cards";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Cards />} />
      </Route>
      <Route path="*" element={<NotFound />}>
        <Route path="404" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
