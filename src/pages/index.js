import React from "react"
import { Link } from 'gatsby'
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import home from '../scss/home.module.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Stand for Sonic Diversity" />
    <Helmet bodyAttributes={{class: 'home'}} />
    <div className={home.wrapper}>
      <section className={home.firstCol}>
        <h1>LOGO</h1>
      </section>
      <section className={home.secondCol}>
        intro
        <Link to="/page-2/">Go to page 2</Link>
      </section>
    </div>
  </Layout>
)

export default IndexPage
