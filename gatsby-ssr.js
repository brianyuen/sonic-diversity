import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="mktoForm_1558"
      src="//app-ab16.marketo.com/js/forms2/js/forms2.min.js"
    />,
    <script
      key="/js/site.js"
      src="/js/site.js"
    />
  ])
}