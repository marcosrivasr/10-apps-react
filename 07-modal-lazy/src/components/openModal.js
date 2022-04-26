import React, { Suspense, lazy } from "react";
import * as ReactDOM from "react-dom";

export default function openModal(modalUrl) {
  const Modal = lazy(() => import(modalUrl));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);
  ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
      <Modal />
    </Suspense>,
    modalDiv
  );
}
