import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css';

import GlobalStyles from './styles/globalStyles';
import Layout from './components/background/layout';
import Dashboard from './pages/dashboard/dashboard';
import Page404 from './pages/404/page404';
import Clientes from './pages/clientes/clienteRoutes';
import UserProfile from './pages/userProfile/userProfile';
import Motos from './pages/motos/motosRoutes';
import Login from './pages/login/loginPage';
import Agendamentos from './pages/agendamentos/agendRoutes';

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/login/*" element={<Login />} />

        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/clientes/*" element={<Clientes />} />
          <Route path="/user" element={<UserProfile />} />
          <Route path="/motos/*" element={<Motos />} />
          <Route path="/agendamentos/*" element={<Agendamentos />} />

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={4000} theme="dark" />
    </>
  );
}

export default App;
