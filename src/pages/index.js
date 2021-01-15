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
      <section className={`centered ${home.firstCol}`}>
        <Img fluid={props.data.imageOne.childImageSharp.fluid} className={home.logo} alt="Logo" />
      </section>
      <section className={home.secondCol}>
        <h1>Lines have been drawn that perpetuate racism in every industry.</h1>
        <p>Scelerisque ligula lorem convallis placerat pharetra fringilla curae vitae ullamcorper augue inceptos elit vehicula est, aenean aliquam sociis quisque tristique sed imperdiet sapien tempus suspendisse pretium erat. Id venenatis litora fermentum lorem diam dolor lacus quis</p>

        <p>Nunc feugiat platea augue fames etiam id elit ornare, pellentesque aliquet sociis morbi sit in libero pulvinar, condimentum proin vivamus urna ad suspendisse at. Tempus blandit nam magnis vel taciti venenatis lobortis ante, ornare est mattis pellentesque sem dictum bibendum eu</p>

        <ul className={home.introCta}>
          <li><Link className="button primary" to="/page-2/">Start your stand</Link></li>
          <li><Link className="button secondary" to="/page-2/">What is the sonic color line</Link></li>
        </ul>

      </section>
    </div>

    <div className={home.wrapperLower}>
    <p>Tempus ligula morbi sagittis leo phasellus magnis augue penatibus etiam bibendum fames, sed ut libero dolor curabitur duis cursus non hendrerit. Varius primis ligula proin aliquam felis dignissim adipiscing tincidunt suscipit mollis nullam dolor facilisi, integer leo cubilia congue orci fusce penatibus fames taciti eget sit. Commodo nunc dignissim eu sapien curabitur nostra ridiculus maecenas interdum aliquam, euismod magnis donec convallis augue phasellus ultrices mattis nibh, vulputate himenaeos vestibulum fermentum hendrerit lacinia duis massa ultricies. Sed quisque vehicula scelerisque accumsan gravida tempus massa, dolor sem habitant pharetra auctor convallis viverra, per natoque eros nullam urna habitasse risus, augue consequat netus sociosqu tincidunt hac. Dui et iaculis libero sodales sociosqu ut pretium, cursus facilisi purus tempor primis litora. Egestas erat convallis maecenas blandit hendrerit sit at duis a, vehicula habitant dolor imperdiet cursus habitasse phasellus consectetur metus et, aenean congue mattis gravida integer fusce purus eget.</p>

    <p>Eros himenaeos id porttitor magnis primis ridiculus purus amet accumsan eget mauris bibendum, netus nascetur sagittis felis ipsum sodales est consectetur laoreet nisl lacus. Pellentesque pulvinar primis quis purus tristique venenatis ultricies euismod facilisi, netus habitasse libero sociis a lacinia cursus vehicula dignissim, mollis nunc vitae potenti lacus convallis donec consectetur. Tortor condimentum sem penatibus vulputate massa ac congue orci facilisi, consequat purus quam parturient habitant maecenas pretium felis, conubia lectus aenean pellentesque sociosqu amet mattis donec. Penatibus porta aliquet aenean hendrerit magna tortor pulvinar torquent ut, duis platea sit lacus inceptos aliquam posuere vulputate cras, suscipit sapien ultrices facilisis ante accumsan quam sociosqu. Habitasse sociosqu egestas nunc vestibulum iaculis curabitur massa risus scelerisque gravida, integer dictumst aenean consequat lectus cubilia pulvinar mauris torquent, erat duis at fames porta nostra tempor nisl nam. Magnis parturient semper ut elit aptent risus at nisl himenaeos, lacinia ad ridiculus mollis congue ultrices dolor lacus vitae urna, faucibus tristique nec habitasse penatibus libero mi quam. Nam nullam adipiscing aenean pellentesque vehicula praesent curae accumsan odio litora dis, et per scelerisque mauris facilisis a massa turpis sit nibh, netus varius rhoncus faucibus arcu porttitor dignissim auctor erat curabitur. Fames aptent amet ac maecenas donec sapien tortor, varius commodo nulla curabitur vitae etiam condimentum, gravida porta nisi metus pharetra dictum. Fringilla lacus vestibulum dui penatibus cursus nascetur tristique purus, platea suspendisse massa sapien elementum conubia pulvinar mauris, hac et fames dolor viverra eget libero, sociosqu accumsan nibh montes netus nunc dignissim.</p>
    </div>
  </Layout>
)

export default IndexPage
