"use client";
import DashboardLayout from "@/components/DashBoardLayout/page";
import React, { useState } from "react";
import Courses from "../../components/dashboardcomponents/courses";
import SingleCourse from "../../components/dashboardcomponents/singlecourse";

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