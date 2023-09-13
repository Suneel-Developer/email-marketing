"use client";
import React, { useState } from "react";
import DashboardLayout from "@/components/DashBoardLayout/page";
import SingleTraingpage from "./singleTraingpage";
import TrainingMain from "./Trainingmain";

const Training = () => {
  const [createMode, setCreateMode] = useState(false);
  const [showSinglepage, setShowSingle] = useState(false);

  const handleSinglepage = () => {
    setShowSingle(true);
    setCreateMode(false);
  };

  return (
    <DashboardLayout>
      {!showSinglepage && (
        <TrainingMain onHandleShowSinglepage={handleSinglepage} />
      )}
      {showSinglepage && <SingleTraingpage />}
    </DashboardLayout>
  );
};

export default Training;
