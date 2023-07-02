import { Outlet } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";

function AppLayout() {
  return <div>
    <Navbar />
    <main>
        <Outlet />
    </main>
  </div>;
}

export default AppLayout;
