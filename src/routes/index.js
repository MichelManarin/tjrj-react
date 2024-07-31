import { Routes, Route } from "react-router-dom";

export default function RoutesApp() {

  return (
    <>
      <Routes>
        <Route path="/" element={<h1>teste</h1>} />
        <Route path="*" element={<h2>teste2</h2>} />
      </Routes>
    </>
  );
}