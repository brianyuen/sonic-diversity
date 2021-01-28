import React from "react"
import MicroModal from "micromodal"
import modal from '../scss/modal.module.scss'


export default function Modal() {
  MicroModal.init();
  return (
    <>

    <div className={`${modal.modal} micromodal-slide`} id="standwithus" aria-hidden="true">
      <div className="modal__overlay" tabIndex="-1" data-micromodal-close>
        <div className="modal__container" role="dialog" aria-modal="true" aria-labelledby="standwithus-title" >

          <main className="modal__content" id="standwithus-content">
            <div className={modal.content}>

              <div className={`${modal.firstCol} centered`}>
                <h2>Stand with us</h2>
                <p>The sonic color line wasn’t drawn overnight. Breaking it requires us to retrain the way we listen, to diversify the sonic spaces we inhabit, and to change the creative choices we’re making that serve to perpetuate systemically racist sonic structures. We can’t do it alone, but together, we can make a difference.</p>

                <p>Take that first step. Stand with us for sonic diversity.</p>
              </div>

              <div className={`${modal.secondCol} centered`}>
                {/* Marketo form */}
                <form id="mktoForm_1558"></form>
                <div id="confirmform" style={{visibility:'hidden',display: 'none'}}>
                  <h2>Thank you for taking the stand.</h2>
                  <p>We will follow up shortly regarding this matter.</p>
                </div>

              </div>
            </div>
          </main>
          <button className="modal__close" aria-label="Close modal" data-micromodal-close />

        </div>
      </div>
    </div>

    </>
  )
}
