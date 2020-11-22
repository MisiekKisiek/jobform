import React from 'react';

//Components
import Header from '../components/header'

const Layout = ({children}) => {
  return ( <>
    <Header/>
    {children}
  </> );
}
 
export default Layout;