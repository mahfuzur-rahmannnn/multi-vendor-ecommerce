import React from "react";
import AdminHeader from "../components/Admin/Layout/AdminHeader";
import AdminSideBar from "../components/Admin/Layout/AdminSideBar";
import AdminDashboardMain from "../components/Admin/Layout/AdminDashboardMain.jsx"


const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />
      <div className="w-full flex">
        <div className="flex items-start justify-between w-full">
          <div className="w-[80px] 800px:w-[330px]">
            <AdminSideBar active={1} />
          </div>
          <AdminDashboardMain />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
