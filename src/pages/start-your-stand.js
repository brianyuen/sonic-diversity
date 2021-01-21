import React from 'react'
import { Link } from 'gatsby'
import { ModalRoutingContext } from 'gatsby-plugin-modal-routing'

import form from '../scss/form.module.scss'

const ModalForm = () => (
  <ModalRoutingContext.Consumer>
    {({ modal, closeTo }) => (
      <div>
        {modal ? (
          <Link to={closeTo}>
            Close
          </Link>
        ) : (
          <header>
            <h1>Stand for Sonic Diversity</h1>
          </header>
        )}

        <h2 className={form.icoClose}>Stand with Us</h2>

        <p>Eros viverra at auctor gravida donec etiam suscipit rhoncus, habitasse lobortis id tristique bibendum mauris consequat, ante platea inceptos dui massa pellentesque tempor. Vel sagittis cubilia aliquam pulvinar venenatis per elit dapibus eget fusce porta, dignissim consequat adipiscing conubia at phasellus ridiculus viverra velit lorem primis magna, ornare iaculis volutpat fames ut condimentum suspendisse gravida auctor varius. Quam porta leo ultrices natoque ridiculus massa sodales posuere egestas felis taciti, ut dictum purus luctus diam blandit eleifend sociosqu erat viverra sollicitudin, phasellus etiam montes libero volutpat scelerisque lectus parturient curae orci.</p>

      </div>
    )}
  </ModalRoutingContext.Consumer>
)

export default ModalForm