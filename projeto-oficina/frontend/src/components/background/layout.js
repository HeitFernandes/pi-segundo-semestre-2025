import React from 'react';

import { FixedBackground, GlobalBackground, MainContent } from './styled';
import SideBar from '../sidebar/sidebar';

// eslint-disable-next-line
function Layout({ children }) {
  return (
    <>
      <FixedBackground />

      <GlobalBackground>
        <SideBar />
        <MainContent>{children}</MainContent>
      </GlobalBackground>
    </>
  );
}

export default Layout;
