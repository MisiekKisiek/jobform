import React from 'react';

//Components
import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (<>
    <Header />
    {children}
    <Footer />
  </>);
}

export default Layout;