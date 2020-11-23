import React from 'react';

//Styles
import footerStyles from '../styles/footer.module.scss';


const Footer = () => {
  return (<footer className={footerStyles.footer}>
    <div>Page created by {" "}
      <a href="/">MisiekKisiek</a>
    </div>
    <div>
      <span>Kontakt:</span>
      <span>tel. +48 604 156 103</span>
      <span>e-mail. michal.skrzypiec@multiconsult.com.pl</span>
    </div>
  </footer>
  );
}

export default Footer;