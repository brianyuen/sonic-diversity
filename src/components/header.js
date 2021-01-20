import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import header from '../scss/header.module.scss'

export default function Header(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          standlogo: file(relativePath: { eq: "lgo-stand.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
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
        <header>
          <nav className={header.nav}>
            <ul>
              <li className={header.logo}>
                <Link to="/" className={header.logoLink} title={data.site.siteMetadata.title} >
                  <Img fluid={data.standlogo.childImageSharp.fluid} className={header.logoImage} alt={data.site.siteMetadata.title}  />
                </Link>
              </li>
              <li className={header.backButton}>
                <Link to="/" title={data.site.siteMetadata.title} className="button secondary">
                  Back
                </Link>
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


