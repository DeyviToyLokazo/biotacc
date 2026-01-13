import React from 'react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppBtn from './WhatsAppBtn';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppBtn />
    </>
  );
};

export default Layout;
