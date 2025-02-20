import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutsA from "./admin/layouts/Layouts";
import KelasA from "./admin/pages/admin/kelas/Kelas";
import LayoutsS from "./siswa/layouts/Layouts";
import AbsensiS from "./siswa/pages/Absensi";
import DashboardS from "./siswa/pages/Dashboard";
import AuthS from "./siswa/Auth/Auth";
import LoginS from "./siswa/pages/Login";
import LoginA from "./admin/pages/Login";
import DashboardA from "./admin/pages/Dashboard";
import Profile from "./siswa/pages/Profile";
import AuthA from "./admin/auth/Auth";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AuthA />}>
            <Route path="login" element={<LoginA />} />
          </Route>
          <Route path="/admin/*" element={<LayoutsA />}>
            <Route path="dashboard" element={<DashboardA />} />
            <Route path="kelas" element={<KelasA />} />
          </Route>

          {/* Siswa Routes */}
          <Route path="/" element={<AuthS />}>
            <Route index element={<LoginS />} />
          </Route>
          <Route path="/siswa/*" element={<LayoutsS />}>
            <Route path="dashboard" element={<DashboardS />} />
            <Route path="absensi" element={<AbsensiS />} />
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
