import {React} from "react";
import { PublicRoute } from "./negocio/PublicRoute"
import { AdminRoute } from "./negocio/AdminRoute"

function App() {
  return (
    <>
      <PublicRoute/>
      <AdminRoute/>
    </>
  );
}

export default App;
