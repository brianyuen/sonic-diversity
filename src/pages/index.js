import React from "react"
import { Link, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import home from '../scss/home.module.scss'

import Footer from "../components/footer"

export const data = graphql`
    query {
      srlogo: file(relativePath: { eq: "lgo-stand.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
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
`
const IndexPage = (props) => (
  <Layout>
    <SEO title={props.data.site.siteMetadata.title} />
    <Helmet bodyAttributes={{id: 'home'}}  />

    <div className={home.wrapper}>
      <section className={`centered ${home.firstCol}`}>
        <Img fluid={props.data.srlogo.childImageSharp.fluid} className={home.logo} alt={props.data.site.siteMetadata.title} />
      </section>
      <section className={home.secondCol}>
        <div className={home.secondColWrapper}>
          <div className={home.upper}>
            <h1>Lines have been drawn that perpetuate racism in every industry.</h1>
            <p>Scelerisque ligula lorem convallis placerat pharetra fringilla curae vitae ullamcorper augue inceptos elit vehicula est, aenean aliquam sociis quisque tristique sed imperdiet sapien tempus suspendisse pretium erat. Id venenatis litora fermentum lorem diam dolor lacus quis</p>

            <p>Nunc feugiat platea augue fames etiam id elit ornare, pellentesque aliquet sociis morbi sit in libero pulvinar, condimentum proin vivamus urna ad suspendisse at. Tempus blandit nam magnis vel taciti venenatis lobortis ante, ornare est mattis pellentesque sem dictum bibendum eu</p>

            <ul className="cta stack">
              <li><Link className="button primary" to="/start-your-stand/">Start your stand</Link></li>
              <li><Link className="button secondary" to="/what-is-the-sonic-color-line/">What is the sonic color line</Link></li>
            </ul>
          </div>

          <div className={home.lower}>
            <div className={home.stand}>
              <p>Who's taking the stand</p>
              <ul>
                <li>pandora</li>
                <li>siriusxm</li>
                <li>sticher</li>
              </ul>
            </div>
          </div>

        </div>


      </section>
    </div>


    <div className={home.wrapperLower}>
      <section className={`centered ${home.firstCol}`}>
        <p>Eros himenaeos id porttitor magnis primis ridiculus purus amet accumsan eget mauris bibendum, netus nascetur sagittis felis ipsum sodales est consectetur laoreet nisl lacus. Pellentesque pulvinar primis quis purus tristique venenatis ultricies euismod facilisi, netus habitasse libero sociis a lacinia cursus vehicula dignissim, mollis nunc vitae potenti lacus convallis donec consectetur. Tortor condimentum sem penatibus vulputate massa ac congue orci facilisi, consequat purus quam parturient habitant maecenas pretium felis, conubia lectus aenean pellentesque sociosqu amet mattis donec.</p>

        <p><Link className="button primary" to="/start-your-stand/">Start your stand</Link></p>
      </section>
      <section className={home.secondCol}>
        <ol>
          <li>list 1</li>
          <li>list 2</li>
          <li>list 3</li>
          <li>list 4</li>
          <li>list 5</li>
          <li>list 6</li>
          <li>list 7</li>
          <li>list 8</li>
          <li>list 9</li>
          <li>list 10</li>
        </ol>
      </section>

      <footer className={`fade ${home.footer}`}>
        <Footer />
      </footer>


    </div>
  </Layout>
)

export default IndexPage
