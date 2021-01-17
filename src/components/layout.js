import React from "react"
import PropTypes from "prop-types"
// import { graphql } from "gatsby"
// import { Helmet } from "react-helmet"

// import Header from "./header"

const Layout = ({ children }) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <>
      <div className="wrapper">
      {/* <Header siteTitle={data.site.siteMetadata?.title || `Title`} /> */}
        <main>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
