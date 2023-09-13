"use client";

import MobileTopNavbar from "@/components/MobileTapbar";

const Courses = ({ onHandleShowSinglepage }) => {
  // handle Show Single Course Function
  const handleShowSingleCourse = () => {
    onHandleShowSinglepage();
  };

  // Courses data
  const coursesItems = [
    {
      image: "/assets/course01.png",
      title: "Module 1",
    },
    {
      image: "/assets/course02.png",
      title: "Module 2",
    },
    {
      image: "/assets/course03.png",
      title: "Module 3",
    },
    {
      image: "/assets/course04.png",
      title: "Module 4",
    },
    {
      image: "/assets/course05.png",
      title: "Module 5",
    },
    {
      image: "/assets/course03.png",
      title: "Module 6",
    },
    {
      image: "/assets/course04.png",
      title: "Module 7",
    },
    {
      image: "/assets/course05.png",
      title: "Module 8",
    },
  ];
  return (
    <div className="bg-primary md:bg-white">
      <MobileTopNavbar pageName="On-Boarding Training" href="/mobiledashboard" />
      <div className="rounded-t-2xl bg-white px-2 md:px-6 py-4 md:py-0 ">
        <h1 className="text-white md:text-light_black text-2xl font-semibold md:bg-transparent md:p-0 bg-primary rounded-lg p-2">Courses :</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 md:gap-5 mt-5">
          {coursesItems.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center gap-2 md:gap-4 mb-2"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-32 md:h-44 rounded"
              />
              <h2
                onClick={handleShowSingleCourse}
                className="text-lg text-light_black font-semibold text-center cursor-pointer"
              >
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Courses;
