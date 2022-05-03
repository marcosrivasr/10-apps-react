import React, { Suspense, lazy } from "react";
import * as ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";

export default function openModal() {
  const Modal = lazy(() => import("./settingsModal"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);

  const root = createRoot(modalDiv); // createRoot(container!) if you use TypeScript
  root.render(
    <Suspense fallback={<div>Loading</div>}>
      <Modal root={root} />
    </Suspense>
  );

  /*  const Modal = lazy(() => import("./settingsModal"));
  const modalDiv = document.createElement("div");
  modalDiv.id = "modal";
  document.body.appendChild(modalDiv);
  ReactDOM.render(
    <Suspense fallback={<div>Loading</div>}>
      <Modal />
    </Suspense>,
    modalDiv
  ); */
}

/**
 * import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App tab="home" />);
 */
