"use client";
import DashboardLayout from "@/components/DashBoardLayout";
import MobileTopNavbar from "@/components/MobileTapbar";

const Material = () => {
  // Material Produsts
  const materialProducts = [
    {
      image: "/assets/material01.png",
      title: "Laptop",
      total: "15",
    },
    {
      image: "/assets/material02.png",
      title: "Shoes",
      total: "20",
    },
    {
      image: "/assets/material03.png",
      title: "Books",
      total: "30",
    },
    {
      image: "/assets/material04.png",
      title: "Perfumes",
      total: "10",
    },
    {
      image: "/assets/material05.png",
      title: "Watches",
      total: "25",
    },
    {
      image: "/assets/material01.png",
      title: "Laptop",
      total: "17",
    },
    {
      image: "/assets/material02.png",
      title: "Shoes",
      total: "05",
    },
    {
      image: "/assets/material03.png",
      title: "Books",
      total: "15",
    },
  ];
  return (
    <DashboardLayout>
      <div className="bg-primary md:bg-white  ">
        <MobileTopNavbar pageName="Material Management" href="/mobiledashboard" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 rounded-t-2xl bg-white px-2 md:px-6 py-4 md:py-0">
          {materialProducts.map((item, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center gap-2 md:gap-4 mb-2"
            >
              <div className="shadow-md rounded-2xl	p-1 md:p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 md:h-44 rounded"
                />
              </div>
              <div className="bg-none md:bg-[#F6F6F6] flex flex-wrap justify-between items-center gap-2 rounded-md p-2 text-[#4B4B4B]">
                <h2 className="text-base font-semibold">{item.title}</h2>
                <h2 className="text-base font-semibold flex gap-5">
                  Total: <span>{item.total}</span>
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Material;
