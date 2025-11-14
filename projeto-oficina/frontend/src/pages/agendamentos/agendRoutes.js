import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Page404 from '../404/page404';
import AgendamentosIndex from './agendIndex/agendIndex';

export default function agendRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/agendamentos/index" replace />} />
      <Route path="/index" element={<AgendamentosIndex />} />

      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
