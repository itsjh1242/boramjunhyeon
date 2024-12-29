import React from "react";
import { Route, Routes } from "react-router-dom";

import RootLayout from "@/components/RootLayout";

// views
import { HomePage } from "@/views";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
