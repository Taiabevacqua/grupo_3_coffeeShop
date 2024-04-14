import { Outlet } from "react-router-dom";
import { Header } from "../components/ui/Header";
import { Sidebar } from "../components/ui/Sidebar";
import { Footer } from "../components/ui/Footer";
import "./App.css";

export const App = () => {
  return (
    <div id="wrapper">
      <Sidebar />

      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <Header />

          <Outlet />
        </div>

        <Footer />
      </div>
    </div>
  );
};
