import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/navbar";
import { SignUpNotification } from "../components/Notification";
import { Footer } from "../components/footer/Footer";

export const Public = () => {
  return (
    <main>
      <SignUpNotification />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};
