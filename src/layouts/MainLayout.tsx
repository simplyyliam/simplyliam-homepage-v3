import { Outlet } from "react-router-dom";
import { NavModel } from "../components/ui/nav";
import { CustomButton } from "../components/ui/CustomButton";

function MainLayout() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <NavModel>
        <CustomButton>Home</CustomButton>
        <div className="flex items-center justify-center gap-4">
          <CustomButton>Projects</CustomButton>
          <CustomButton>Playground</CustomButton>
          <CustomButton>About</CustomButton>
          <CustomButton>Contact</CustomButton>
        </div>
      </NavModel>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default MainLayout;
