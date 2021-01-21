import "./src/scss/styles.scss"

export const onClientEntry = () => {
  window.onload = () => {
    setTimeout(() => {
      document.body.classList.add('show')
    }, 500);
   }
}