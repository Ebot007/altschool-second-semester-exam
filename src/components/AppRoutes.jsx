import { Route, Routes } from 'react-router-dom';
import AuthenticatedLayout from '../layouts/AuthenticatedLayout';
import GuestLayout from '../layouts/GuestLayout';
import NotFound from '../pages/404';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route element={<GuestLayout />}>
      <Route path="/login" element={<Login />} />
    </Route>
    <Route element={<AuthenticatedLayout />}>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
