import React from 'react'

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="/js/site.js"
      src="/js/site.js"
    />
  ])
}