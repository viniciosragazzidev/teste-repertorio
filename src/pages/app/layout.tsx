import { Outlet } from "react-router";

const LayoutApp = () => {
  return (
    <main className="w-screen">
      <Outlet />
    </main>
  );
};

export default LayoutApp;
