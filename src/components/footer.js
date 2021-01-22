import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"

import footer from '../scss/footer.module.scss'

export default function Footer() {
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


        <div className={footer.footer}>
          <div className={footer.container}>
            <div className={footer.firstCol}><h3>Black Voices Matter.</h3></div>
            <div className={footer.secondCol}>
              <Link to="/" className={footer.logoLink} >
                <Img fluid={data.standlogo.childImageSharp.fluid} className={footer.logo} alt={data.site.siteMetadata.title}  />
              </Link>
              <p className={footer.launched}>An initiative launched by <img src="/img/lgo-sr.svg" alt="Studio Resonate" /></p>
            </div>
          </div>


          {/* <div className={footer.signatories}>
            <p>Signatories</p>
            <ul>
              <li>pandora</li>
              <li>siriusxm</li>
              <li>sticher</li>
            </ul>
          </div> */}

        </div>

      )}
    />
  )
}


