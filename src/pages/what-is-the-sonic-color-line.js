import React from "react"
import { graphql } from 'gatsby'
import { Helmet } from "react-helmet"
// import Img from 'gatsby-image'

import Layout from "../components/layout"
import SEO from "../components/seo"

import single from '../scss/single.module.scss'

import Header from "../components/header"
import Footer from "../components/footer"

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
const SinglePage = () => (
  <Layout>
    <SEO title="What is The Sonic Color Line" />
    <Helmet bodyAttributes={{id: 'single'}}  />

    <div className={single.wrapper} id="content">
      <Header />

      <div className={single.content}>
        <h1>What is The Sonic Color Line</h1>
        <p>In her book, Binghamton University professor Jennifer Lynn Stoever coined “the Sonic Color Line” to describe the existence of a hierarchical division between the perceived “whiteness” and “blackness” of sounds, derived from listening practices exerted by a dominant culture. These listening practices perpetuate sonic stereotypes so effectively that, over time, we have been socialized to associate white voices as representative of the American identity.</p>

        <dl className={single.keyValue}>
          <dt>Who is Studio Resonate</dt>
          <dd><p>We are the audio-first creative consultancy within the SiriusXM/Pandora media group. Over the past ten years, we’ve produced over a quarter of a million audio ads. Being one of the largest producers of audio advertising in the world, we are in a unique position; ads that we produce hit the ears of the 150 million unique listeners we reach in Pandora, SiriusXM, SoundCloud and Stitcher audiences. Decisions we make can have a big impact on what people hear everyday that can normalize or perpetuate behaviors and biases.</p>
          </dd>

          <dt>Why we are launching this initiative</dt>
          <dd>
            <p>In the aftermath of the murders of George Floyd, Breonna Taylor, and Ahmaud Arbery, the Black Lives Matter movement grew from a hashtag into a global cry for equality, equity, and justice. As a result,addressing racial injustice has become a long overdue business imperative.</p>

            <p>This particularly true for brands, advertising agencies, and marketers. We are being challenged to move beyond hollow messaging and address the need for change at a systemic level within our industry. For too long, color lines have been drawn that perpetuate white privilege, elitism, and discrimination.</p>

            <p>While political structures and visual symbols can, and do, perpetuate racism, we believe there are sonic markers that are just as powerful in defining how we hear (and represent) the world around us.</p>

            <p>Given that the sonic color line exists, we in the advertising and marketing industries need to understand that racism isn’t just a visual or textual issue. It’s a sonic issue as well. These sonic color lines impact our marketing and messaging decisions, amplifying white voices, and creating an atmosphere where Black voices are forced to adapt in order to be heard. Crossing these sonic color lines requires us to retrain the way we listen, to diversify the sonic spaces we inhabit, and to change the creative choices we’re making that serve to perpetuate systemically racist sonic structures.</p>
          </dd>

        </dl>
      </div>


    </div>

    <footer className={single.footer}>
      <Footer />
    </footer>

  </Layout>
)

export default SinglePage
