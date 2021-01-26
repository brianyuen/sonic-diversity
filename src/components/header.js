import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
import MicroModal from "micromodal"

import header from '../scss/header.module.scss'


let last_known_scroll_position = 0;
let ticking = false;

function ickySticky() {
  const content = document.querySelector('#content');
  if (content != null) {
    if (last_known_scroll_position > 200){
      content.classList.add('sticky');
    }
    else {
      content.classList.remove('sticky');
    }
  }
}

document.addEventListener('scroll', function(e) {
  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      ickySticky(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;
  }
});


export default function Header(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          standlogohoriz: file(relativePath: { eq: "lgo-stand-horiz.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `}
      render={data => (

        <header className={header.header}>
          <nav className={header.nav}>
            <ul>
              <li className={header.logo}>
                <Link to="/" className={header.logoLink} title={data.site.siteMetadata.title} >
                  <Img fluid={data.standlogohoriz.childImageSharp.fluid} fadeIn="true" className={header.logoImage} alt={data.site.siteMetadata.title}  />
                </Link>
              </li>
              <li className={header.buttons}>
                <Link to="/" title={data.site.siteMetadata.title} className="button secondary">Back</Link>
                <button className="button primary" onClick={() => MicroModal.show("standwithus")}>Stand with us</button>
              </li>
            </ul>
          </nav>

          {/* if no headerText, don't show this */}
          {props.headerText &&  <h1 className={header.h1}>{props.headerText}</h1>}

        </header>
      )}
    />
  )
}


