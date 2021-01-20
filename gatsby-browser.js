/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import "./src/scss/styles.scss"

export const onClientEntry = () => {
  window.onload = () => {
    console.log("Page loaded");
    setTimeout(() => {
      document.body.classList.add('show')
    }, 500);
   }
}