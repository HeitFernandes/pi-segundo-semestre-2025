import React from 'react';
import { Outlet } from 'react-router-dom';

import { FixedBackground, GlobalBackground, MainContent } from './styled';
import SideBar from '../sidebar/sidebar';
import Footer from '../footer/footer';

// eslint-disable-next-line
function Layout({ children }) {
  return (
    <>
      <FixedBackground />

      <GlobalBackground>
        <SideBar />
        <MainContent>
          <Outlet />
          <Footer />
        </MainContent>
      </GlobalBackground>
    </>
  );
}

export default Layout;
