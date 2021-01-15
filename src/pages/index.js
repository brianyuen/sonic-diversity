import React from "react"
import { Link, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import home from '../scss/home.module.scss'

export const data = graphql`
  query {
    imageOne: file(relativePath: { eq: "lgo-stand.png" }) {
      childImageSharp {
        fluid(maxWidth: 960) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const IndexPage = (props) => (
  <Layout>
    <SEO title="Stand for Sonic Diversity" />
    <Helmet bodyAttributes={{class: 'home'}} />
    <div className={home.wrapper}>
      <section id="firstCol" className={home.firstCol}>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} className={home.logo} alt="Logo" />
      </section>
      <section id="secondCol" className={home.secondCol}>
        <h1>Lines have been drawn that perpetuate racism in every industry.</h1>
        <p>Scelerisque ligula lorem convallis placerat pharetra fringilla curae vitae ullamcorper augue inceptos elit vehicula est, aenean aliquam sociis quisque tristique sed imperdiet sapien tempus suspendisse pretium erat. Id venenatis litora fermentum lorem diam dolor lacus quis</p>

        <p>Nunc feugiat platea augue fames etiam id elit ornare, pellentesque aliquet sociis morbi sit in libero pulvinar, condimentum proin vivamus urna ad suspendisse at. Tempus blandit nam magnis vel taciti venenatis lobortis ante, ornare est mattis pellentesque sem dictum bibendum eu</p>

        <ul className={home.introCta}>
          <li><Link className="button primary" to="/page-2/">Start your stand</Link></li>
          <li><Link className="button secondary" to="/page-2/">What is the sonic color line</Link></li>
        </ul>

      </section>
    </div>
  </Layout>
)

export default IndexPage
