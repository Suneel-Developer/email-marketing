import React from "react";
import DashboardLayout from "@/components/DashBoardLayout/page";
import MobileTopNavbar from "@/components/MobileTapbar/page";

const Search = () => {
  return (
    <DashboardLayout>
      <div className="bg-primary md:bg-white">
        <MobileTopNavbar pageName="Search" href="/mobiledashboard" />
        <div className="rounded-t-2xl bg-white px-2 md:px-6 py-4 md:p y-0">
          <h1>Search</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Search;
