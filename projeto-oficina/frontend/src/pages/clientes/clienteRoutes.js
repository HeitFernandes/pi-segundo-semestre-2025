import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import ClientesIndex from './clientesIndex/clientesIndex';
import ClientesStore from './clientesStore/clientesStore';
import ClientesEdit from './clientesEdit/clientesEdit';
import Page404 from '../404/page404';

export default function Clientes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/clientes/index" replace />} />

      <Route path="/index" element={<ClientesIndex />} />
      <Route path="/store" element={<ClientesStore />} />
      <Route path="/edit/:id" element={<ClientesEdit />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
