import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import OrdensIndex from './ordensIndex/ordensIndex';
import OrdensStore from './ordensStore/ordensStore';

export default function OrdemServico() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/ordemdeservico/index" replace />}
      />
      <Route path="/index" element={<OrdensIndex />} />
      <Route path="/store" element={<OrdensStore />} />
    </Routes>
  );
}
