import React from 'react';
import SideBar from './components/sidebar/sidebar';
import GlobalStyles from './styles/globalStyles';
import Layout from './components/background/background';

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <SideBar />
      </Layout>
    </>
  );
}

export default App;
