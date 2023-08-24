import { Outlet } from "react-router-dom";
import { TopBar } from "./TopBar/topbar";

export const DefaultRouter = () => {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  );
};
