import MobileNavigation from "../MobileNavigation";
import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div>{children}</div>
        {/* <MobileNavigation /> */}
        <div className="md:hidden z-10 flex justify-center items-center mt-20">
          <MobileNavigation />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
