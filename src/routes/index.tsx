import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignIn from '../pages/SignIn';
import DashboardLayout from '../layouts/DashboardLayout';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dashboard/*" element={<DashboardLayout> {/* Add your dashboard routes here */} </DashboardLayout>} />
        {/* 다른 라우트들을 여기에 추가 */}
      </Routes>
    </Router>
  );
}