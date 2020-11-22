import React from 'react';
import Img from 'gatsby-image';
import {useStaticQuery, graphql} from 'gatsby';

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
      <Img fixed={data.file.childImageSharp.fixed}/>
  </header> 
  );
}
 
export default Header;