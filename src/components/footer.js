import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import footer from '../scss/footer.module.scss'
import Image from './../components/image'


const Footer = ( { siteTitle } ) => (
  <footer className={footer.footer}>
    <h3>Black Voices Matter.</h3>
    <Link to="/" className={footer.logo} title={siteTitle} >
      <Image alt={siteTitle} filename="lgo-stand.png" />
    </Link>
    <h4>An initiative launched by</h4>
  </footer>
)


Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}


export default Footer
