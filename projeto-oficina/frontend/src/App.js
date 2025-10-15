import React from 'react';
import { Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/globalStyles';
import Layout from './components/background/layout';
import Dashboard from './pages/dashboard/dashboard';
import Page404 from './pages/404/page404';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
