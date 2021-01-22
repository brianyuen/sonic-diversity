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
          <h3>Black Voices Matter.</h3>
          <Link to="/" className={footer.logoLink} >
            <Img fluid={data.standlogo.childImageSharp.fluid} className={footer.logo} alt={data.site.siteMetadata.title}  />
          </Link>
          <h4>An initiative launched by</h4>


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


