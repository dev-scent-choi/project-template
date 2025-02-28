import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';


const SignIn = lazy(() => import('../pages/SignIn'));
const DashboardLayout = lazy(() => import('../layouts/DashboardLayout'));


export default function AppRoutes() {
  return (
    <Router>
      <Suspense>
        <Routes>
          <Route path="/" element={<Navigate to="/signin" />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard/*" element={<DashboardLayout> {/* Add your dashboard routes here */} </DashboardLayout>} />
          <Route path="/404" element={<div>Page Not Found</div>} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}