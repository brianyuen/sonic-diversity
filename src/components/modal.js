import React from "react"
import MicroModal from "micromodal"
import modal from '../scss/modal.module.scss'


export default function Modal() {
  MicroModal.init();
  return (
    <>

    <div className={`${modal.modal} micromodal-slide`} id="standwithus" aria-hidden="true">
      <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
        <div
          className="modal__container"
          role="dialog"
          aria-modal="true"
          aria-labelledby="standwithus-title"
        >
          <header className="modal__header">
            <h2 className="modal__title" id="standwithus-title">
              Micromodal
            </h2>
            <button
              className="modal__close"
              aria-label="Close modal"
              data-micromodal-close
            />
          </header>
          <main className="modal__content" id="standwithus-content">
            <p>
              Try hitting the <code>tab</code> key and notice how the focus
              stays within the modal itself. Also, <code>esc</code> to close
              modal.
            </p>
          </main>
          <footer className="modal__footer">
            <button className="modal__btn modal__btn-primary">Continue</button>
            <button
              className="modal__btn"
              data-micromodal-close
              aria-label="Close this dialog window"
            >
              Close
            </button>
          </footer>
        </div>
      </div>
    </div>

    </>
  )
}


