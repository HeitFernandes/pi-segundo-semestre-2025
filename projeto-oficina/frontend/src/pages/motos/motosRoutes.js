import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import MotosIndex from './motosIndex/motosIndex';
import MotosStore from './motosStore/motosStore';
import MotosEdit from './motosEdit/motosEdit';
import Page404 from '../404/page404';

export default function MotosRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/motos/index" replace />} />
      <Route path="/store" element={<MotosStore />} />
      <Route path="/edit/:id" element={<MotosEdit />} />

      <Route path="/index" element={<MotosIndex />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
