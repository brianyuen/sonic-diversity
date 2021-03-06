import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Img from "gatsby-image"
// import MicroModal from "micromodal"

import footer from '../scss/footer.module.scss'



export default function Footer() {
  return (
    <StaticQuery
      query={graphql`
        query {
          standlogo: file(relativePath: { eq: "lgo-stand.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp_noBase64
              }
            }
          }
          allFile(filter: {relativeDirectory: {eq: "signatories"}}) {
            edges {
              node {
                publicURL
                name
                id
                extension
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


        <div className={footer.footer} data-animate="fade" data-animate-delay="300">

          {/* logo */}
          <div className={footer.container}>
            <div className={footer.firstCol}><h3>Black Voices Matter.</h3></div>
            <div className={footer.secondCol}>
              <Link to="/" className={footer.logoLink} >
                <Img fluid={data.standlogo.childImageSharp.fluid} className={footer.logo} alt={data.site.siteMetadata.title}  />
              </Link>
              <p className={footer.launched}>An initiative launched by <img src="/img/lgo-sr.svg" alt="Studio Resonate" /></p>
            </div>
          </div>

          {/* signatories */}
          <ul className={footer.signatoriesList}>
            <li><p>Signatories</p></li>
            {data.allFile.edges.map(edge => {
              return <li key={edge.node.id}><img className={`${edge.node.name} ${footer.signatoriesLogos}`} src={edge.node.publicURL} alt={edge.node.name} /></li>
            })}
            <li>
              {/* <button className="button primary" onClick={() => MicroModal.show("standwithus")}>Stand with us</button> */}
              <a className="button primary" href="?lightboxForm=true">Stand with us</a>
            </li>
          </ul>


        </div>

      )}
    />
  )
}


