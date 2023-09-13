import MobileNavigation from "../MobileNavigation/page";
import Navbar from "../Navbar/page";
import Sidebar from "../Sidebar/page";

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
