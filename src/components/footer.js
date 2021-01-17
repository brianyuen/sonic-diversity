import { Link, graphql } from "gatsby"
import React from "react"

import footer from '../scss/footer.module.scss'

export const data = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Footer = ( ) => (
  <footer className={footer.footer}>
    <h3>Black Voices Matter.</h3>
    <Link to="/" className={footer.logo}>
    </Link>
    <h4>An initiative launched by</h4>
  </footer>
)



export default Footer
