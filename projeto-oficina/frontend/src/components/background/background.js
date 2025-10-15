import React from 'react';
import { GlobalBackground } from './styled';

// eslint-disable-next-line
function Layout({ children }) {
  return (
    <GlobalBackground>
      <main>{children}</main>
    </GlobalBackground>
  );
}

export default Layout;
