import { Route, Routes } from "react-router-dom";
import { Layout } from "../pages/Layout";
import { Cards } from "../pages/Cards";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/:username" element={<Cards />}> 
          <Route path="*" element={<Cards />} />
        </Route>
      </Route>
    </Routes>
  );
}
