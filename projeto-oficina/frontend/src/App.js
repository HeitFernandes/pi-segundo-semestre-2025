import React from 'react';

import GlobalStyles from './styles/globalStyles';
import Layout from './components/background/background';
import Dashboard from './pages/dashboard/dashboard';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Dashboard />
      </Layout>
    </>
  );
}

export default App;
