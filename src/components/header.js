import React from 'react';
import Img from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';

//Styles
import headerStyles from '../styles/header.module.scss';

const Header = () => {

  const data = useStaticQuery(graphql`
    query {
    file(relativePath: { eq: "mcpl-logo.jpg" }) {
      childImageSharp {
        fixed( height: 25) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }`);
  return (
    <header className={headerStyles.header}>
      <Img fixed={data.file.childImageSharp.fixed} />
      <span>
        Zaprojektowanie i budowa drogi ekspresowej S52 odc. Północna Obwodnica Krakowa Węzeł Modlnica - Węzeł Mistrzejowice (bez węzła)
      </span>
    </header>
  );
}

export default Header;