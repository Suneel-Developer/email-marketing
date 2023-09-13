"use client";
import Courses from "@/components/dashboardcomponents/courses";
import SingleCourse from "@/components/dashboardcomponents/singlecourse";
import DashboardLayout from "@/components/DashBoardLayout/page";
import React, { useState } from "react";

const Dashboard = () => {
  const [showSinglepage, setShowSinglepage] = useState(false);

  const handleSingleCourse = () => {
    setShowSinglepage(true);
  };

  return (
    <DashboardLayout>
      {!showSinglepage && <Courses onHandleShowSinglepage={handleSingleCourse} />}
      {showSinglepage && <SingleCourse />}
    </DashboardLayout>
  );
};

export default Dashboard;