import React from "react"
import { Link, graphql } from 'gatsby'
import { Helmet } from "react-helmet"
import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"
// import MicroModal from "micromodal"


import home from '../scss/home.module.scss'

import Footer from "../components/footer"

export const data = graphql`
    query {
      srlogo: file(relativePath: { eq: "lgo-stand.png" }) {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
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
        <div className={home.logoContainer}>
          <Img fluid={props.data.srlogo.childImageSharp.fluid} className={home.logo} alt={props.data.site.siteMetadata.title} />
          <p className={home.launched}>An initiative launched by <img src="/img/lgo-sr.svg" alt="Studio Resonate" /></p>
        </div>
      </section>
      <section className={home.secondCol}>
        <div className={home.secondColWrapper}>
          <div className={home.upper}>

            <h1>Lines have been drawn that perpetuate racism in every industry.</h1>
            <h2>Some of these lines can be seen. Others can be heard.</h2>

            <p>These are <strong><em>sonic color lines</em></strong> - invisible but pervasive barriers that reward white voices and stereotype voices of color.</p>

            <p>Today, we’re taking a stand for sonic diversity. Will you stand with us as we work to open our ears, and the ears of everyone around us, to a world that is more sonically diverse?</p>

            <p>Together, we can break the <strong><em>sonic color line</em></strong> and redefine the sound of the American voice.</p>

            <ul className="cta stack">
              <li className={home.primary}>
                {/* <button className="button primary" onClick={() => MicroModal.show("standwithus")}>Stand with us</button> */}
                <a className="button primary" href="?lightboxForm=true">Stand with us</a>
              </li>
              <li><Link className="button secondary" to="/what-is-the-sonic-color-line/">What is the sonic color line</Link></li>
            </ul>
          </div>



        </div>


      </section>
    </div>


    <div className={home.wrapperLower}>

      <section className={home.column}>
        <dl className={home.keyValue} data-animate="fade">
          <dt>Pledge your name and your organization to the following actions today</dt>
          <dd>
            <ol>
              <li data-animate="slide-left" data-animate-delay="200">Make a specific, measurable, and public commitment to casting Black voices.</li>
              <li data-animate="slide-left" data-animate-delay="200">Diversify talent rosters, making sure that BIPOC represent at least 50%.</li>
              <li data-animate="slide-left" data-animate-delay="200">Mandate that vendors meet diversity and inclusion benchmarks.</li>
            </ol>
          </dd>
        </dl>

        <dl className={home.keyValue} data-animate="fade">
          <dt>Stand For Sonic Diversity Best Practices</dt>
          <dd>
            <ul>
              <li data-animate="slide-left">Refuse to support “blackvoice” casting, where white voice actors are cast in Black roles.</li>
              <li data-animate="slide-left">Never direct Black voice talent to sound “more black” or “less black.”</li>
              <li data-animate="slide-left">Diversify voices cast for the “general market,” rather than defaulting to the use of a white voice</li>
              <li data-animate="slide-left">Audit casting practices on a regular basis to ensure adherence to diverse casting practices.</li>
              <li data-animate="slide-left">Extend DEI efforts to all decision makers regarding voice casting and scripting.</li>
              <li data-animate="slide-left">Establish and engage a diversity review panel to identify stereotypes in creative work and vet sensitive work.</li>
              <li data-animate="slide-left">Engage professionals who can work with your teams to encourage active listening, acknowledging the sonic color lines we draw in our lives, our work, and our communities.</li>
            </ul>
          </dd>
        </dl>
      </section>

      <footer className={home.footer}>
        <Footer />
      </footer>


    </div>
  </Layout>
)

export default IndexPage
